import { Component, Input, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/http-requests/http-requests.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  openRegistration: boolean = false;

  btnDisabled = false;

  constructor(private httpRequest: HttpRequestsService) { }

  ngOnInit(): void {
  }

  validate() {
    if (this.email) {
      if (this.password) {
        return true;
      } else {
        alert('Password is not entered');
      }
    } else {
      alert('Email is not entered.');
    }
  }

  login(){
    this.btnDisabled = true;
    this.httpRequest.login(this.email, this.password).subscribe((res: any) => {
      console.log(res);
      if(res.status == '200'){
        this.getCart();
      } else {
        alert('The account credentials are invalid!');
      }
    });
  }
  register(){
    this.openRegistration = true;
  }

  getCart(){
    this.httpRequest.getCart().subscribe((res: any) => {
      console.log(res);
    });
  }

}
