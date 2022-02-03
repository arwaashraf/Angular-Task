import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { DiscountOffers } from '../Shared Classes and types/enum';
import { ICategory, IProduct } from '../Shared Classes and types/Interface';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount:DiscountOffers;
  ProductList!:IProduct[];
  CategoryList:ICategory[]
  storeName:string ;
  storeLogo:string ;
  clientName:string ;
  IsPurshased:Boolean;

  constructor(private productService:ProductServiceService) {
    this.Discount = DiscountOffers.Discount;

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
  productList!:IProduct[];
  productId:string = '';
  productObject!:IProduct;
  ngOnInit(): void {
  }
  update(){
    this.productObject = this.productService.GetProductById(+this.productId)
  }
  //Obsrvable
  renderValues(){
    // this.productList = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(results => this.productList = results)
  }
  // toogled(){
  //   this.IsPurshased = !this.IsPurshased;
  // }
}
