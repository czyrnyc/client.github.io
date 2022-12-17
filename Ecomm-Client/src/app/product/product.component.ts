import { Component, OnInit, Input } from '@angular/core';
import { HttpRequestsService } from '../http-requests/http-requests.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  constructor(private httpRequest: HttpRequestsService) { }

  ngOnInit(): void {
  }

  addToCart(productID: string) {
    this.httpRequest.addToCart(productID).subscribe((res: any) => {
      let split = res.split('.');
      let item = split[1];
      if(res.contains("Item has been added successfully")){
        alert("You have added " + item + " to your cart")
      }
    });
  }

}
