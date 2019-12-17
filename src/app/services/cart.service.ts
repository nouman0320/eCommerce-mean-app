import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { UserService } from './user.service';
import { ShoppingCart } from '../Models/shopping-cart';
import { ShoppingCartItem } from '../Models/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  availableProducts: Number = 12;
  totalSubmittedOrders: Number = 42;


  lastLoginDate: String = "Feb 22, 2019";
  lastOrderDate: String = "Feb 22, 2019";

  newUser: Boolean = false;
  oldCartExist: Boolean = false;

  shoppingCart: ShoppingCart;

  isEmpty: Boolean = false;
  totalAmount: number = 40.01;

  shoppingCartItems: ShoppingCartItem [] = [];

  constructor(public webService: WebService) { }


  getShoppingCartItems(){
    console.log("getShoppingCartItems() called");
    var tempItems = [];
    this.webService.getCartItems(String(this.shoppingCart.id)).subscribe(
      data =>{
        console.log(data);
        tempItems = data.data;
        this.shoppingCartItems = tempItems;
        if(this.shoppingCartItems.length == 0){
          this.isEmpty = true;
          console.log("cart is empty");
        } else {
          this.isEmpty = false;
        }
        this.totalAmount = 0;
        this.shoppingCartItems.forEach(e => {
          this.totalAmount += (e.price.valueOf()*e.amount.valueOf());
        });
      },
      err =>{
        console.log(err);
        this.isEmpty = true;
      }
    );
  }

 formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  initializeCart(userId: Number){

    this.webService.countGroceryItem().subscribe(data=>{this.availableProducts = data.data});

    this.shoppingCart = new ShoppingCart();

    this.webService.getlatestCart(String(userId)).subscribe(
      data=>{
        this.shoppingCart = data.data;
        this.oldCartExist = true;
        var lastdate = new Date(this.shoppingCart.dateCreated);
        this.lastLoginDate = this.formatDate(lastdate);

        this.getShoppingCartItems();
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
            this.getShoppingCartItems();
          },
          err=>{
            console.log(err.error.message);
          }
        );
      }
    );

  }

}
