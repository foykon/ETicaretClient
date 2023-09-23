import { NgxSpinnerService } from "ngx-spinner";
import { Component } from '@angular/core';

export class BaseComponent {
  /**
   *
   */
  constructor(private spinner: NgxSpinnerService) {
  }
  showSpinner(spinnerType: SpinnerType){
    this.spinner.show(spinnerType);

    setTimeout(() => this.hideSpinner(spinnerType),1000)
  }
  hideSpinner(spinnerType: SpinnerType){
    this.spinner.hide(spinnerType);
  }

}

export enum SpinnerType{
  ballAtom = "s1",
  ballScaleMultiple = "s2",
  ballSpinClockwiseFadeRotating = "s3"
}
