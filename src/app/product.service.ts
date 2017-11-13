import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mockProducts';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProduct(id: number): Product{
    return PRODUCTS.find(prod => prod.id == id);
  }

}
