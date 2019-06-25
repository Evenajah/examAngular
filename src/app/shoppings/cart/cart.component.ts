import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../service/shopping.service';
import { SelectItem } from '../interface/selectItem';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartRecieve: any;
  cart: any;
  totalItem: SelectItem[];
  setOrder: any;

  customerForm = new FormGroup({
    customerId: new FormControl(null),
   
  });

  constructor(private service: ShoppingService) {
    this.totalItem = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '7', value: 7 },
      { label: '8', value: 8 },
      { label: '9', value: 9 },
      { label: '10', value: 10 }
    ];
  }

  ngOnInit() {
    this.cartRecieve = this.service.cart;

    this.cart = [
      {
        ...this.cartRecieve
      }
    ];
    console.log('recieve', this.cartRecieve);
    // console.log(this.cart);
  }

  calculatePrice(cart: any, total: string) {
    cart.product.totalPrice = Number(cart.product.price) * Number(total);
    cart.product.amount = Number(total);
    // console.log(cart.product.productName);
    // console.log(Number(price) * Number(total));
    console.log(total);
  }

  makeOrder() {
    console.log('cart',this.cart);
    console.log('length',this.cartRecieve.length);
    this.setOrder = this.cartRecieve.map(item => {
      return {
        product: {
          productCode: item.product.productCode,
          productName: item.product.productName,
          price: item.product.price
        },
        productAmount: item.product.amount,
        productTotal: item.product.totalPrice
      };
    });


    console.log('order',this.setOrder);

    // console.log(this.setOrder);
    this.service.customerId = this.customerForm.get('customerId').value;
    this.service.order = this.setOrder;
    this.service.amount = this.cartRecieve.length;
  }

}
