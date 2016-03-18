import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {ExceptionService, SpinnerService} from '../blocks/blocks';
import {CONFIG, MessageService} from '../shared/shared';

let contactsUrl = CONFIG.baseUrls.contacts;

export interface KeyValuePair {
    type: string; 
    value: string; 
}

export interface Address {
    address: string;
    city: string;
    state: string;
    zip_code: string;
    country_code: string;
}

export interface Contact {
    id:string;
    company_name:string;
    company_id:string;
    type:string;
    created_at:string; //"2015-10-15T20:29:50.823Z"
    custom_fields: Array<string>;
    background:string;
    emails: Array<KeyValuePair>;
    first_name:string;
    last_name:string;
    owner_id:string;
    phones: Array<KeyValuePair>;
    photo_url:string;
    sales_closed_for: Array<string>;
    starred:boolean;
    status:string;
    status_id:string;
    tags: Array<string>;
    modified_at:string;  //"2015-10-15T20:29:50.855Z";
    urls: Array<KeyValuePair>;
    job_title:string;
    address_list: Array<Address>;
    lead_source_id:string;
}

@Injectable()
export class ContactService {
    constructor(private _http:Http,
                private _exceptionService:ExceptionService,
                private _messageService:MessageService,
                private _spinnerService:SpinnerService) {
        this._messageService.state.subscribe(state => this.getContacts());
    }

    addContact(contact:Contact) {
        let body = JSON.stringify(contact);
        this._spinnerService.show();
        return this._http
            .post(`${contactsUrl}`, body)
            .map(res => res.json().data)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }

    deleteContact(contact:Contact) {
        this._spinnerService.show();
        return this._http
            .delete(`${contactsUrl}/${contact.id}`)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }

    getContacts() {
        this._spinnerService.show();
        return this._http.get(contactsUrl)
            .map((response:Response) => <Contact[]>response.json().data)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }

    getContact(id:number) {
        this._spinnerService.show();
        return this._http.get(`${contactsUrl}/${id}`)
            .map((response:Response) => response.json().data)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }

    onDbReset = this._messageService.state;

    updateContact(contact:Contact) {
        let body = JSON.stringify(contact);
        this._spinnerService.show();

        return this._http
            .put(`${contactsUrl}/${contact.id}`, body)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }
}
