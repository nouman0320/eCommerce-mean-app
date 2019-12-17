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

  // ==================================================================================

  //
  //  ADMIN CALLS START
  //

  adminLogin(admin: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(admin);
    return this.http.post('/api/admins/login' , body, {
      headers: headers
    });
  }

  // NOT ALLOWING ADMIN TO REGISTER FROM FRONT_END
  /*
  adminRegister(admin: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(admin);
    return this.http.post('/api/customers/' , body, {
      headers: headers
    });
  }*/

  adminDetails(username: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/admins/'+username, {
      headers: headers
    });
  }


  //
  //  ADMIN CALLS END
  //

  // ==================================================================================

  //
  //  CATEGORY CALLS START
  //

  allCategories(): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/categories', {
      headers: headers
    });
  }

  //
  //  CATEGORY CALLS END
  //

  // ==================================================================================

   //
  //  GROCERY ITEM CALLS START
  //

  countGroceryItem(): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get('/api/grocery-items/count' , {
      headers: headers
    });
  }

  newGroceryItem(groceryItem: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(groceryItem);
    return this.http.post('/api/grocery-items/' , body, {
      headers: headers
    });
  }

  updateGroceryItem(groceryItem: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(groceryItem);
    return this.http.post('/api/grocery-items/update' , body, {
      headers: headers
    });
  }

  getGroceryItemDetail(id: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/grocery-items/'+id, {
      headers: headers
    });
  }

  getGroceryItemsByCategory(category_id: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/grocery-items/category/'+category_id, {
      headers: headers
    });
  }

  //
  //  GROCERY ITEM CALLS END
  //

  // ==================================================================================



  //
  //  CART CALLS START
  //

  newCart(cart: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(cart);
    return this.http.post('api/shopping-cart' , body, {
      headers: headers
    });
  }

  updateCart(cart: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(cart);
    return this.http.post('api/shopping-cart/update' , body, {
      headers: headers
    });
  }

  getlatestCart(customerId: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/shopping-cart/latest/'+customerId, {
      headers: headers
    });
  }


  markCartComplete(id: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.post('api/shopping-cart/complete/'+id, {
      headers: headers
    });
  }

  //
  //  CART CALLS END
  //

  // ==================================================================================


  //
  //  CART ITEM CALLS START
  //

  newCartItem(cartItem: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(cartItem);
    return this.http.post('api/shopping-cart-item' , body, {
      headers: headers
    });
  }

  updateCartItem(cartItem: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(cartItem);
    return this.http.post('api/shopping-cart-item/update' , body, {
      headers: headers
    });
  }

  getCartItems(cartId: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get('api/shopping-cart-item/'+cartId, {
      headers: headers
    });
  }


  deleteCartItem(id: String): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.delete('api/shopping-cart-item/'+id, {
      headers: headers
    });
  }

  //
  //  CART ITEM CALLS END
  //

  // ==================================================================================


  //
  //  GROCERY LIST ORDER CALLS START
  //

  countGroceryListOrder(): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get('/api/grocery-list-order/count' , {
      headers: headers
    });
  }

  newGroceryListOrder(groceryListOrder: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(groceryListOrder);
    return this.http.post('/api/grocery-list-order/' , body, {
      headers: headers
    });
  }

  //
  //  GROCERY LIST ORDER CALLS END
  //

  // ==================================================================================

}
