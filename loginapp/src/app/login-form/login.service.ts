import { Injectable } from '@angular/core';
import { LoginModal } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LoginService {

    private url = 'http://localhost:5000/api/auth/login';

    constructor(private http: HttpClient) {}

    loginUser( luser: LoginModal) {
        return this.http.post(this.url, luser );
    }
}
