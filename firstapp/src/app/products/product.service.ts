import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductService {

    private productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl);
    }

    getProductDetails(id): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.productUrl}?productId=${id}`);
    }

}
