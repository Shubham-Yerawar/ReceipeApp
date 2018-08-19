import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn : boolean;
  constructor(private _authService : AuthService) { 
    this.loggedIn = this._authService.isUserLoggedIn();
  }

  ngOnInit() {
  }

  login(){
    this._authService.login();
    this.loggedIn = this._authService.isUserLoggedIn();
    console.log("user : ", this._authService.isUserLoggedIn());
  }

  logout(){
    
    this._authService.logout();
    this.loggedIn = this._authService.isUserLoggedIn();
    console.log("user logged out",this._authService.isUserLoggedIn());
  }
}
