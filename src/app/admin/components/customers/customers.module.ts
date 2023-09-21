import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      //fazla component in varsa path e bişey yazmak gerekir şunalk gerek yok
      {path: "", component: CustomersComponent}
    ])
  ]
})
export class CustomersModule { }
