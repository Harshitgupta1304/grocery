import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

//   login(credentials: any) { 
//    return this.http.post('localhost:3000/api/v1/user/login', 
//       JSON.stringify(credentials))
//       .pipe(map((response ) => {
//         let result = response;
//          if (result && result.token){
//            localStorage.setItem('token',result.token);
//            return true;
//         }
//        console.log(response)
//         return false;
//       }));
//   }

//   logout() { 
//     localStorage.removeItem('token');
//   }

// //   isLoggedIn() { 
// //      let jwtHelper =  new JwtHelperService();
// //      let token = localStorage.getItem('token');
// //      let expirationDate = jwtHelper.getTokenExpirationDate(token);
// //      let isExpired = jwtHelper.isTokenExpired(token)
// //      return false;
// //   }
// 
}
