import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoreService } from 'src/app/services/core.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

export class FormInput {
  // email: any;
  // password: any;
  // enabled: any;
  // encryption: any;
  // ssl: any;
  // port: any;
  // server: any;
  // username: any;
  // name: any;
  // imap_username: any;
  // imap_password: any;
  // imap_server: any;
  // imap_port: any;
  // imap_ssl: any;
  // imap_encryption: any;
  // imap_enabled: any;
  // smtp_server: any;
  // smtp_port: any;
  // smtp_encryption: any;
  // smtp_ssl: any;
  // smtp_username: any;
  // signature: any;
  name:any;
  email: any;
  password: any;
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
  signature:any;
}

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  formInput: FormInput;
  form: any;
  imap_encryption_type: String
  smtp_encryption_type: String
  select_field: String
  public isSubmit: boolean;
  dtTrigger=new Subject();
  public items:[];
  public t : any;

  constructor(private coreService: CoreService,private router: Router, private service: MessageService) {
    this.isSubmit = false;
  }

  ngOnInit() {
this.getEmail();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:2
    };
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

  ngOnDestroy() {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getEmail() {
    this.t = localStorage.getItem('name')

   console.log(localStorage.getItem('token') , "hhh")
   this.coreService.get('showallcampaign?api_token='+ localStorage.getItem('token')).subscribe((data: any) => {
     console.log(data)
   this.items = data;
   this.dtTrigger.next();

 console.log(this.items)
   }, (error) => {
     console.log(error)
    
   });
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
  
    navigateToAccount(){
      this.router.navigate(['addnewaccount'], { queryParams: { type: 'settings' } });
      this.service.sendMessage('settings');
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) { 
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
      document.querySelectorAll('.test')[0].classList.add('active-header')
    } , 100)
    this.activeHeader('icon-user')
    
  }

  

  activeHeader(name){
    let dropDowns = Array.from(document.querySelectorAll('.test'));
    dropDowns.forEach(node => {
      node.classList.remove('active-menu');
    });
    for(let i=0 ; i  < document.querySelectorAll('.header-navigation i').length ; i++){
      if(document.querySelectorAll('.header-navigation i')[i].classList.contains(name)){    
        document.querySelectorAll('.header-navigation i')[i].classList.add('active-menu')
      }else {
        document.querySelectorAll('.header-navigation i')[i].classList.remove('active-menu')
      }
    }
  }

}
