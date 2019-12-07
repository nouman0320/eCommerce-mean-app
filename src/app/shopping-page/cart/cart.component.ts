import { Component, OnInit, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  isEmpty: Boolean = false;

  totalAmount: Number = 40.01;

  @Input() locked: Boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  onDelete(i: Number){
    alert("Delete");
  }


  onEdit(i: Number, content: any){
    //alert("Edit");
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
