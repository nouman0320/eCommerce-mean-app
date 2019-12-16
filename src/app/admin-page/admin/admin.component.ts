import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public userService: UserService, public router: Router, public toastrService: ToastrService) { 
    this.userService.removeSession();
  }

  ngOnInit() {
    if(this.userService.isUserLoggedIn && !this.userService.isUserAdmin){
      this.toastrService.warning("You're not logged in with admin account");
      this.router.navigate([""]);
    }
  }

}
