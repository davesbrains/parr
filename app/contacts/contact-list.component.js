System.register(['angular2/core', 'angular2/router', './contact.service', './sort-contacts.pipe', '../blocks/blocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, contact_service_1, sort_contacts_pipe_1, blocks_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (sort_contacts_pipe_1_1) {
                sort_contacts_pipe_1 = sort_contacts_pipe_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService, _filterService) {
                    this._contactService = _contactService;
                    this._filterService = _filterService;
                    this.filteredContacts = this.contacts;
                }
                ContactListComponent.prototype.filterChanged = function (searchText) {
                    this.filteredContacts = this._filterService.filter(searchText, ['id', 'last_name', 'first_name', 'type'], this.contacts);
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this.contacts = [];
                    this._contactService.getContacts()
                        .subscribe(function (contacts) {
                        _this.contacts = _this.filteredContacts = contacts;
                        _this.filterComponent.clear();
                    });
                };
                ContactListComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //componentHandler.upgradeDom();
                    this.getContacts();
                    this._dbResetSubscription = this._contactService.onDbReset
                        .subscribe(function () { return _this.getContacts(); });
                };
                __decorate([
                    core_1.ViewChild(blocks_1.FilterTextComponent), 
                    __metadata('design:type', blocks_1.FilterTextComponent)
                ], ContactListComponent.prototype, "filterComponent", void 0);
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contacts-list-component',
                        templateUrl: './app/contacts/contact-list.component.html',
                        directives: [blocks_1.FilterTextComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['./app/contacts/contact-list.component.css'],
                        pipes: [sort_contacts_pipe_1.SortContactsPipe],
                        providers: [blocks_1.FilterService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, blocks_1.FilterService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});
//# sourceMappingURL=contact-list.component.js.map