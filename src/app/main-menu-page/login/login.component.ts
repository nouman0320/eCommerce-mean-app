import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String = "";
  userPassword: String = "";


  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    alert("submit");
  }

  onSwitchToRegister(){
    this.router.navigate(['/register']);
  }

}
