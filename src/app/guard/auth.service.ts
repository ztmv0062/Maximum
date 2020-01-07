import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public accessTokenId;
  public userData;

  constructor() {
    this.accessTokenId = localStorage.getItem('customerAccessToken');
    // let a = sessionStorage.getItem('UserData');
    // this.userData = JSON.parse(a);
  }
  setLocalStorage(data) {        
    localStorage.setItem('customerAccessToken', data.token);
  }
  clearLocalStorage() {
    localStorage.removeItem('customerAccessToken');
  }
}
