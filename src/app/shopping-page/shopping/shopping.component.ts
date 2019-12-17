import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {


  windowState: Number = 2; // 0 minmized; 1 default; 2 Maximized; 3 hidden

  appCartClassDefault: String = 'col-12 col-md-4';
  appProductClassDefault: String = 'col-12 col-md-8'

  appCartClassMin: String = 'col-12 col-md-1';
  appProductClassMin: String = 'col-12 col-md-11'

  appCartClass: String = 'col-12 col-md-4';
  appProductClass: String = 'col-12 col-md-8'

  constructor(public cartService: CartService) { }

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
