import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  activeClass: String = 'nav-item nav-link active bg-dark';
  notActiveClass: String = 'nav-item nav-link text-secondary';

  milkEggs: String = this.activeClass;
  vegetableFruits: String = this.notActiveClass;
  meatFish: String = this.notActiveClass;
  wineDrinks: String = this.notActiveClass;


  selection: Number = 0;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }



  onSelect(n: Number){
    this.milkEggs = this.notActiveClass;
    this.vegetableFruits = this.notActiveClass;
    this.meatFish = this.notActiveClass;
    this.wineDrinks= this.notActiveClass;
    if(n==0){
      this.milkEggs = this.activeClass;
    }
    else if(n==1){
      this.vegetableFruits = this.activeClass;
    }
    else if(n==2){
      this.meatFish = this.activeClass;
    }
    else if(n==3){
      this.wineDrinks = this.activeClass;
    }
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
