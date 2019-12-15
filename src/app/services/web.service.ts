import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(public http: HttpClient) { }



  //
  //  CUSTOMER CALLS START
  //

  customerLogin(customer: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(customer);
    return this.http.post('/api/customers/login' , body, {
      headers: headers
    });
  }

  customerRegister(customer: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(customer);
    return this.http.post('/api/customers/' , body, {
      headers: headers
    });
  }

  customerDetails(username: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/customers/'+username, {
      headers: headers
    });
  }


  //
  //  CUSTOMER CALLS END
  //

}
