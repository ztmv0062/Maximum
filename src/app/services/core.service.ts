import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CoreService {
    // baseURL = 'http://buyithacarealestate.com/wp-json';
    // baseURL = 'https://ztwp.zehntech.net';
    baseURL = 'https://www.trk-gsd.info/api/sd-email';
    constructor(private http: HttpClient) { }
}
