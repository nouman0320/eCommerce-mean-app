import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { WebService } from 'src/app/services/web.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {




  constructor(public productService: ProductService, public userService: UserService, public webService: WebService, public toastrService: ToastrService) { 
    this.productService.updateCategories(0);
  }

  ngOnInit() {
  }


  newProductStart(){
    this.productService.reset();
    this.productService.newGroceryItem = true;
  }


  onSubmit(){
    this.userService.setBusy(true);


    //console.log("onSubmit");
    //console.log("str "+ this.productCategory);
    //console.log(Number(this.productCategory));

    const gItem = {
      "name": this.productService.productName,
      "id": this.productService.productId,
      "price": this.productService.productPrice,
      "imageUrl": this.productService.productPicture,
      "categoryId": Number(this.productService.productCategory),
    }

    if(this.productService.newGroceryItem){
      this.webService.newGroceryItem(gItem).subscribe(
        data=>{
          this.toastrService.success(data.message);
          this.userService.setBusy(false);
          this.productService.onSelect(this.productService.selection);
        },
        err=>{
          this.toastrService.error(err.error.message);
          this.userService.setBusy(false);
        }
      );
    } else {
      this.webService.updateGroceryItem(gItem).subscribe(
        data=>{
          this.toastrService.success("Updated");
          this.userService.setBusy(false);
          this.productService.onSelect(this.productService.selection);
        },
        err=>{
          this.toastrService.error(err.error.message);
          this.userService.setBusy(false);
        }
      );
    }
  }

}
