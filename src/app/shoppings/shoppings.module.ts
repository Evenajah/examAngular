import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingsRoutingModule } from './shoppings-routing.module';
import { ShoppingsComponent } from './shoppings.component';
import { PageShoppingComponent } from './page-shopping/page-shopping.component';
// import { TooltipModule } from 'primeng/tooltip';
// import { RouterModule } from '@angular/router';
// import { InsertComponent } from './insert/insert.component';
// import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';
// import { RadioButtonModule } from 'primeng/radiobutton';
// import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
// import { CheckboxModule } from 'primeng/checkbox';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ViewProductComponent } from './view-product/view-product.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CartComponent } from './cart/cart.component';
import { InsertComponent } from './insert/insert.component';

@NgModule({
  declarations: [
    ShoppingsComponent,
    PageShoppingComponent,
    ViewProductComponent,
    CartComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    ShoppingsRoutingModule,
    DropdownModule,
    RouterModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [ShoppingsComponent, PageShoppingComponent, ViewProductComponent]
})
export class ShoppingsModule {}
