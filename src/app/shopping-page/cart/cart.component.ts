import { Component, OnInit, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { WebService } from 'src/app/services/web.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  forEdit: any = 0;
  orderQuantity: number = 1;

  @Input() locked: Boolean = false;

  constructor(private modalService: NgbModal, public cartService: CartService, public webService: WebService, public toastrService: ToastrService) { }

  ngOnInit() {
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


  onDelete(i: any){
    this.webService.deleteCartItem(String(this.cartService.shoppingCartItems[this.forEdit].id)).subscribe(
      data=>{
        this.toastrService.success("removed from the cart");
        this.cartService.getShoppingCartItems();
      },
      err=>{
        this.toastrService.error("Unable to remove");
      }
    );
  }


  onUpdate(){
    if(this.orderQuantity < 1 || this.orderQuantity > 100){
      this.toastrService.warning("Either the amount is invalid or out of stock");
    }else{

      var temp = this.cartService.shoppingCartItems[this.forEdit];
    
      const cartItem = {
        "name": temp.name,
        "price": temp.price,
        "imageUrl": temp.imageUrl,
        "shoppingCartId": temp.shoppingCartId,
        "dateCreated": temp.dateCreated,
        "amount": this.orderQuantity,
        "totalPrice": temp.totalPrice,
        "id": temp.id    
      }

      this.webService.updateCartItem(cartItem).subscribe(
        data=>{
          this.toastrService.success("Changes saved successfully");
          this.cartService.getShoppingCartItems();
          //console.log(data);
        },
        err=>{
          //console.log(err);
          this.toastrService.error("Unable to save the changes");
        }
      );
      this.modalService.dismissAll();
    }
  }


  onEdit(i: any, content: any){

    this.forEdit = i;
    this.orderQuantity = this.cartService.shoppingCartItems[i].amount.valueOf();
    //alert("Edit");
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
