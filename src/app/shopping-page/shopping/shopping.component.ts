import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {


  cartCount: Number = 9;

  windowState: Number = 2; // 0 minmized; 1 default; 2 Maximized; 3 hidden

  appCartClassDefault: String = 'col-12 col-md-4';
  appProductClassDefault: String = 'col-12 col-md-8'

  appCartClassMin: String = 'col-12 col-md-1';
  appProductClassMin: String = 'col-12 col-md-11'

  appCartClass: String = 'col-12 col-md-4';
  appProductClass: String = 'col-12 col-md-8'

  constructor() { }

  ngOnInit() {
  }

  onMinimize(){
    this.appCartClass = this.appCartClassMin;
    this.appProductClass = this.appProductClassMin;
    this.windowState = 0;
  }

  onMaximize(){
    this.appCartClass = this.appCartClassDefault;
    this.appProductClass = this.appProductClassDefault;
    this.windowState = 2;
  }

  onHideShow(){

  }

  

}
