import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

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
  imap_username: any;
  imap_password: any;
  imap_server: any;
  imap_port: any;
  imap_ssl: any;
  imap_encryption: any;
  imap_enabled: any;
  smtp_server: any;
  smtp_port: any;
  smtp_encryption: any;
  smtp_ssl: any;
  smtp_username: any;
  signature: any;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  formInput: FormInput;
  form: any;
  imap_encryption_type: String
  smtp_encryption_type: String
  select_field: String
  public isSubmit: boolean;
  constructor(private coreService: CoreService,) {
    this.isSubmit = false;
  }

  ngOnInit() {
    this.formInput = {
      name:'',
      email: '',
      password: '',
      imap_username: '',
      imap_password: '',
      imap_server: '',
      imap_port: '',
      imap_ssl: '',
      imap_encryption: '',      
      imap_enabled: '',      
      smtp_server: '',      
      smtp_port: '',      
      smtp_encryption: '',      
      smtp_ssl: '',      
      smtp_username: '',
      signature:'',
    };
  }

  save(form: any) {  
      this.isSubmit = true;
      let obj = this.formInput
      let token = localStorage.getItem('token')
      let user_id = localStorage.getItem('id')
      obj['user_id'] = user_id

      let data = {
        user_id:user_id,
        name: this.formInput.name,
        password:this.formInput.password,
        email: this.formInput.email,
        username: this.formInput.name,
        imap_username: this.formInput.imap_username,
        imap_password: this.formInput.imap_password,
        signature: this.formInput.signature,
        imap_server: this.formInput.imap_server,
        smtp_server: this.formInput.smtp_server,
        imap_port: this.formInput.imap_port,
        smtp_port: this.formInput.smtp_port,
        smtp_encryption: this.smtp_encryption_type,
        imap_encryption: this.imap_encryption_type,
      }      
      this.coreService.post('addsmtpaccount?api_token='+token, data).subscribe((res: any) => {
      }, (error) => {
        console.log(error)
      });
    }
  

}
