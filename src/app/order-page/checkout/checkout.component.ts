import { Component, OnInit } from '@angular/core';
import { NgbDatepickerConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(config: NgbDatepickerConfig, private modalService: NgbModal) {
    const currentDate = new Date();

    config.minDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};
    config.maxDate = {year: 2099, month: 12, day: 31};

    config.outsideDays = 'hidden';
   }

  onSubmit(content: any){
    //alert("order submit");
    this.open(content);
  }

  onDownload(){
    alert("download receipt");
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
