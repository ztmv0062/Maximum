import { Component, OnInit } from '@angular/core';
import { MonthlyProfit3 } from './monthly-profit-3';

@Component({
  selector: 'app-email-campaign',
  templateUrl: './email-campaign.component.html',
  styleUrls: ['./email-campaign.component.scss']
})
export class EmailCampaignComponent implements OnInit {
  public monthlyProfitChartData3: any;
  constructor() { 
    this.monthlyProfitChartData3 = MonthlyProfit3.crmChartData;
  }

  ngOnInit() {
  }

}
