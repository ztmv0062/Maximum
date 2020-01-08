import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastService } from 'src/app/theme/shared/components/toast/toast.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreService } from 'src/app/services/core.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  toggle: boolean = false;
  constructor(private router: Router, private authenticationService: AuthenticationService,
    private coreService: CoreService,
    public toastEvent: ToastService,
    private formBuilder: FormBuilder) {

  }
  email: string = "";
  password: string = "";
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    },

    );
  }

  get f() { return this.loginForm.controls; }

  login() {
    console.log("login")
    this.submitted = true;
    if (this.loginForm.invalid) {
      // return;
      console.log("hjggh");
    }
    console.log("login")
    let obj = {
      email: this.email,
    };


    this.coreService.post('login?api_token='+environment.token, obj).subscribe((res: any) => {
      if (res.status == 'error') {
        this.toggle = true;
      } else {
        this.toggle = false;
        localStorage.setItem('token', res.cookie);
        localStorage.setItem('email', res.email);
        localStorage.setItem('id', res.id);
        localStorage.setItem('token', res.api_token);
        localStorage.setItem('name', res.name);
        this.router.navigate(['/dashboard'], { queryParams: { type: 'home' } });
      }
    }, (error) => {
      console.log(error)
    });


  }
}
