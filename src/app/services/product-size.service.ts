import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductSize } from '../models/productSize.model';

@Injectable({
  providedIn: 'root'
})
export class ProductSizeService {

  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProductSize(): Observable<ProductSize[]> {
    return this.http.get<ProductSize[]>(`${this.url}/ProductSize`);
  }
}
