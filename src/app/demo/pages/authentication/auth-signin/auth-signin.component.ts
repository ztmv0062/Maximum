import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    // if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(['dashboard']);
  }
}
