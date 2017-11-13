import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { PRODUCTS } from '../mockProducts';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  @Input() search: string;

  products = PRODUCTS;

  selectedProduct: Product;

  onSelect(prod: Product): void{
    //TODO Open image for that product
    this.selectedProduct = prod;
    console.log("Search: ", this.search);
    console.log("Name: ", prod.name);
    console.log(prod.name.match(this.search));
  }

  constructor() { }

  ngOnInit() {
  }

}
