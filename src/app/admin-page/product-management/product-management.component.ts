import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {


  productName: String;
  productId: Number;
  productPrice: Number;
  productPicture: String;
  productCategory: String = "";


  constructor() { }

  ngOnInit() {
  }

}
