import { Injectable } from '@angular/core';
import { API_URL } from 'environments/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {

  }


  GetAllCategory(): Observable<any> {
    return this.http.get<any>(API_URL + 'category/');
  }

}
