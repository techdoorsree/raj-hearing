import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
;import { Subscription ,  Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { Product } from '../product';
import * as $ from 'jquery';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Product
  p: number = 1;
  constructor(private route: ActivatedRoute,private data : ProductService) {

    
   }
   getProductdetails(name:string){
    this.data.getProduct(name).subscribe(
     data => {
       console.log(data);
       this.products = data
  });
 
 }
  ngOnInit() {
    this.getProductdetails(this.route.snapshot.params['name']);
    

  
     
    }
    
  }










  

