import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {ExceptionService, SpinnerService} from '../blocks/blocks';
import {CONFIG, MessageService} from '../shared/shared';

let loginUrl = CONFIG.baseUrls.login;
//let bootstrapUrl = CONFIG.baseUrls.login;

export interface Filter {
    id:string;
    name:string;
}
export interface DealStage {
    stage:number;
    label:string;
}

export interface Reminder {
    type:string;
    hour:number;
}

export interface Settings {
    reminder:Reminder;
    time_zone:string;
    date_format:string;
    listing_size:number;
    currency:string;
    currency_symbol:string;
    popular_countries:Array<string>;
    deal_stages:Array<DealStage>;
    default_contact_type:string;
    show_tidy_stream:boolean;
}

export interface CustomField {
    id:string;
    choices:Array<string>;
    name:string;
    position:number;
    type:string;
    reminder_days:string;
}
export interface CallResults {
    interested:string;
    not_interested:string;
    left_message:string;
    no_answer:string;
    other:string;
}
export interface User {
    id:string;
    account_rights:Array<string>;
    company_name:string;
    email:string;
    bcc_email:string;
    first_name:string;
    last_name:string;
    photo_url:string;
}

export interface UserInfo {
    user_id:string;
    auth_key:string;
    account_type:string;
    custom_fields:Array<CustomField>;
    filters:Array<Filter>;
    call_results:CallResults;
    team:Array<User>;
    settings:Settings;
    user:User;
}

@Injectable()
export class LoginService {
    constructor(private _http:Http,
                private _exceptionService:ExceptionService,
                private _messageService:MessageService,
                private _spinnerService:SpinnerService) {
        //this._messageService.state.subscribe(state => this.getUser(id));
    }

    login() {
        this._spinnerService.show();
        return this._http.get(loginUrl)
            .map((response:Response) => <UserInfo>response.json().data)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }
/*
    getUser(id:string) {
        this._spinnerService.show();
        return this._http.get(`${loginUrl}/${id}`)
            .map((response:Response) => response.json().data)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }
*/
    onDbReset = this._messageService.state;
}
