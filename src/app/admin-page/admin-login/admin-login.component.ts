import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WebService } from 'src/app/services/web.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  userName: String = "";
  userPassword: String = "";

  constructor(public toastrService: ToastrService, public webService: WebService, public userService: UserService) { 

  }

  ngOnInit() {
  }

}
