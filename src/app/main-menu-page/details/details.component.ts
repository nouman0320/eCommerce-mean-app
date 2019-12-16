import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor(public router: Router, public cartService: CartService) { }

  ngOnInit() {
  }

  gotoShop(){
    this.router.navigate(["shop"]);
  }
}
