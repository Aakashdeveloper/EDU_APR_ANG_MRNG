import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'productSearch'
})

export class ProductSearchPipe implements PipeTransform {
    transform(value: IProduct[], userInput: string ) {
        // convert user input in lowercase
        userInput = userInput ? userInput.toLowerCase() : null;
        // return according to user input
        return userInput ? value.filter( (product) =>
            ((product.productName.toLowerCase().indexOf(userInput) !== -1))
            || (product.productCode.toLowerCase().indexOf(userInput) !== -1)
            ) : value;
    }
}



// ages.filter((aakash) => { return age>=18 })
