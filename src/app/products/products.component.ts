import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  search: string = '';

  products: Product[];

  clear(){
    this.search = '';
  }

  constructor(private productService: ProductService) {
    this.search = '';
  }

  getProducts(): void{
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

}
