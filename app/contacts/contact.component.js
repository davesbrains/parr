System.register(['angular2/core', 'angular2/router', '../blocks/blocks', '../contacts/contact.service'], function(exports_1, context_1) {
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
    var core_1, router_1, blocks_1, contact_service_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_contactService, _entityService, _modalService, _routeParams, _router, _toastService) {
                    this._contactService = _contactService;
                    this._entityService = _entityService;
                    this._modalService = _modalService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._toastService = _toastService;
                    this.editContact = {};
                }
                ContactComponent.prototype.cancel = function (showToast) {
                    if (showToast === void 0) { showToast = true; }
                    this.editContact = this._entityService.clone(this.contact);
                    if (showToast) {
                        this._toastService.activate("Cancelled changes to " + this.contact.last_name);
                    }
                };
                ContactComponent.prototype.delete = function () {
                    var _this = this;
                    var msg = "Do you want to delete " + this.contact.last_name + "?";
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this.cancel(false);
                            _this._contactService.deleteContact(_this.contact)
                                .subscribe(function () {
                                _this._toastService.activate("Deleted " + _this.contact.last_name);
                                _this._gotoContacts();
                            });
                        }
                    });
                };
                ContactComponent.prototype.isAddMode = function () {
                    var id = +this._routeParams.get('id');
                    return isNaN(id);
                };
                ContactComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                ContactComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //componentHandler.upgradeDom();
                    this._getContact();
                    this._dbResetSubscription = this._contactService.onDbReset
                        .subscribe(function () { return _this._getContact(); });
                };
                ContactComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !this.contact ||
                        !this._isDirty() ||
                        this._modalService.activate();
                };
                ContactComponent.prototype.save = function () {
                    var _this = this;
                    var contact = this.contact = this._entityService.merge(this.contact, this.editContact);
                    if (contact.id == null) {
                        this._contactService.addContact(contact)
                            .subscribe(function (con) {
                            _this._setEditContact(con);
                            _this._toastService.activate("Successfully added " + con.last_name);
                            _this._gotoContacts();
                        });
                        return;
                    }
                    this._contactService.updateContact(contact)
                        .subscribe(function () { return _this._toastService.activate("Successfully saved " + contact.last_name); });
                };
                ContactComponent.prototype._getContact = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id === 0)
                        return;
                    if (this.isAddMode()) {
                        this.contact = { last_name: '', type: 'dark' };
                        this.editContact = this._entityService.clone(this.contact);
                        return;
                    }
                    this._contactService.getContact(id)
                        .subscribe(function (contact) { return _this._setEditContact(contact); });
                };
                ContactComponent.prototype._gotoContacts = function () {
                    var id = this.contact ? this.contact.id : null;
                    var route = ['Contacts', { id: id }];
                    this._router.navigate(route);
                };
                ContactComponent.prototype._handleServiceError = function (op, err) {
                    console.error(op + " error: " + (err.message || err));
                };
                ContactComponent.prototype._isDirty = function () {
                    return this._entityService.propertiesDiffer(this.contact, this.editContact);
                };
                ContactComponent.prototype._setEditContact = function (contact) {
                    if (contact) {
                        this.contact = contact;
                        this.editContact = this._entityService.clone(this.contact);
                    }
                    else {
                        this._gotoContacts();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ContactComponent.prototype, "contact", void 0);
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'story-contact',
                        templateUrl: 'app/contacts/contact.component.html',
                        styles: ['.mdl-textfield__label {top: 0;}'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, blocks_1.EntityService, blocks_1.ModalService, router_1.RouteParams, router_1.Router, blocks_1.ToastService])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map