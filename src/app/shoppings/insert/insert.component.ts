import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShoppingService } from '../service/shopping.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  objectSend: any;
  customerRecieve: any;
  customer: any;
  orderRecieve: any;

  customerForm = new FormGroup({
    customerId: new FormControl(null),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required])
  });

  constructor(private service: ShoppingService) {
    this.customerForm.get('customerId').disable();
  }

  ngOnInit() {
    this.customerRecieve = this.service.customerId;
    this.orderRecieve = this.service.order;

    console.log(this.orderRecieve);

    this.service.getCustomer(this.customerRecieve).subscribe(response => {
      this.customer = response;
      console.log(response);
    });
  }

  sendOrder() {
   
    const order: any = {
      orderDetailList: [{
        ...this.orderRecieve
      }],
      amount: this.service.amount,
      total: 125036,
      customer: {
        customerId: this.customerForm.get('customerId').value,
        firstName: this.customerForm.get('firstName').value,
        lastName: this.customerForm.get('lastName').value,
        address: this.customerForm.get('address').value
      }
    };

    this.service.makeOrder(order).subscribe(response => {
      console.log(response);
    })

    console.log('final', order);
  }
}
