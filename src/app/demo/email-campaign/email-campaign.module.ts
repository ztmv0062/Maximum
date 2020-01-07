import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './email-campaign-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import { EmailCampaignComponent } from './email-campaign.component';
import {NgbCarouselModule, NgbDropdownModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgbTabsetModule,
    NgbDropdownModule,
    NgbCarouselModule,
    FormsModule,
    DataTablesModule
  ],
  declarations:[
    EmailCampaignComponent
  ]
})
export class EmailCampaignModule { }
