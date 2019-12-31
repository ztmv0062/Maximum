import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }
  // user = {
  //   login: '',
  //   password: ''
  // },
  ngOnInit() {
  }
}
