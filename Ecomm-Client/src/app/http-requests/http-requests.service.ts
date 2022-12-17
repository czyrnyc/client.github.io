import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  apiUrl: String = "http://teamm4413.us-east-1.elasticbeanstalk.com/";

  constructor(private http: HttpClient) { }

  getToken() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

  register(email: String, password: String, lname: String, fname: String){
    let url = this.apiUrl + "register?email=" + email + "&password=" + password + "&fn=" + fname + "&ln=" + lname;
    return this.http.get(url);
  }

  login(email: String, password: String){
    let url = this.apiUrl + "login?email=" + email + "&password=" + password;
    return this.http.get(url);
  }

  getCart(){
    let url = this.apiUrl + "login?cart=true";
    return this.http.get(url);
  }

  removeFromCart(id: string){
    let url = this.apiUrl +"browse?id=" + id + "&add=false";
    return this.http.get(url);
  }

  // Adds 1 item/product: `id`  to cart
  addToCart(id: string){
    let url = this.apiUrl + "browse?id=" + id + "&add=true&" + "quantity=1";
    return this.http.get(url);
  }

  getProducts(){
    let url = this.apiUrl + "browse";
    return this.http.get(url);
  }

  paymentInfo(cardNum : String, cardHold: String, cvv: String, exprDate: String, street: String, city: String, zip: String, phoneNum: String) {
    let url = this.apiUrl + "pay_methods?card_number=" + cardNum+ "&card_holder=" + cardHold + "&cvv=" + cvv + "&street=" + street + "&city=" + city + "&zip=" + zip + "&phone=" + phoneNum + "&exp_date=" + exprDate
    return this.http.get(url);
  }

  getPayMethods(){
    let url = this.apiUrl + "pay_methods";
    return this.http.get(url);
  }

  checkout(){
    let url = this.apiUrl + "orders?purchase=true";
    return this.http.get(url);
  }

}
