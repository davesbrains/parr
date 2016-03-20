System.register(['angular2/core', 'angular2/router', '../blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, router_1, blocks_1;
    var LoginComponent;
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
            }],
        execute: function() {
            LoginComponent = (function () {
                //userInfo: Observable<UserInfo>;
                function LoginComponent(//private _loginService: LoginService,
                    _router, _entityService, _modalService, _toastService) {
                    this._router = _router;
                    this._entityService = _entityService;
                    this._modalService = _modalService;
                    this._toastService = _toastService;
                    this.editUserLogin = { user_name: "David", password: "pword" };
                }
                LoginComponent.prototype.login = function () {
                    this.editUserLogin.user_name = "David";
                    // this._spinnerService.show();
                    /*this.userInfo = this._loginService.login(user_name, password)
                     .catch(e => {
                     this._toastService.activate(`${e}`);
                     return Observable.of();
                     })*/
                    // .finally(() => { this._spinnerService.hide(); })
                };
                LoginComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return this._modalService.activate();
                };
                LoginComponent.prototype._handleServiceError = function (op, err) {
                    console.error(op + " error: " + (err.message || err));
                };
                /*private _isDirty() {
                    return this._entityService.propertiesDiffer(this.userLogin, this.editUserLogin);
                }*/
                /*private _gotoUserLogin() {
                    let id = this.userLogin ? this.userLogin.user_name : null;
                    let route = ['UserLogin', { user_name: userLogin.user_name }];
                    this._router.navigate(route);
                }*/
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.ngOnDestroy = function () {
                    //this._dbResetSubscription.unsubscribe();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LoginComponent.prototype, "userLogin", void 0);
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login/login.component.html',
                        styleUrls: ['app/login/login.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, blocks_1.EntityService, blocks_1.ModalService, blocks_1.ToastService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map