import { Component, OnDestroy, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Contact, ContactService } from '../contacts/contacts';
import { ToastService } from '../blocks/blocks';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  contacts: Observable<Contact[]>;

  constructor(
    private _contactService: ContactService,
    private _router: Router,
    private _toastService: ToastService) { }

  getContacts() {
    // this._spinnerService.show();
    this.contacts = this._contactService.getContacts()
      .catch(e => {
        this._toastService.activate(`${e}`);
        return Observable.of();
      })
      // .finally(() => { this._spinnerService.hide(); })
  }

  gotoDetail(contact: Contact) {
    let link = ['Contacts', 'Contact', { id: contact.id }];
    this._router.navigate(link);
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    this.getContacts();
    this._dbResetSubscription = this._contactService.onDbReset
      .subscribe(() => this.getContacts());
  }
}
