import { Component, OnInit } from '@angular/core';

export class FormInput {
  email: any;
  password: any;
  enabled: any;
  encryption: any;
  ssl: any;
  port: any;
  server: any;
  username: any;
  name: any;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  formInput: FormInput;
  form: any;
  public isSubmit: boolean;
  constructor() {
    this.isSubmit = false;
  }

  ngOnInit() {
    this.formInput = {
      name:'',
      email: '',
      password: '',
      username: '',
      server: '',
      port: '',
      ssl: '',
      encryption: '',
      enabled: '',      
    };
  }

  save(form: any) {
    console.log(form)
    if (!form.valid) {
      this.isSubmit = true;
      alert("Form Submitted")
    
      return;
    }
  }

}
