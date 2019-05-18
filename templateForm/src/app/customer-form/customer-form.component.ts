import { Component } from '@angular/core';
import { CutsomerModal } from '../models/CustomerModal';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/form-poster.service';

@Component({
    selector: 'app-cust',
    templateUrl: './customer-form.component.html'
})


export class CustomerFormComponent {
    languages: any[] = ['AI', 'ML', 'DataScience', 'AWS', 'GCP'];
    mymodel = new CutsomerModal('John', 'Eva', 'j@gmail.com', '12345678', true, 'male', 'AI');

    hasCodeLangError: boolean = false;

    constructor(private formPosterService: FormPosterService) {}

    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.mymodel.firstname = value.charAt(0).toUpperCase();
        } else {
            this.mymodel.firstname =  value;
        }
    }

    validateCodeLang(event): void {
        if (this.mymodel.codelang === 'default') {
                this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    submitForm(form: NgForm): void {
        // console.log('>>>>FormData<<<<', form.value);
        this.formPosterService.postCustomer(form.value)
            .subscribe((res) =>  console.log('data posted'));
    }

}
