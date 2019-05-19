import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,
         AbstractControl } from '@angular/forms';

function ratingRange(min: number, max: number) {
    return(c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) ||  c.value < min || c.value > max)) {
            return {range: true};
        }
        return null;
    };
}

@Component({
    selector: 'app-emp',
    templateUrl: './employee.component.html'
})



export class EmployeeComponent implements OnInit {

    employeeForm: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName: ['Grev', [Validators.required, Validators.minLength(3)]],
            email: ['a@a', [Validators.required,
                        Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z0-9]')]],
            password: [12345, [Validators.required, Validators.minLength(5)]],
            rating: ['3', [Validators.required, ratingRange(1, 5)]],
            phone: [''],
            notification: ''
        });
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.employeeForm.get('phone');
        if (notifyVia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }

        phoneControl.updateValueAndValidity();
    }


    save(): void {

    }
}
