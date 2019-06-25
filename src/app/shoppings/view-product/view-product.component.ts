import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../service/shopping.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  categoryRecieve:string
  valueProduct:any;
  constructor(
    private service: ShoppingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryRecieve = this.service.categoryStore;
    this.service.queryProductByCategoryCode(this.categoryRecieve).subscribe(response => {

      this.valueProduct = response;
      this.valueProduct = this.valueProduct.filter(entity => entity.productCode === this.route.snapshot.params.productCode);

      console.log("re",this.valueProduct);
    })
   
  }

 
}
