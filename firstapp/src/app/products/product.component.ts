import { Component } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    title: string = 'Product Filter';
    mainHeading: string = '*****Products Page*****';
    showTable: boolean = true;
    showImage: boolean = false;
    products: any[] = [
         {
            _id: '5a05db08734d1d68d42d3300',
            productId: 3,
            productName: 'Hammer',
            productCode: 'TBX-0048',
            releaseDate: 'May 21, 2016',
            description: 'Curved claw steel hammer',
            price: 8.9,
            starRating: 4.8,
            imageUrl: 'https://i.ibb.co/TrR7jkM/hammer.png'
          },
          {
            _id: '5a05db24734d1d68d42d3313',
            productId: 8,
            productName: 'Saw',
            productCode: 'TBX-0022',
            releaseDate: 'May 15, 2016',
            description: '15-inch steel blade hand saw',
            price: 11.55,
            starRating: 3.7,
            imageUrl: 'https://i.ibb.co/vmS3kRH/saw.png'
          },
          {
            _id: '5a05db3d734d1d68d42d3322',
            productId: 10,
            productName: 'Video Game Controller',
            productCode: 'GMG-0042',
            releaseDate: 'October 15, 2015',
            description: 'Standard two-button video game controller',
            price: 35.95,
            starRating: 4.6,
            imageUrl: 'https://i.ibb.co/HD3RHMW/videogame.jpg'
          }
    ];
}
