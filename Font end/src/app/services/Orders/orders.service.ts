import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'environments/config';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(
    private http: HttpClient
  ) { }

  CreateOrder(orders: any): Observable<any> {
    return this.http.post<any[]>(API_URL + 'order', orders);
  }


  GetAllOrder(): Observable<any> {
    debugger;
    return this.http.get<any>(API_URL + 'order/');
  }
  DeleteOrder(oredrid: number): Observable<any> {
    return this.http.delete<any>(API_URL + 'order/' + oredrid);
  }

  GetOrderById(id: any): Observable<any> {
    debugger;
    return this.http.get<any>(API_URL + 'order/'+id);
  }



}
