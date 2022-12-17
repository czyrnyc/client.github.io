import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpRequestsService } from '../http-requests/http-requests.service';
import { Product } from '../models/Product';
import { Paymethod } from '../models/Paymethod';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cardSelect: string;
  @Input() paymentInfoCompleted: boolean;
  @Input() openCart: any;

  @Output() closeCart: EventEmitter<any> = new EventEmitter();

  cartItems : Product[];

  payMethods : Paymethod[];

  nullPaymethods : boolean = false;

  methodSelected: boolean = false;

  constructor(private httpRequest: HttpRequestsService) { }

  ngOnInit(): void {

    this.getCart();

  }

  removeItem(removedItem : string){

    this.httpRequest.removeFromCart(removedItem).subscribe((res:any)=> {
      
    });

  }

  checkout(){

      this.httpRequest.getPayMethods().subscribe((res:any) =>{
        let methods = JSON.parse(res);
        if(methods.length == 0){
          this.nullPaymethods = true;
        } else {
          if(this.cardSelect != null){
            this.methodSelected = true;
          }
        }
      });
  }

  confirmOrder(){
    this.httpRequest.checkout().subscribe((res: any) => {
      if(res.contains("There is no item in your cart")){
        alert("You have no items in your cart!");
      } else {
        this.openCart = false;
        alert(res.toString());
        this.closeCart.emit(this.openCart);
      }
    });
  }

  getCart(){
    this.httpRequest.getCart().subscribe((res:any) => {

      for(let object in res){

        let var1 = JSON.parse(object);

        let id = var1.id;

        let item_name = var1.itemname;

        let quantity = var1.quantity;

        let item_type = var1.item_type;

        let brand = var1.brand;

        let price = var1.price;

        let description = var1.description;

        let prod : Product = { id : id, item_name : item_name , quantity : quantity, item_type : item_type, brand : brand, price : price, description : description };

        this.cartItems.push(prod);

      }

    });
  }

}