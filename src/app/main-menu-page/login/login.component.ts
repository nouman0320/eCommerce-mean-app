import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String = "";
  userPassword: String = "";


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert("submit");
  }

  onSwitchToRegister(){
    alert("switch to register");
  }

}
