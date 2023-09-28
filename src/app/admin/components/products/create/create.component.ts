import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessagePosition, MessageType } from 'src/app/services/admin/alertify.service';
import { ProductsService } from 'src/app/services/common/models/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent{
  /**
   *
   */
  constructor(private productService: ProductsService, spinner: NgxSpinnerService, private alertify: AlertifyService) {
    super(spinner)
  }

  create(name: HTMLInputElement, price: HTMLInputElement, stock: HTMLInputElement){
    this.showSpinner(SpinnerType.ballAtom);
    const create_product: Product = new Product();
    create_product.name = name.value;
    create_product.price = parseFloat(price.value);
    create_product.stock = parseInt(stock.value);

    if(!name.value)
    {
      this.alertify.message("lütfen ürün adını giriniz",
        {
          dismissOthers:true,
          messageType:MessageType.Error,
          messagePosition:MessagePosition.BottomRight
        });
      return;
    }
    this.productService.create(create_product,()=>{
      this.hideSpinner(SpinnerType.ballAtom);
      this.alertify.message("ürün başarıyla eklenmiştir",{
        dismissOthers: true,
        messagePosition:MessagePosition.TopRight,
        messageType:MessageType.Success
      });
    }, errorMessage => {
      this.alertify.message(errorMessage,
        {
          dismissOthers:true,
          messageType:MessageType.Error,
          messagePosition:MessagePosition.TopRight
        });
    });
  }
}
