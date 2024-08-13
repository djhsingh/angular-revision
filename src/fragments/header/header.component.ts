import { Component } from '@angular/core';
import { AuthenticateService } from '../../app/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authenticate : AuthenticateService,private router:Router){

  }

  isUserLoggedIn(){
    return this.authenticate.isLoggedIn();
  }
  
  logout(){
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/login');
  }
}
