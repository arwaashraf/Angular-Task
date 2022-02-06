import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private productService:ProductServiceService, private activatedRoute:ActivatedRoute,private router:Router) {
    this.Discount = DiscountOffers.Discount;
    this.ProductList = [{
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
  toogled(){
    this.IsPurshased = !this.IsPurshased;
  }
  Discountfn()
  {
    this.router.navigate(['discount'],{relativeTo:this.activatedRoute});
  }
  NoDiscount()
  {
    this.router.navigate(['nodiscount'],{relativeTo:this.activatedRoute});
  }
}
