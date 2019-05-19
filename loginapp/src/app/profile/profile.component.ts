import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-form/login.service';

@Component({
    selector: 'app-cust',
    templateUrl: './profile.component.html'
})


export class ProfileComponent implements OnInit {

   userinfo;
   token: string;

    constructor(private loginService: LoginService) {}

    ngOnInit() {
        this.token = localStorage.getItem('TOKEN_NUMBER');
        this.loginService.getUserRole(this.token)
            .subscribe((res) => this.userinfo = res);
    }
}
