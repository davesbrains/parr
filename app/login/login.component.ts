import { Component, OnDestroy, OnInit } from 'angular2/core';
//import { Router } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { UserInfo, LoginService } from '../login/login';
import { ToastService } from '../blocks/blocks';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  userInfo: Observable<UserInfo>;

  constructor(
    private _loginService: LoginService,
    //private _router: Router,
    private _toastService: ToastService) { }

  login(user_name:string, password:string) {
    // this._spinnerService.show();
    this.userInfo = this._loginService.login(user_name, password)
      .catch(e => {
        this._toastService.activate(`${e}`);
        return Observable.of();
      })
      // .finally(() => { this._spinnerService.hide(); })
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {

  }
}
