import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public userService: UserService, public router: Router) { 
    if(!this.userService.isUserLoggedIn){
      this.router.navigate([""]);
    }
  }

  ngOnInit() {
  }

}
