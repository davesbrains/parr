import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { EntityService, ModalService, ToastService } from '../blocks/blocks';
import { Contact, ContactService } from '../contacts/contact.service';

@Component({
  selector: 'story-contact',
  templateUrl: 'app/contacts/contact.component.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContactComponent implements CanDeactivate, OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  @Input() contact: Contact;
  editContact: Contact = <Contact>{};

  constructor(
    private _contactService: ContactService,
    private _entityService: EntityService,
    private _modalService: ModalService,
    private _routeParams: RouteParams,
    private _router: Router,
    private _toastService: ToastService) { }

  cancel(showToast = true) {
    this.editContact = this._entityService.clone(this.contact);
    if (showToast) {
      this._toastService.activate(`Cancelled changes to ${this.contact.last_name}`);
    }
  }

  delete() {
    let msg = `Do you want to delete ${this.contact.last_name}?`;
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.cancel(false);
        this._contactService.deleteContact(this.contact)
          .subscribe(() => {
            this._toastService.activate(`Deleted ${this.contact.last_name}`);
            this._gotoContacts();
          });
      }
    });
  }

  isAddMode() {
    let id = +this._routeParams.get('id');
    return isNaN(id);
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    //componentHandler.upgradeDom();
    this._getContact();
    this._dbResetSubscription = this._contactService.onDbReset
      .subscribe(() => this._getContact());
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return !this.contact ||
      !this._isDirty() ||
      this._modalService.activate();
  }

  save() {
    let contact = this.contact = this._entityService.merge(this.contact, this.editContact);
    if (contact.id == null) {
      this._contactService.addContact(contact)
        .subscribe(con => {
          this._setEditContact(con);
          this._toastService.activate(`Successfully added ${con.last_name}`);
          this._gotoContacts();
        });
      return;
    }
    this._contactService.updateContact(contact)
      .subscribe(() => this._toastService.activate(`Successfully saved ${contact.last_name}`));
  }

  private _getContact() {
    let id = this._routeParams.get('id');
    if (id == null) return;
    if (this.isAddMode()) {
      this.contact = <Contact>{ last_name: '', type: 'individual' };
      this.editContact = this._entityService.clone(this.contact);
      return;
    }
    this._contactService.getContact(id)
      .subscribe(contact => this._setEditContact(contact));
  }

  private _gotoContacts() {
    let id = this.contact ? this.contact.id : null;
    let route = ['Contacts', { id: id }];
    this._router.navigate(route);
  }

  private _handleServiceError(op: string, err: any) {
    console.error(`${op} error: ${err.message || err}`);
  }

  private _isDirty() {
    return this._entityService.propertiesDiffer(this.contact, this.editContact);
  }

  private _setEditContact(contact: Contact) {
    if (contact) {
      this.contact = contact;
      this.editContact = this._entityService.clone(this.contact);
    } else {
      this._gotoContacts();
    }
  }
}
