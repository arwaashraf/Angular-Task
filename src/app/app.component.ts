import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ProductServiceService } from './Services/product-service.service';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day1Demo';
  //Obsrvable
  constructor(private productService:ProductServiceService){}
  @ViewChild(ProductsComponent) productsComp!:ProductsComponent;
  
  render(){
    this.productsComp.renderValues();
  }

  //Obsrvable
  addProduct(){
this.productService.addProduct({
  ID:4,
  Name:"13 PRO",
  Quantity:205,
  Price:20000,
  Img:'./assets/img/two.png'
})
  }
}
