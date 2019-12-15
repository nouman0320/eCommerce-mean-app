import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn: Boolean = false;
  isUserBusy: Boolean = false;
  isUserAdmin: Boolean = false;

  user: User = new User();

  constructor(public webService: WebService) {
    this.user.firstName = "John";
    this.user.lastName = "Doe";
    this.doesPreviousSessionExist();
  }

  setBusy(opt: Boolean){
    this.isUserBusy = opt;
  }


  setSession(data: any){
    this.user = data;
    this.isUserLoggedIn = true;
    localStorage.setItem("username", this.user.username.toString());
    localStorage.setItem("id", this.user.id.toString());
  }


  logout(){
    this.removeSession();
  }

  removeSession(){
    this.isUserLoggedIn = false;
    localStorage.clear();
  }


  setAdminMode(opt: Boolean){
    this.isUserAdmin = opt;
    if(opt){
      localStorage.setItem("admin_mode", "true");
    }
  }

  doesPreviousSessionExist(){
    this.setBusy(true);

    if(localStorage.getItem("admin_mode") === "true"){ // admin has to re-login everytime
      this.setBusy(false);
      this.removeSession();
      return;
    }

    if(localStorage.getItem("username") != null || localStorage.getItem("id") != null){
      this.webService.customerDetails(localStorage.getItem("username")).subscribe(
        data=>{
          this.setSession(data.data);
          this.setBusy(false);
        },
        err=>{
          this.setBusy(false);
        }
      );
    } else {
      // session does not exist
      this.removeSession(); // clearing garbage if any
      this.setBusy(false);
    }
  }

}
