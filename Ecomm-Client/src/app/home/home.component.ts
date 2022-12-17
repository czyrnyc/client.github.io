import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../http-requests/http-requests.service';
import { Product } from '../models/Product' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products: Product[];
  selectedProduct: any;

  prodDetails: boolean = false;
  registrationSelected: boolean = false;
  login: boolean = false;
  openCart: boolean = false;

  constructor(private httpRequest: HttpRequestsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpRequest.getProducts().subscribe((res: any) => {
      for(let obj in res){
        let work = JSON.parse(obj);
        let id = work.id;
        let name = work.item_name;
        let quantity = work.quantity;
        let type = work.item_type;
        let brand = work.brand;
        let price = work.price;
        let desc = work.description;

        let prod: Product = { id: id, item_name: name, quantity: quantity, item_type: type, brand: brand, price: price, description: desc};
        this.Products.push(prod);
      }
    });
  }
  register(){
    this.registrationSelected = true;
  }

  openLogin(){
    this.login = true;
  }

  openDetails(item: any){
    this.prodDetails = true;
    this.selectedProduct = item;
  }

  filter(){

  }

  sortProds(prodList: any) {
    prodList.sort((obj1: any, obj2: any) => {
      if (obj1.price > obj2.price ) {
        return 1;
      }

      if (obj1.price < obj2.price) {
        return -1;
      }

      return 0;
    });
  }

}
