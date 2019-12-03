import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  title: String = "eCommerce shop";
  contactEmail: String = "contact@example.com";
  contactPhone: String = "+1 206 555 0100";

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
