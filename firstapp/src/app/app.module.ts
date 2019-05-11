// To import module file or anyother thing
// that help to build file
import { NgModule } from '@angular/core';
// To display app on browser
import { BrowserModule } from '@angular/platform-browser';
// For forms Element
import { FormsModule } from '@angular/Forms';
// Component
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/myDiscount.pipe';
import { ProductSearchPipe } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';


// decorater (matadata)
@NgModule({
    // All Module will declare here
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All Component and pipe
    declarations: [
        AppComponent,
        MoviesComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        ProductSearchPipe,
        StarComponent,
        HomeComponent
    ],

    // Only first/main component
    bootstrap: [
        AppComponent
    ],

    // All Services will declare here
    providers: [
        ProductService
    ]
})


// to export or expose to external env
export class AppModule {

}

