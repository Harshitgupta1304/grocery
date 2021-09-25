import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  //invalidLogin: boolean = false;
  loginForm: FormGroup;
  token :String;
  constructor(
    private formbuilder : FormBuilder,
    private http:HttpClient
    ) { }
  
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
     email: ["", Validators.required],
     password : ["", Validators.required]
   })
 }

  
 onLogin(){
  const {email} =this.loginForm.value;
  const {password} =this.loginForm.value;
   
  const checkURL = new URL(`http://localhost:3000/api/v1/user/login`);
    var reqHeader = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post(checkURL.href,{
      email:email,
      password:password
  }, {headers: reqHeader}).subscribe(
    (response:any)=>{
      console.log(response)
      this.token = response.data.token
      console.log(this.token)
    }
  )
 }

  
  
}
