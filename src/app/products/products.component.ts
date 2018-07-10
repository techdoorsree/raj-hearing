import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  p: number = 1;
   
  constructor(private route: ActivatedRoute,private data : ProductService) {
    this.route.params.subscribe( params => this.products = params.id);
  }
  products: Product[] = []
  public errorMsg;
  ngOnInit() {
    this.data.getProducts().subscribe(
      data => this.products = data 
    );
    
  }

}
