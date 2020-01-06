import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from 'src/app/theme/shared/components/toast/toast.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  toggle:boolean = false;
constructor(private router: Router,private authenticationService: AuthenticationService, private toastr: ToastrService , public toastEvent: ToastService , private formBuilder: FormBuilder) {
    
  }
  email: string = "";
  password: string ="";
  ngOnInit() {
    this.loginForm = this.formBuilder.group({      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required],
      // acceptTerms: [false, Validators.requiredTrue]
  }, 
  // {
  //     validator: MustMatch('password', 'confirmPassword')
  // }
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
    this.authenticationService.loginIntoAdmin(obj,(res)=>{
      console.log("login")
      if (res.status == 'error') {
        this.toggle = true;
      } else {
        this.toggle = false;
      console.log(res,"Abcd")
        localStorage.setItem('token', res.cookie);
        localStorage.setItem('email', res.email);
        localStorage.setItem('id', res.id);
        localStorage.setItem('token', res.cookie);
        
        this.router.navigate(['/dashboard'], { queryParams: { type: 'home' } });
      }
    })
 
  }
}
