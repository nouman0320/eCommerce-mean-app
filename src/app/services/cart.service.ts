import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { UserService } from './user.service';
import { ShoppingCart } from '../Models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  availableProducts: Number = 12;
  totalSubmittedOrders: Number = 42;

  totalCartItems: Number = 6;

  lastLoginDate: String = "Feb 22, 2019";
  lastOrderDate: String = "Feb 22, 2019";

  newUser: Boolean = false;
  oldCartExist: Boolean = false;

  shoppingCart: ShoppingCart;

  constructor(public webService: WebService) { }

  initializeCart(userId: Number){

    this.shoppingCart = new ShoppingCart();

    this.webService.getlatestCart(String(userId)).subscribe(
      data=>{
        this.shoppingCart = data.data;
        this.oldCartExist = true;
        console.log("found old cart");
      },
      err=>{
        this.oldCartExist = false;
        const cart = {
          "name": "cart",
          "price": 0,
          "imageUrl": "",
          "categoryId": -1,
          "customerId": userId
        }

        this.webService.newCart(cart).subscribe(
          data=>{
            console.log("creating new cart");
            this.shoppingCart = data.data;
          },
          err=>{
            console.log(err.error.message);
          }
        );
      }
    );

  }

}
