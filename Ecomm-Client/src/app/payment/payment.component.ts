import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpRequestsService } from '../http-requests/http-requests.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cardNum : String;
  cardHold : String;
  cvv : String;
  exprDate : String;
  street : String;
  city : String;
  zip : String;
  phoneNum : String;
  
  @Input() PayMethods : any;
  @Input() paymentInfoInput : boolean;
  @Input() nullPaymethods: any;

  @Output() updateFlag: EventEmitter<any> = new EventEmitter();
  @Output() cardSelect : EventEmitter<any> = new EventEmitter();

  constructor(private httpRequest : HttpRequestsService) { }

  ngOnInit(): void {
    this.getPayment()
  }
  
  cardSelected(cardSelect: any){
    this.cardSelect.emit(cardSelect);
    this.nullPaymethods = false;
    this.updateFlag.emit(this.nullPaymethods);
  }

  getPayment() {
    this.httpRequest.paymentInfo(this.cardNum, this.cardHold, this.cvv, this.exprDate, 
      this.street, this.city, this.zip, this.phoneNum).subscribe((res : any) =>{
        if(res.contains("Payment method inserted sucessfully")) {
          alert("Payment method successfully added!")
          this.paymentInfoInput = false;
        }
    })
  }
}
