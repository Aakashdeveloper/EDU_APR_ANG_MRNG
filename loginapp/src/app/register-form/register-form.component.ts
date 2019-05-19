import { Component } from '@angular/core';
import { RegisterModal } from './register.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cust',
    templateUrl: './register-form.component.html'
})


export class RegisterFormComponent {

    mymodel = new RegisterModal('John', 'j@gmail.com', '12345678');


    constructor(private registerService: RegisterService,
                private router: Router) {}

    RegsiterForm(form: NgForm): void {
        this.registerService.registerUser(form.value)
            .subscribe((res) =>  this.router.navigate(['/login']));
    }

}
