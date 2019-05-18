import { Injectable } from '@angular/core';
import { CutsomerModal } from '../models/CustomerModal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormPosterService {

    private url = 'http://localhost:3100/postEmployee';

    constructor(private http: HttpClient) {}

    postCustomer( customer: CutsomerModal) {
        console.log('>>>>Data in service ', customer);
        return this.http.post(this.url, customer );
    }
}
