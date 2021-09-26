//import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  onSignIn(email,password){
    //const {email} =this.loginForm.value;
    //const {password} =this.loginForm.value;
     let token :string;
    const checkURL = new URL(`http://localhost:3000/api/v1/user/login`);
      var reqHeader = new HttpHeaders({'Content-Type':'application/json'})
      this.http.post(checkURL.href,{
        email:email,
        password:password
    }, {headers: reqHeader}).subscribe(
      (response:any)=>{
        console.log(response)
        token = response.data.token
        console.log(token)
        if(token){
        localStorage.setItem('token', token);
      }}
    )
    return token;
   }
   logout() { 
        localStorage.removeItem('token');
       }
    dashObj=[]
    cartObj=[]
    data = []
    

    

// //   login(credentials: any) { 
// //    return this.http.post('localhost:3000/api/v1/user/login', 
// //       JSON.stringify(credentials))
// //       .pipe(map((response ) => {
// //         let result = response;
// //          if (result && result.token){
// //            localStorage.setItem('token',result.token);
// //            return true;
// //         }
// //        console.log(response)
// //         return false;
// //       }));
// //   }

// //   logout() { 
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
