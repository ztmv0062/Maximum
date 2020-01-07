import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {

  constructor(private router: Router, private service: MessageService) { }

  ngOnInit() { }

  navigatetoCalender() {
    this.router.navigate(['settings'], { queryParams: { type: 'settings' } });
    this.service.sendMessage('settings');
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) { 
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
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
