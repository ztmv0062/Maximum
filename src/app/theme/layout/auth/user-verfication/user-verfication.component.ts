import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CoreService } from 'src/app/services/core.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-user-verfication',
  templateUrl: './user-verfication.component.html',
  styleUrls: ['./user-verfication.component.scss']
})
export class UserVerficationComponent implements OnInit {
  baseUrl: any;
  constructor(private route: ActivatedRoute,private http: HttpClient, private coreService: CoreService) {
    
 }

  ngOnInit() {
  } 
    verifyEmail(obj) {
      if (this.route.snapshot.params.token) {
        const headers = {
            headers : new HttpHeaders({
                'Authorization': 'Bearer ' + this.route.snapshot.params.token,
                'Content-type': 'application/json',
            })
        }       
        return this.http.post(environment.token + '/wp/v2/users', obj,headers);
    }
  }
}