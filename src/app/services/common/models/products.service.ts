import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Product } from 'src/app/contracts/create_product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClientService: HttpClientService) { }

  create(product: Product, successCallBack?: any){
    this.httpClientService.post({
      controller: "products"    },product).subscribe(result =>{
      successCallBack();
      alert("başarılı");
    });

  }



}
