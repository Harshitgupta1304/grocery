import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  //invalidLogin: boolean = false;
  loginForm: FormGroup;
  token :string;
  constructor(
    private formbuilder : FormBuilder,
    private router :Router,
    private authservice:AuthService
    ) { }
  
  ngOnInit() {
    this.loginForm = this.formbuilder.group({
     email: ["", Validators.required],
     password : ["", Validators.required]
   })
 }
 onLogin(email,password){
   let result = this.authservice.onSignIn(email,password)
   console.log(result)
   
   if(email=='admin@gmail.com'&& password =="12345678"){
    this.router.navigate(['/admin']);
  
  }
  else{
    this.router.navigate(['/'])
  }

 }
 
  
 


  
  
}
