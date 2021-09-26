import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  data :any
  dashObj = []
  value=0;
  cartObj2=[];
  constructor(private auth: AuthService,
    private http:HttpClient) {}
  
   ngOnInit(){
     this.getData();
   
   for(let i=0;i<this.auth.data.length;i++){
     this.auth.data[i].value=0;
   }
  console.log(this.data)
  }
  getData(){
    this.http.get<any>('http://localhost:3000/api/v1/products').subscribe(
    response =>{
      console.log(response.products);
      this.dashObj = response.products;
      this.data = response.products;
    }
      )
  }


  onPlus(item){
    if(item.value==0){
      item.value=item.value+1;
      this.auth.cartObj.push(item);
    }else{
      item.value=item.value+1;
    }
    
    console.log(this.auth.cartObj);
  
 }

onMinus(item){
  if(item.value==1){
    item.value=item.value-1;
    this.auth.cartObj=this.auth.cartObj.filter((ele)=>{
      return ele.name!=item.name;
    })
  }
  if(item.value>0){
 item.value=item.value-1;
  }
 console.log(this.auth.cartObj);
}




}
