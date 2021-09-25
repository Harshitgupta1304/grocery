import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  constructor(private formbuilder: FormBuilder,
    private http:HttpClient) { }
  SignUpForm!: FormGroup;
  submitted = false;
  ngOnInit() {
    this.SignUpForm =  this.formbuilder.group({
      firstName: ['',Validators.required],
      lastName:['', Validators.required],
      email:['',[Validators.required,Validators.email]],
      mobileNo:['', Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],


    })
  }

  onSubmit(){

    this.submitted = true;
    if(this.SignUpForm.invalid){
      return;
    }
    const {firstName} =this.SignUpForm.value;
    const {lastName} =this.SignUpForm.value;
    const {email} =this.SignUpForm.value;
    const {mobileNo} =this.SignUpForm.value;
    const {password} =this.SignUpForm.value;
    const checkURL = new URL(`http://localhost:3000/api/v1/user/register`);
    var reqHeader = new HttpHeaders({'Content-Type':'application/json'})
    this.http.post(checkURL.href,  {
      name:firstName+lastName,
      email:email,
      mobile_number: mobileNo,
      address:"sss",
      password: password
  }, {headers: reqHeader}).subscribe(
    (response)=>{
      console.log(response)
    }
  )
 }


  }


