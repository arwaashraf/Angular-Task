import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../Shared Classes and types/Interface';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList = [{
    ID:1,
    Name:"11 PRO",
    Quantity:25,
    Price:20000,
    Img:'./assets/img/two.png'
  },
  {
    ID:2,
    Name:"12 PRO",
    Quantity:20,
    Price:300000,
    Img:'./assets/img/three.png'
  },
  {
    ID:3,
    Name:"Labtop",
    Quantity:10,
    Price:250000,
    Img:'./assets/img/four.png'
  }

];
//Obsrvable
  watchProducts:BehaviorSubject<IProduct[]>= new BehaviorSubject(this.productList);
  productsListener = this.watchProducts.asObservable();
  constructor() { }

  getAllProducts(){
    // return this.productList;
    return this.productsListener;
  }


  
  GetProductById(prdId:number):any{
    if(isNaN(prdId)){
      return null;
    }
    const product = this.productList.find((productId:IProduct)=>productId.ID===prdId);
    if(!product){
      return null;
    }
    return product;
  }
  //Obsrvable
  addProduct(product:IProduct){
    this.productList.push(product);
    this.watchProducts.next(this.productList)
  }
}
