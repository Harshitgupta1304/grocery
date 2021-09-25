import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressForm!: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.formbuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required,],
      addressLine1:['',Validators.required],
      addressLine2:[''],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],


      
    })
  }
  onNext(){

  }

}
