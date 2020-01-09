import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailCampaignComponent } from './email-campaign.component';
import { EmailCampaignDetailComponent } from './email-campaign-detail/email-campaign-detail.component';

const routes: Routes = [
  {
    path: '',
    component : EmailCampaignComponent
  },
  {
    path: ':id',
    component : EmailCampaignDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
