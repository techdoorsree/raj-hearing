import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
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
