import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MonthlyProfit3 } from './monthly-profit-3';
import { CoreService  } from 'src/app/services/core.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-email-campaign',
  templateUrl: './email-campaign.component.html',
  styleUrls: ['./email-campaign.component.scss']
})
export class EmailCampaignComponent implements OnDestroy , OnInit {
  dtOptions: DataTables.Settings = {};
  public monthlyProfitChartData3: any;
  // dtRouterLinkOptions: any = {};
  public items:[];
  public t : any;

  dtTrigger=new Subject();


  constructor(private coreService: CoreService, private router : Router) 
  { 
    
    this.monthlyProfitChartData3 = MonthlyProfit3.crmChartData;
  }

 
  getdeta(itemId: any) {
    
     this.router.navigate(['/email-campaign',itemId ]);
    
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
  ngOnInit() {

    this.dtOptions = {
       pagingType: 'full_numbers',
       pageLength: 10
     };
 
     this.getEmail();

    //  this.dtRouterLinkOptions = {
    //    ajax: 'fake-data/datatable-data.json',
    //    columns: [{
    //      title: 'Name',
    //      data: 'name'
    //    }, {
    //      title: 'Position',
    //      data: 'position'
    //    }, {
    //      title: 'Office',
    //      data: 'office'
    //    }, {
    //      title: 'Age',
    //      data: 'age'
    //    }, {
    //      title: 'Start Date',
    //      data: 'date'
    //    }, {
    //      title: 'Salary',
    //      data: 'salary'
    //    }, {
    //      title: 'Action',
    //      render: function (data: any, type: any, full: any) {
    //        return '<button class="btn btn-outline-primary btn-sm">View</button>';
    //      }
    //    }],
    //    responsive: true
    //  };
    
   }
  
  ngOnDestroy() {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}


