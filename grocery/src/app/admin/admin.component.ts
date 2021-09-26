import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  {
  products=[]
  constructor(private http:HttpClient){

    
    this.getproducts()
    console.log(this.products);
    

  }
  
  
   getproducts(){
     this.http.get<any>('http://localhost:3000/api/v1/products').subscribe(
      response =>{
        console.log(response.products);
        this.products = response.products;
      }
    )
    }
}