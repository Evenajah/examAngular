import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SelectItem } from "../interface/selectItem";
import { ShoppingService } from "../service/shopping.service";
import { TableProduct } from "../interface/category";

@Component({
  selector: "app-page-shopping",
  templateUrl: "./page-shopping.component.html",
  styleUrls: ["./page-shopping.component.scss"]
})
export class PageShoppingComponent implements OnInit {
  @Output() emit = new EventEmitter();
  productType: SelectItem[];
  productList: SelectItem[];
  valueList: TableProduct;
  countOrder: number;
  basket = [];
  orderDetailList: any;

  constructor(private service: ShoppingService) {}

  ngOnInit() {
    this.countOrder = 0;
    this.searchTypeProduct();
    this.setProductList();
  }
  searchTypeProduct() {
    this.service.getCategory().subscribe(response => {
      // this.productType = this.productType.filter(
      //   entity => entity.value !== null
      // );
      this.productType = response.map(item => {
        return {
          label: item.categoryName,
          value: item.categoryCode
        };
      });
      console.log(this.productType);
      this.searchTable(this.productType[0].value);
    });
  }

  setProductList() {
    this.productList = [{ value: "5", label: "5" }];
  }

  searchTable(product: string) {
    console.log(product);
    this.service.queryProductByCategoryCode(product).subscribe(response => {
      this.valueList = response;
    });
  }

  emitCode(categoryCode: any) {
    this.service.categoryStore = categoryCode;
    this.emit.emit(this.valueList.categoryCode);
  }

  addOrder(object: any) {
    // this.basket.push(object[0]);
    // console.log(object);

    this.orderDetailList = {
      product: {
        productCode: object.productCode,
        productName: object.productName,
        price: object.price,
        totalPrice: object.price,
        amount: 1
      }
    };
    this.basket.push(this.orderDetailList);

    console.log(this.basket);

    this.countOrder += 1;
    
  }
  setOrder() {
    this.service.cart = this.basket;
  }
}
