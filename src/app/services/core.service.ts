// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

// @Injectable()
// export class CoreService {
//     // baseURL = 'http://buyithacarealestate.com/wp-json';
//     // baseURL = 'https://ztwp.zehntech.net';
//     baseURL = 'https://www.trk-gsd.info/api/sd-email';
//     constructor(private http: HttpClient) { }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable()

export class CoreService {


  constructor(private http: HttpClient) { }
  

  get(url) {
    return this.http.get<any>(url);
  }

  post(url, object) {
    return this.http.post(url, object);
  }

  put(url, object) {
    return this.http.put(url, object);
  }

  delete(url) {
    return this.http.delete(url);
  }

}
