import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    // styles: ['thead{color:teal}', 'h4{color:tomato}']
    styleUrls: ['./product.component.css'],
    styles: [
      `.online{
        background-color:wheat
      }`
    ]
})

export class ProductComponent implements OnInit {
    title: string = 'Product Filter';
    mainHeading: string = '*****Products Page*****';
    showTable: boolean = true;
    showImage: boolean = false;
    userText: string ;
    imageWidth: number = 100;
    serverstatus: string = 'offline';

    constructor(private productService: ProductService ) {
      this.serverstatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }
    products: IProduct[];

    ngOnInit(): void {
      this.products = this.productService.getProducts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    getColor() {
      return this.serverstatus === 'Online' ? 'green' : 'red';
    }

    onDataRecive(message: string): void {
        this.mainHeading = '*****Products Page*****' + message;
    }
}
