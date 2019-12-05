import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  isEmpty: Boolean = false;

  totalAmount: Number = 40.01;

  constructor() { }

  ngOnInit() {
  }

}
