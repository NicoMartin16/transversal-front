import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/equipoModel';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    private url: string = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    getProduct(): Observable<Producto[]>{
      return this.http.get<Producto[]>(`${this.url}/Product`);
    }


}
