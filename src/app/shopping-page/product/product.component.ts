import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { GroceryItem } from 'src/app/Models/grocery-item';
import { WebService } from 'src/app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  activeClass: String = 'nav-item nav-link active bg-dark';
  notActiveClass: String = 'nav-item nav-link text-secondary';


  constructor(private modalService: NgbModal, public productService: ProductService, public webService: WebService, public toastrServie: ToastrService, public userService: UserService) {
    this.productService.updateCategories(this.productService.selection);
  }

  ngOnInit() {
    //this.onSelect(0);
  }



  onSelect(n: number){
    this.productService.onSelect(n);
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
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        //this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
}
