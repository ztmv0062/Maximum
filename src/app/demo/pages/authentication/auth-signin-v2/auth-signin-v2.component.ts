import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-signin-v2',
  templateUrl: './auth-signin-v2.component.html',
  styleUrls: ['./auth-signin-v2.component.scss']
})
export class AuthSigninV2Component implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  login() {
    
     this.router.navigate(['dashboard']);
  

  }
}
