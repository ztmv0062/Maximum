import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
 username: string = "";
 email: string = "";
 password: string ="";
 toggle:boolean = false;
 error:boolean = false;
 errorMessage: string = "";
  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService, private formBuilder: FormBuilder , private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
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
  get f() { return this.registerForm.controls; }
  submitUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  } else {
    let obj = {
      username: this.username,
      email: this.email,
      user_pass: this.password,
      // nonce:'eb54caf11a',
      display_name:this.username,
      // notify:'both'
    };
    this.authenticationService.registerUser(obj,(res)=>{
      if(res.status == 'error'){
        this.errorMessage = res.error
        this.error = true
      } else {
        this.error = false
        this.toastr.success('You have registered successfully!','success');
        this.toggle = true;
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        // this.router.navigate(['dashboard']);
        
      }
    })
  }

    // .subscribe(res => {
    //   console.log(res)
    //   console.log('user registered successfully');
    //   this.toggle = true;
    // }, err => {
    //   console.log(err);
    // });
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
