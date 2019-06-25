import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { category } from '../interface/category';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  categoryStore: string;

  cart: any;
  order: any;
  customerId: string;
  amount: any;

  constructor(private http: HttpClient) {}

  getCategory(condition = {}) {
    return this.http.get<any>(`/exam-api/api/category/queryCategory`);
  }

  queryProductByCategoryCode(categoryCode: string) {
    return this.http.get<any>(
      `/exam-api/api/product/queryProductByCategoryCode?categoryCode=${categoryCode}`
    );
  }

  getCustomer(id: string) {
    return this.http.get<any>(`/exam-api/api/customer/${id}`);
  }

  makeOrder(data: any) {
    return this.http.post<any>(`/exam-api/api/order/makeOrder`, data);
  }
}
