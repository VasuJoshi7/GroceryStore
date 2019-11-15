import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'environments/config';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {

  }

  GetAllProduct(): Observable<any> {
    return this.http.get<any>(API_URL + 'product/');
  }

  GetProductById(prodcutId: number): Observable<any> {
    return this.http.get<any>(API_URL + 'product/' + prodcutId);
  }

  DeleteProduct(prodcutId: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'product/' + prodcutId);
  }

  CreateProduct(product: any): Observable<any> {
    return this.http.post<any[]>(API_URL + 'product', product);
  }

  UpdateProduct(product: any, productId: number): Observable<any> {
    return this.http.patch<any[]>(API_URL + 'product/' + productId, product);
  }

  GetProductByCategory(categoryName: string): Observable<any> {
    return this.http.post<any>(API_URL + 'product/ByCategory/',{name:categoryName});
  }


}
