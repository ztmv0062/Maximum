import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CoreService } from './core.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable()
export class AuthenticationService {

    authToken: any;
    user: any;
    baseUrl: any = '';
    testnonce: any = '';
    token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC96dHdwLnplaG50ZWNoLm5ldCIsImlhdCI6MTU3NTk1NTk5NiwibmJmIjoxNTc1OTU1OTk2LCJleHAiOjE1NzY1NjA3OTYsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.d8wTgKC67aVUw-jIYWy3GjzVkm_3d19s4Ymtd2-2L-0`;
    constructor(private http: HttpClient, private coreService: CoreService) {
        this.baseUrl = this.coreService.baseURL;
     }
     // tslint:disable-next-line:max-line-length
    //  addHeader() {
    //     const options = {
    //       headers: new HttpHeaders({
    //         'Content-type': 'application/json',
    //         'Authorization':  'Bearer' + this.token
    //       })
    //     };
    //     return options;
    // }
    loginUser(user,cb) {
        // let headers: new HttpHeaders ({
        //     'Content-type': 'application/json',
        //     'Authorization':  'Bearer' + this.token,
        //   });
        // return this.http.post('/api/user/login', user, {headers});
        let params = "username="+user.email+"&password="+user.user_pass;
        return this.http.get(this.baseUrl + '/api/user/generate_auth_cookie/?'+params).subscribe((response :any) => {
            if (response) {
              return cb(response);
            }
        });
    }

    storeUserData(token, user) {
        localStorage.setItem('Gates_id_token', token);
        localStorage.setItem('Gates_user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
     getNonce(cb) {
         this.http.get(this.baseUrl + '/api/get_nonce/?controller=user&method=register').subscribe((response :any) => {
             if(response){
               return cb(response.nonce)
             }else{
                return cb(null)
             }

    });
    }
     registerUser(user,cb) {
       this.getNonce((nonce) => {
        let params = "username="+user.username+"&email="+user.email+"&nonce="+nonce +"&display_name="+user.display_name +"&notify=both&user_pass="+user.user_pass;
        return this.http.get(this.baseUrl + '/api/user/register/?'+params).subscribe((response :any) => {
            console.log(response)
           if (response) {
               
              cb(response);
            }
         });
       });
        //  testnonce.subscribe((resp))
        //  this.getNonce().subsrcribe((response:any)=>{
             
        // //  })
        // console.log('hello1',this.testnonce)
        //  if(this.testnonce != '') {
        //      console.log('hello',this.testnonce)
        //     let params = "username="+user.username+"&email="+user.email+"&nonce="+this.testnonce +"&display_name="+user.display_name +"&notify=both&user_pass="+user.password
        //     // console.log(user)
        //     // return this.http.post(this.baseUrl + '/wp/v2/users', user,headers);
        //     return this.http.get(this.baseUrl + '/api/user/register/?'+params);
        //  }
        //  console.log(a,'a')
  
    }

    // verifyEmail(obj) {
             // if (this.token) {
        // const headers = {
        //     headers : new HttpHeaders({
        //         'Authorization': 'Bearer ' + this.token,
        //         'Content-type': 'application/json',
        //     })
        // } 
    //   }
    //     let headers = new HttpHeaders()
    //     headers.append('Content-type', 'application/json');
    //     return this.http.post(this.baseUrl + '/api/user/email-varification', obj, {headers: headers});
    // }

    loadToken() {
        var token = localStorage.getItem('Gates_id_token');
        this.authToken = token;
    }

    getRoleName() {
        var user = JSON.parse(localStorage.getItem('Gates_user'));
        return user.userRole;
    }
   getUserRoleName() {
    var user = JSON.parse(localStorage.getItem('Gates_user'));
    return user.roleName;
    }

    loggedIn() {
        var token = localStorage.getItem('Gates_id_token');
        var user = localStorage.getItem('Gates_user');
        if (token !== null && user !== null) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.removeItem('Gates_id_token');
        localStorage.removeItem('Gates_user');
    }

    forgotPassword(user) {
        let headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.baseUrl + '/api/user/forgot-password', user, {headers: headers});
    }


    resetPassword(Obj) {
        let headers = new HttpHeaders();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.baseUrl + '/api/user/reset-password', Obj, {headers: headers});
    }

}
