import { Component, OnInit } from '@angular/core';
import { NgbDatepickerConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { WebService } from 'src/app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  orderCity: String = "";
  orderStreet: String = "";
  orderCard: String = "";
  orderDate: any;

  todayDate: any;

  lastOrder: any;
  pastShoppingCartItems: any;
  pastTotalAmount: any;

  constructor(config: NgbDatepickerConfig, private modalService: NgbModal, public cartService: CartService, public webService: WebService, public toastrService: ToastrService, public userService: UserService) {
    const currentDate = new Date();

    this.todayDate = cartService.formatDate(currentDate);

    config.minDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
    config.maxDate = {year: 2099, month: 12, day: 31};

    config.outsideDays = 'hidden';
   }

  onSubmit(content: any){
    //alert("order submit");


    const glo = {
      "name": "Order",
      "shoppingCartId": this.cartService.shoppingCart.id,
      "customerId": this.cartService.shoppingCart.customerId,
      "totalPrice": this.cartService.totalAmount,
      "deliveryAddressCity": this.orderCity,
      "deliveryAddressStreet": this.orderStreet,
      "deliveryDate": new Date(this.orderDate.year, this.orderDate.month - 1, this.orderDate.day),
      "ccLastFourDigits": this.orderCard.substring(this.orderCard.length - 4)
    };

    this.webService.newGroceryListOrder(glo).subscribe(
      data=>{
        this.webService.markCartComplete(String(this.cartService.shoppingCart.id)).subscribe(data=>{
          this.toastrService.success("Order has been placed");
          this.toastrService.info("Thank You for placing order, we'll get back to you soon!");
          this.lastOrder = glo;
          this.pastTotalAmount = this.cartService.totalAmount;
          this.pastShoppingCartItems = this.cartService.shoppingCartItems;
          this.open(content);
          this.cartService.initializeCart(this.userService.user.id);
        }, err =>{
          this.toastrService.error(err.error.message);
        })
      },
      err=>{
        this.toastrService.error(err.error.message);
      }
    );
  }

  onDownload(){
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Order Receipt</title>
          <style>
           
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();

  }

  ngOnInit() {
    this.orderStreet = this.userService.user.addressStreet;
    this.orderCity = this.userService.user.addressCity;

    //alert(this.userService.user.addressStreet);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
