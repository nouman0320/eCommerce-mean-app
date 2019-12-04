import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  stepCount: Number = 0;
  progressBarValue: Number = 0;
  stepDesc: String = "1 of 2";


  userId: Number;
  userEmail: String;
  userPassword: String;
  userConfirmPassword: String;


  cityValue: String = "";
  userStreet: String;
  userFirstName: String;
  userLastName: String;

  constructor(public router: Router, public userService: UserService) {
    if(this.userService.isUserLoggedIn){
      this.router.navigate(['']);
    }
   }

  ngOnInit() {
    //this.onNextStep();
  }

  onBack(){
    this.stepCount = 0;
    this.progressBarValue = 0;
    this.stepDesc = "1 of 2";
  }

  onNextStep(){
    this.stepCount = 1;
    this.progressBarValue = 50;
    this.stepDesc = "2 of 2";

    //this.userId = null;
    //this.userEmail = null;
    //this.userPassword = null;
    //this.userConfirmPassword = null;
  }

  onRegister(){
    this.progressBarValue = 100;
    this.stepDesc = "Almost done..";

    this.router.navigate(['']);
  }


  onSwitchToLogin(){
    //alert("switch to login");
    this.router.navigate(['']);
  }
}
