import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  isLoggedIn(){
    let username = localStorage.getItem('auth');
    if(username ==null || username == '' ||  username == undefined){
       return false;
    } else{
      return true;
    }
  }
}
