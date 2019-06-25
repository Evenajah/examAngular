export interface category {
  categoryCode: string;
  categoryName: string;
}
export interface TableProduct {
  categoryCode: Category;
  productCode: string;
  productName: string;
  detail: string;
  price: string;
}

export interface Category {
  categoryCode: string;
}
