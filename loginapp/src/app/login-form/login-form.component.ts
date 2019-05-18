import { Component } from '@angular/core';
import { LoginModal } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cust',
    templateUrl: './login-form.component.html'
})


export class LoginFormComponent {

    mymodel = new LoginModal('j@gmail.com', '12345678');

    constructor(private loginService: LoginService,
                private router: Router) {}

    loginForm(form: NgForm): void {
        this.loginService.loginUser(form.value)
            .subscribe((res) =>  this.router.navigate(['/profile']));
    }

}
