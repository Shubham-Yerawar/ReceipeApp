import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  _isLoggedIn : boolean = false;
  constructor() { }

  isUserLoggedIn(){
    return this._isLoggedIn;
  }
  login(){
    this._isLoggedIn = true;
  }
  logout(){
    this._isLoggedIn =false;
  }

}
