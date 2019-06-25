import { ShoppingsModule } from './shoppings/shoppings.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import * as router from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageShoppingComponent } from './shoppings/page-shopping/page-shopping.component';
import { ViewProductComponent } from './shoppings/view-product/view-product.component';
import { CartComponent } from './shoppings/cart/cart.component';
import { InsertComponent } from './shoppings/insert/insert.component';

const routes: router.Routes = [
  { path: '', redirectTo: 'shopping/shopping', pathMatch: 'full' },
  {
    path: 'shopping/shopping/view/:productCode',
    component: ViewProductComponent
  },
  { path: 'shopping/shopping', component: PageShoppingComponent },
  { path: 'shopping/shopping/cart', component: CartComponent },
  { path: 'shopping/shopping/buy', component: InsertComponent }
  
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    router.RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),

    ShoppingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
