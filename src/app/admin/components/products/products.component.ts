import { Component } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {
/**
 *
 */
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);

  }
  ngOnInit(){
    this.showSpinner(SpinnerType.ballAtom);
    this.httpClientService.get<Product>({
      controller: "products"
    }).subscribe(data => console.log(data));

//    this.httpClientService.post({
//      controller: "products"
//    }, {
//      name:"kalem",
//      stock:100,
//      price:10
//    }).subscribe();

   // this.httpClientService.put({
   //   controller: "products",
   //   }, {
   //     id: "119b1d47-85c5-456c-b485-bfc9b7f04efa",
   //     name:"şiş",
   //     stock:20,
   //     price:20.2
   // }).subscribe();
    //    this.httpClientService.delete({
    //      controller: "products"
    //    },"119b1d47-85c5-456c-b485-bfc9b7f04efa")
    //    .subscribe();
//

    //  this.httpClientService.get({
    //    baseUrl:"https://jsonplaceholder.typicode.com",
    //    controller: "posts"
    //  }).subscribe(data=>console.log(data));
  }//
}
