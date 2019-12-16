import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  activeClass: String = 'nav-item nav-link active bg-dark';
  notActiveClass: String = 'nav-item nav-link text-secondary';


  selection: number = 0;

  constructor(private modalService: NgbModal, public productService: ProductService) {
    this.productService.updateCategories(this.selection);
  }

  ngOnInit() {
  }



  onSelect(n: number){

    //console.log("select: "+n);

    this.productService.categoryClass[this.selection] = this.notActiveClass;
    this.productService.categoryClass[n] = this.activeClass;
    this.selection = n;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
