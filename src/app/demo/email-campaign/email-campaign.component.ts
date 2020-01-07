import { Component, OnInit } from '@angular/core';
import { MonthlyProfit3 } from './monthly-profit-3';

@Component({
  selector: 'app-email-campaign',
  templateUrl: './email-campaign.component.html',
  styleUrls: ['./email-campaign.component.scss']
})
export class EmailCampaignComponent implements OnInit {
  public monthlyProfitChartData3: any;
  dtRouterLinkOptions: any = {};
  
  constructor() { 
    this.monthlyProfitChartData3 = MonthlyProfit3.crmChartData;
  }

  ngOnInit() {

    this.dtRouterLinkOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [{
        title: 'Name',
        data: 'name'
      }, {
        title: 'Position',
        data: 'position'
      }, {
        title: 'Office',
        data: 'office'
      }, {
        title: 'Age',
        data: 'age'
      }, {
        title: 'Start Date',
        data: 'date'
      }, {
        title: 'Salary',
        data: 'salary'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return '<button class="btn btn-outline-primary btn-sm">View</button>';
        }
      }],
      responsive: true
    };
  }

}
