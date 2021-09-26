import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartDisplay=[];
  price=0;
  constructor(private auth: AuthService) { }
   
  ngOnInit(): void {

   this.cartDisplay=this.auth.cartObj;
   for(let i=0;i<this.cartDisplay.length;i++){
     this.price= this.price+(this.cartDisplay[i].price)*this.cartDisplay[i].value;
   }

  }

  onPlus(item){
    if(item.value==0){
      item.value=item.value+1;
      this.auth.cartObj.push(item);
    }else{
      item.value=item.value+1;
    }
    this.cartDisplay=this.auth.cartObj;
    console.log(this.auth.cartObj);
    this.price=0;
    for(let i=0;i<this.cartDisplay.length;i++){
      this.price= this.price+(this.cartDisplay[i].price)*this.cartDisplay[i].value;
    }
  
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
  this.cartDisplay=this.auth.cartObj;
 console.log(this.auth.cartObj);
 this.price=0;
 for(let i=0;i<this.cartDisplay.length;i++){
  this.price= this.price+(this.cartDisplay[i].price)*this.cartDisplay[i].value;
}



}

}
