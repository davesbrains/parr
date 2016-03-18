import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list.component';
import { ContactService } from './contact.service';

@Component({
  selector: 'contacts-component-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Contacts', component: ContactListComponent, useAsDefault: true },
	{ path: '/list/:id', name: 'Contacts', component: ContactListComponent	},
	{ path: '/:id', name: 'Contact', component: ContactComponent }
])
export class ContactsComponent { }
