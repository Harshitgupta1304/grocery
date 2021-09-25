import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  productForm:FormGroup;
  image:any;
//   {
//     "image": "ss",
//     "name": "name",
//     "qty_avl": 15,
//     "qlty_avl_status": 0,
//     "category": "XTZ",
//     "price": 22.7
// }
  constructor(private http:HttpClient,
    private formbuilder:FormBuilder) {
      this.productForm = this.formbuilder.group({
        productName:[""],
        qty_avl:[""],
        qty_avl_status:[""],
        price:[""],
        image:[""]

      })

     }

  ngOnInit(): void {
  }
  imageUpload(event){
    this.image = event.target.files[0]
    console.log(this.image);
    console.log(event)
  }

   addProduct(){
    const {productName} =this.productForm.value;
    const {qty_avl} =this.productForm.value;
    const {qlty_avl_status} =this.productForm.value;
    const {price} =this.productForm.value;
    

    const checkURL = new URL(`http://localhost:3000/api/v1/admin/product/create`);
    var reqHeader = new HttpHeaders({'Content-Type':'application/json'})
    reqHeader.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGVmYzY5NTRiNTBlMDAzMzc5NGVkOSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjMyNTY2NDA3LCJleHAiOjE2MzUxNTg0MDd9.AktAQZDYJOdDFZKSx4R-XSqfq3kzOt6SR5VHXao2r30");
    this.http.post(checkURL.href,{
      image:this.image,
      name:productName,
      qty_avl:qty_avl,
      qlty_avl_status:qlty_avl_status,
      category:null,
      price:price
  }, {headers: reqHeader}).subscribe(
    (response:any)=>{
      console.log(response)
      
    }
  )
 }
  }

 
