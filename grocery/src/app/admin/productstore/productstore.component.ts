import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { FormBuilder,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-productstore',
  templateUrl: './productstore.component.html',
  styleUrls: ['./productstore.component.scss']
})
export class ProductstoreComponent implements OnInit {

  productForm:FormGroup;


  constructor(private http:HttpClient,
    private formbuilder:FormBuilder) {
      this.productForm = this.formbuilder.group({
        category:[""],
        productName:[""],
        qty_avl:[""],

        price:[""],
        imageURL:[""]
      })

     }

  ngOnInit(): void {
  }
  // imageUpload(event){
  //   this.image = event.target.files[0]
  //   console.log(this.image);
  //   console.log(event)
 // }

   async addProduct(){
     const {category} = this.productForm.value
    const {productName} =this.productForm.value;
    const {qty_avl} =this.productForm.value;
    const {price} =this.productForm.value;
    const {imageURL} = this.productForm.value

    const checkURL = new URL(`http://localhost:3000/api/v1/admin/product/create`);
   // var reqHeader = new HttpHeaders('Content-Type','application/json')
   // reqHeader.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGVmYzY5NTRiNTBlMDAzMzc5NGVkOSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjMyNTY2NDA3LCJleHAiOjE2MzUxNTg0MDd9.AktAQZDYJOdDFZKSx4R-XSqfq3kzOt6SR5VHXao2r30");
    var reqHeader = new HttpHeaders({
      
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGVmYzY5NTRiNTBlMDAzMzc5NGVkOSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjMyNTY2NDA3LCJleHAiOjE2MzUxNTg0MDd9.AktAQZDYJOdDFZKSx4R-XSqfq3kzOt6SR5VHXao2r30",
      "Content-Type": "application/json"
    });

    // reqHeader[]= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGVmYzY5NTRiNTBlMDAzMzc5NGVkOSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjMyNTY2NDA3LCJleHAiOjE2MzUxNTg0MDd9.AktAQZDYJOdDFZKSx4R-XSqfq3kzOt6SR5VHXao2r30";
    // reqHeader.append();
    // console.log(reqHeader,'hesjdha');
    console.log({
      category:category,
      image:imageURL,
      name:productName,
      qty_avl:qty_avl,
      price:price
  });
    
    let postmaster =  this.http.post(checkURL.href,{
      category:category,
      image:imageURL,
      name:productName,
      qty_avl:qty_avl,
      price:price
  }, {headers: reqHeader}) 
  console.log(postmaster.subscribe())
  
 }

  
}
