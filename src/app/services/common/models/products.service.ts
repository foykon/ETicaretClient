import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClientService: HttpClientService) { }

  create(product: Product, successCallBack?: any,  errorCallBack?: (errorMessage: string) => void){
    this.httpClientService.post({
      controller: "products"    },product).subscribe(result =>{
      successCallBack();

    },(errorResponse : HttpErrorResponse) => {
      const _error: Array<{key: string, value: Array<string>}> = errorResponse.error;
      let message = "";
      _error.forEach((v, index)=> {
        v.value.forEach((_v,_index) =>{
          message+=`${_v}<br>`;
        });
      });
      errorCallBack(message);
    });

  }



}
