import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { WebService } from './web.service';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: Boolean = false;
  isUserBusy: Boolean = false;
  isUserAdmin: Boolean = false;

  user: User = new User();


  recentlyRemovedSession: Boolean = false;

  constructor(public webService: WebService, public router: Router, public cartService: CartService) {
    this.user.firstName = "John";
    this.user.lastName = "Doe";
    this.doesPreviousSessionExist();
  }

  setBusy(opt: Boolean){
    this.isUserBusy = opt;
  }


  setSession(data: any){
    this.user = new User();
    this.user = data;
    this.isUserLoggedIn = true;
    localStorage.setItem("username", this.user.username.toString());
    localStorage.setItem("id", this.user.id.toString());
    this.cartService.initializeCart(this.user.id);
  }


  logout(){
    this.removeSession();
  }

  removeSession(){
    this.isUserLoggedIn = false;
    localStorage.clear();
    this.recentlyRemovedSession = true;
    console.log("removeSession() called");
  }


  setAdminMode(opt: Boolean){
    this.isUserAdmin = opt;
    if(opt){
      localStorage.setItem("admin_mode", "true");
    }
  }

  doesPreviousSessionExist(){
    this.setBusy(true);

    //alert(this.router.url);
    console.log("doesPreviousSessionExist() called");

    if(localStorage.getItem("admin_mode") === "true"){ // admin has to re-login everytime
      this.setBusy(false);
      this.removeSession();
      return;
    }

    if(localStorage.getItem("username") != null || localStorage.getItem("id") != null){
      this.webService.customerDetails(localStorage.getItem("username")).subscribe(
        data=>{
          console.log("inside network call");
          if(!this.recentlyRemovedSession){
            this.setSession(data.data);
          }
          else this.recentlyRemovedSession = false;
          this.setBusy(false);
        },
        err=>{
          this.setBusy(false);
          this.recentlyRemovedSession = false;
        }
      );
    } else {
      // session does not exist
      this.removeSession(); // clearing garbage if any
      this.setBusy(false);
      this.recentlyRemovedSession = false;
    }
  }

}
