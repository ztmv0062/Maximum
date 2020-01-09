import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RevenueMapChart} from './revenue-map-chart';

@Component({
  selector: 'app-email-campaign-detail',
  templateUrl: './email-campaign-detail.component.html',
  styleUrls: ['./email-campaign-detail.component.scss']
})
export class EmailCampaignDetailComponent implements OnInit {

  public revenueMapChartData: any;

 private _route: ActivatedRoute
  zoneId: any;
  constructor() { 
    this.revenueMapChartData = RevenueMapChart.widgetChartData;
  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      this.zoneId = params['id'];
     
    });

  }

}
