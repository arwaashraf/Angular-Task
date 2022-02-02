import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/enum';
import { ICategory, IProduct } from '../Shared Classes and types/Interface';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount:DiscountOffers;
  ProductList:IProduct[];
  CategoryList:ICategory[]
  storeName:string ; 
  storeLogo:string ; 
  clientName:string ;
  IsPurshased:Boolean;

  constructor() {
    this.Discount = DiscountOffers.Discount;
    this.ProductList = [{
      ID:1,
      Name:"11 PRO",
      Quantity:25,
      Price:20000,
      Img:'./assets/img/one.jpeg'
    },
    {
      ID:2,
      Name:"12 PRO",
      Quantity:20,
      Price:300000,
      Img:'./assets/img/one.jpeg'
    }

  ];
    this.CategoryList =[{
      ID: 1,
      Name :"Phones"
    },
    {
      ID: 2,
      Name :"Labtops"
    },
    {
      ID: 3,
      Name :"Icons"
    },
    {
      ID: 4,
      Name :"Head Phones"
    }
  ];
    this.storeName= "Apple";
    this.storeLogo="apple";
    this.clientName="Arwa";
    this.IsPurshased=true;
   }
  ngOnInit(): void {
  }
  toogled(){
    this.IsPurshased = !this.IsPurshased;
  }
}
