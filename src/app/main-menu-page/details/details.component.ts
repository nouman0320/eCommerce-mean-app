import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  availableProducts: Number = 12;
  totalSubmittedOrders: Number = 42;

  totalCartItems: Number = 6;

  lastLoginDate: String = "Feb 22, 2019";
  lastOrderDate: String = "Feb 22, 2019";

  newUser: Boolean = false;
  oldCartExist: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
