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
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
  }
    let obj = {
      email: this.email,
      user_pass: this.password,
    };
    this.authenticationService.loginUser(obj,(res)=>{
      if (res.status == 'error') {
        this.toggle = true;
      } else {
        this.toggle = false;
        // this.toastEvent.toast({uid: 'toast5', delay: 1000})
        // this.toastr.success('You have logged in successfully!');
        // this.toastr.success('You have logged in successfully!' , 'Error!');
        localStorage.setItem('token', res.cookie);
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('id', res.user.id);
        localStorage.setItem('token', res.cookie);
        // this.toastr.success('You have logged in successfully!','success');
        // this.router.navigate(['dashboard']);
        this.router.navigate(['dashboard'], { queryParams: { type: 'home' } });
      }
    })
    // if(this.username == 'admin' && this.password == 'admin'){
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }
  }
}
