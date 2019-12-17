import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { WebService } from 'src/app/services/web.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(public router: Router, public userService: UserService, public webService: WebService, public toastrService: ToastrService, public cartService: CartService) {
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

    this.userService.setBusy(true);

    const customer = {
      "firstName": this.userFirstName,
      "lastName": this.userLastName,
      "username": this.userEmail,
      "password": this.userPassword,
      "addressCity": this.cityValue,
      "addressStreet": this.userStreet,
      "id": this.userId
    }

    this.webService.customerRegister(customer).subscribe(
      data => {
        this.userService.user.id = data.data.id;
        this.userService.user.username = data.data.username;

        /*
        this.webService.customerDetails(this.userService.user.username).subscribe(
          data=>{
            this.userService.setSession(data.data);
            //console.log(this.userService.user);
            this.userService.setBusy(false);
            this.router.navigate(['']);
          },
          err=>{
            this.toastrService.error(err.error.message);
            this.userService.setBusy(false);
            this.onNextStep();
          }
        );*/

        this.cartService.newUser = true;

        this.userService.setBusy(false);
        this.router.navigate(['']);
      },
      err => {
        this.toastrService.error(err.error.message);
        this.userService.setBusy(false);
        this.onNextStep();
      }
    );
  }


  onSwitchToLogin(){
    //alert("switch to login");
    this.router.navigate(['']);
  }
}
