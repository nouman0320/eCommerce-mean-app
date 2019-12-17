import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { GroceryItem } from 'src/app/Models/grocery-item';
import { WebService } from 'src/app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { ShoppingCartItem } from 'src/app/Models/shopping-cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  activeClass: String = 'nav-item nav-link active bg-dark';
  notActiveClass: String = 'nav-item nav-link text-secondary';

  lastSelectedProduct: any;
  orderQuantity: number = 1;

  constructor(private modalService: NgbModal, public productService: ProductService, public webService: WebService, public toastrServie: ToastrService, public userService: UserService, public cartService: CartService) {
    this.productService.updateCategories(this.productService.selection);
  }

  ngOnInit() {
    //this.onSelect(0);
  }



  decrement(){
    if(this.orderQuantity>1){
      this.orderQuantity = this.orderQuantity - 1;
    }
  }

  increment(){
    if(this.orderQuantity<100){
      this.orderQuantity = this.orderQuantity + 1;
    }
  }

  onSelect(n: number){
    this.productService.onSelect(n);
  }

  addToCart(amount: any){
    console.log("add to cart: "+amount);

    this.userService.setBusy(true);

    if(amount < 1 || amount > 100){
      this.toastrServie.warning("Either the amount is invalid or out of stock");
    }else{
      
      var cartItem = new ShoppingCartItem();
      cartItem.amount = amount;
      cartItem.imageUrl = this.productService.onScreenProducts[this.lastSelectedProduct].imageUrl;
      cartItem.name = this.productService.onScreenProducts[this.lastSelectedProduct].name;
      cartItem.price = this.productService.onScreenProducts[this.lastSelectedProduct].price;
      cartItem.shoppingCartId = this.cartService.shoppingCart.id;
      cartItem.totalPrice = cartItem.amount.valueOf()*cartItem.price.valueOf();

      this.webService.newCartItem(cartItem).subscribe(
        data=>{
          this.cartService.getShoppingCartItems();
          this.userService.setBusy(false);
          this.toastrServie.success("'"+cartItem.name+"' added to cart");
        },
        err=>{
          this.userService.setBusy(false);
          console.log(err);
          this.toastrServie.error("Unable to perform action");
        });


      this.modalService.dismissAll();
    }
  }

  open(content, i: any) {

    if(this.userService.isUserAdmin){
      this.productService.newGroceryItem = false;
      this.productService.productCategory = String(this.productService.onScreenProducts[i].categoryId);
      this.productService.productId = this.productService.onScreenProducts[i].id;
      this.productService.productName = this.productService.onScreenProducts[i].name;
      this.productService.productPicture = this.productService.onScreenProducts[i].imageUrl;
      this.productService.productPrice = this.productService.onScreenProducts[i].price;


      console.log(this.productService.productCategory);
      this.toastrServie.info("Now editing: '"+this.productService.productName+"'");
    }
    else{
      this.orderQuantity = 1;
      this.lastSelectedProduct = i;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        //this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
}
