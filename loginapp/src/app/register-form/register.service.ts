import { Injectable } from '@angular/core';
import { RegisterModal } from './register.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RegisterService {

    private url = 'http://localhost:5000/api/auth/register';

    constructor(private http: HttpClient) {}

    registerUser( ruser: RegisterModal) {
        // console.log('>>>>Data in service ', customer);
        return this.http.post(this.url, ruser );
    }
}
