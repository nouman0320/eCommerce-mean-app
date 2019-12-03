import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userFirstName: String = "John";
  userLastName: String = "Doe";

  constructor() { }
}
