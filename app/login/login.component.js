System.register(['angular2/core', 'rxjs/Rx', '../login/login', '../blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, Rx_1, login_1, blocks_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_loginService, 
                    //private _router: Router,
                    _toastService) {
                    this._loginService = _loginService;
                    this._toastService = _toastService;
                }
                LoginComponent.prototype.login = function (user_name, password) {
                    var _this = this;
                    // this._spinnerService.show();
                    this.userInfo = this._loginService.login(user_name, password)
                        .catch(function (e) {
                        _this._toastService.activate("" + e);
                        return Rx_1.Observable.of();
                    });
                    // .finally(() => { this._spinnerService.hide(); })
                };
                LoginComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/login/login.component.html',
                        styleUrls: ['app/login/login.component.css']
                    }), 
                    __metadata('design:paramtypes', [login_1.LoginService, blocks_1.ToastService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map