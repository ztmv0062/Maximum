import { Component, OnInit , NgZone, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NextConfig } from 'src/app/app-config';
import { NavigationItem } from '../../navigation/navigation';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})


export class NavLeftComponent implements OnInit {
  public nextConfig: any;
  public navigation: any;
  constructor(public nav: NavigationItem, private router: Router, private service: MessageService) {
    this.nextConfig = NextConfig.config;
  }

  ngOnInit() {
    this.navigate();
  }
  testEvent($event) {

    // console.log("click event", $event);
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    // this.service.emitSiteBar('home');   
  }
  navigate() {
    this.router.navigate(['dashboard'], { queryParams: { type: 'home' } });
    this.service.sendMessage('home');
    this.activeHeader('icon-users')
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) { 
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
      // document.querySelector('.icon-users').classList.add('active-menu')
    } , 100)
  }
  navigatetoCalender() {
    this.router.navigate(['dashboard'], { queryParams: { type: 'calendar' } });
    this.service.sendMessage('calendar');
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) { 
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
    } , 100)
  
    this.activeHeader('icon-calendar')
  }
  navigatetoChart() {
    this.router.navigate(['dashboard'], { queryParams: { type: 'task' } });
    this.service.sendMessage('task');
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) { 
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
    } , 100)    
  }
  navigatetoCampaigns() {
    this.router.navigate(['/email-campaign'], { queryParams: { type: 'campaigns' } });
    this.service.sendMessage('campaigns');
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) { 
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
    } , 100)
    this.activeHeader('icon-bar-chart')
  }
  navigatetoProspects() {
    this.router.navigate(['dashboard'], { queryParams: { type: 'prospects' } });
    this.service.sendMessage('prospects');
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) { 
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
    } , 200)
    this.activeHeader('icon-book')    
  }
  navigatetoActivity() {
    this.router.navigate(['dashboard'], { queryParams: { type: 'activity' } });
    this.service.sendMessage('activity');
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) {
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
    } , 100)
    this.activeHeader('icon-activity')
    
  }
  navigatetoInbox() {
    this.router.navigate(['dashboard'], { queryParams: { type: 'inbox' } });
    this.service.sendMessage('inbox');
    setTimeout(() => {
      if(document.querySelectorAll('.pcoded-hasmenu').length > 0) {
        document.querySelectorAll('.pcoded-hasmenu')[0].classList.add('pcoded-trigger')
      }
    } , 100)
    this.activeHeader('icon-inbox')
    
  }
  
  clearMessage(): void {
    this.service.clearMessage();
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

