import { Component, OnInit } from '@angular/core';
import { Navbar2Component } from './navbar2/navbar2.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grocery';
  constructor(private navbar:Navbar2Component){
    
}
loginvalue:boolean;

ngOnInit(){
  this.loginvalue = this.navbar.isClicked
}
}
