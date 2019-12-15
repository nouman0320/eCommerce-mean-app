import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WebService } from 'src/app/services/web.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String = "";
  userPassword: String = "";


  constructor(public router: Router, public toastrService: ToastrService, public webService: WebService, public userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    this.userService.setBusy(true);

    const customer = {
      "username": this.userName,
      "password": this.userPassword
    }

    this.webService.customerLogin(customer).subscribe(
      data => {
        this.webService.customerDetails(data.data.username).subscribe(
          data=>{
            this.userService.setSession(data.data);
            this.userService.setBusy(false);
          },
          err=>{
            this.toastrService.error(err.error.message);
            this.userService.setBusy(false);
          }
        );
      },
      err => {
        this.toastrService.error(err.error.message);
        this.userService.setBusy(false);
      }
    );

  }

  onSwitchToRegister(){
    this.router.navigate(['/register']);
  }

}
