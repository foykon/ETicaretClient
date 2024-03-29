import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends BaseComponent {

  /**
   *
   */
  constructor( spinner: NgxSpinnerService) {
    super(spinner);

  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballAtom);
  }

}
