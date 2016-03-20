import {Component, Input, OnDestroy, OnInit} from 'angular2/core';
import {CanDeactivate, ComponentInstruction, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable, Subscription} from 'rxjs/Rx';
import { EntityService, ModalService, ToastService } from '../blocks/blocks';
//import { UserInfo, LoginService } from '../login/login';

export interface UserLogin {
    user_name:string;
    password:string;
}

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent implements CanDeactivate, OnInit, OnDestroy {
    private _dbResetSubscription:Subscription;

    @Input()
    userLogin:UserLogin;
    editUserLogin:UserLogin = <UserLogin>{user_name: "David", password: "pword"};

    //userInfo: Observable<UserInfo>;

    constructor(//private _loginService: LoginService,
                private _router:Router,
                private _entityService: EntityService,
                private _modalService: ModalService,
                private _toastService:ToastService) {
    }

    login() {

        this.editUserLogin.user_name = "David";
        // this._spinnerService.show();

        /*this.userInfo = this._loginService.login(user_name, password)
         .catch(e => {
         this._toastService.activate(`${e}`);
         return Observable.of();
         })*/
        // .finally(() => { this._spinnerService.hide(); })
    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        return this._modalService.activate();
    }

    private _handleServiceError(op: string, err: any) {
        console.error(`${op} error: ${err.message || err}`);
    }

    /*private _isDirty() {
        return this._entityService.propertiesDiffer(this.userLogin, this.editUserLogin);
    }*/

    /*private _gotoUserLogin() {
        let id = this.userLogin ? this.userLogin.user_name : null;
        let route = ['UserLogin', { user_name: userLogin.user_name }];
        this._router.navigate(route);
    }*/

    ngOnInit() {

    }

    ngOnDestroy() {
        //this._dbResetSubscription.unsubscribe();
    }

    /*private _setEditUserLogin(userLogin: UserLogin) {
        if (userLogin) {
            this.userLogin = userLogin;
            this.editUserLogin = this._entityService.clone(this.userLogin);
        } else {
            this._gotoUserLogin();
        }
    }*/
}
