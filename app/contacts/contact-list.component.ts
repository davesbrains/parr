import { Component, OnDestroy, OnInit, ViewChild } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Contact, ContactService } from './contact.service';
import { SortContactsPipe } from './sort-contacts.pipe';
import { FilterService, FilterTextComponent } from '../blocks/blocks';

@Component({
  selector: 'story-contacts',
  templateUrl: './app/contacts/contact-list.component.html',
  directives: [FilterTextComponent, ROUTER_DIRECTIVES],
  styleUrls: ['./app/contacts/contact-list.component.css'],
  pipes: [SortContactsPipe],
  providers: [FilterService]
})
export class ContactListComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  contacts: Contact[];
  filteredContacts = this.contacts;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(private _contactService: ContactService,
    private _filterService: FilterService) { }

  filterChanged(searchText: string) {
    this.filteredContacts = this._filterService.filter(searchText, ['id', 'last_name', 'type'], this.contacts);
  }

  getContacts() {
    this.contacts = [];

    this._contactService.getContacts()
      .subscribe(contacts => {
        this.contacts = this.filteredContacts = contacts;
        this.filterComponent.clear();
      });
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    //componentHandler.upgradeDom();
    this.getContacts();
    this._dbResetSubscription = this._contactService.onDbReset
      .subscribe(() => this.getContacts());
  }
}
