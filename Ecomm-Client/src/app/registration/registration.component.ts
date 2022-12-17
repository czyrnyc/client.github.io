import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpRequestsService } from '../http-requests/http-requests.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() openRegistration: any;
  @Output() closeRegistration: EventEmitter<any> = new EventEmitter();

  email: String;
  password: String;
  password1: String;
  fname: String;
  lname: String;

  btnDisabled = false;

  constructor(private httpRequest: HttpRequestsService) { }

  ngOnInit(): void {
  }

  validateInputs(): boolean{
    if (this.fname) {
      if (this.lname){
        if (this.email) {
          if (this.password) {
            if (this.password1) {
              if (this.password === this.password1) {
                return true;
              } else {
                alert('Passwords do not match.');
              }
            } else {
              alert('Confirmation Password is not entered');
            }
          } else {
            alert('Password is not entered');
          }
        } else {
          alert('Email is not entered.');
        }
      } else {
        alert('Last name is not entered.');
      }
    } else {
      alert('First name is not entered.');
    }

    return false;
  }

  register(){
    this.btnDisabled = true;
    if(this.validateInputs()){
      this.httpRequest.register(this.email, this.password, this.fname, this.lname).subscribe((res: any) => {
        if(res === 'Result: 1 Registered successfully!'){
          this.btnDisabled = false;
          this.openRegistration = false;
          this.closeRegistration.emit(this.openRegistration);
        } else if (res === 'Result: -1 Email already registered.'){
          alert("There is already an account linked to this email!!");
          this.btnDisabled = false;
        }
      });
    }
    this.btnDisabled = false;
  }

}
