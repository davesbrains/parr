import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { ExceptionService, SpinnerService } from '../blocks/blocks';
import { CONFIG, MessageService } from '../shared/shared';

let contactsUrl = CONFIG.baseUrls.contacts;

export interface Contact {
  id: number;
  name: string;
  type: string;
}

@Injectable()
export class ContactService {
  constructor(private _http: Http,
    private _exceptionService: ExceptionService,
    private _messageService: MessageService,
    private _spinnerService: SpinnerService) {
    this._messageService.state.subscribe(state => this.getContacts());
  }

  addContact(contact: Contact) {
    let body = JSON.stringify(contact);
    this._spinnerService.show();
    return this._http
      .post(`${contactsUrl}`, body)
      .map(res => res.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  deleteContact(contact: Contact) {
    this._spinnerService.show();
    return this._http
      .delete(`${contactsUrl}/${contact.id}`)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getContacts() {
    this._spinnerService.show();
    return this._http.get(contactsUrl)
      .map((response: Response) => <Contact[]>response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getContact(id: number) {
    this._spinnerService.show();
    return this._http.get(`${contactsUrl}/${id}`)
      .map((response: Response) => response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  onDbReset = this._messageService.state;

  updateContact(contact: Contact) {
    let body = JSON.stringify(contact);
    this._spinnerService.show();

    return this._http
      .put(`${contactsUrl}/${contact.id}`, body)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }
}
