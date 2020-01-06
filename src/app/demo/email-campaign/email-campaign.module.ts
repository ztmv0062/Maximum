import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './email-campaign-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import { EmailCampaignComponent } from './email-campaign.component';
import {NgbCarouselModule, NgbDropdownModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,

    
    NgbTabsetModule,
    NgbDropdownModule,
    NgbCarouselModule
  ],
  declarations:[
    EmailCampaignComponent
  ]
})
export class EmailCampaignModule { }
