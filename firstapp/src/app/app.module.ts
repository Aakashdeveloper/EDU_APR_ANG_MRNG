// To import module file or anyother thing
// that help to build file
import { NgModule } from '@angular/core';
// To display app on browser
import { BrowserModule } from '@angular/platform-browser';
// For forms Element
import { FormsModule } from '@angular/Forms';
// For Http call
import { HttpClientModule } from '@angular/common/http';
// For Routing
import { RouterModule } from '@angular/router';
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
import { MusicComponent } from './music/music.component';
import { OrdersComponent } from './orders/orders.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { MusicService } from './music/music.service';
import { MusicModule } from './music/music.module';
import { ProductModule } from './products/product.module';


// decorater (matadata)
@NgModule({
    // All Module will declare here
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', component: ProductDetailComponent},
            {path: 'orders', component: OrdersComponent },
            {path: 'music', component: MusicComponent },
            {path: 'home', component: HomeComponent },
            {path: '', redirectTo: 'home', pathMatch: 'full' },
            {path: '**', component: NotFoundComponent },
        ]),
        ProductModule,
        MusicModule
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
        HomeComponent,
        MusicComponent,
        OrdersComponent,
        NotFoundComponent,
        ProductDetailComponent
    ],

    // Only first/main component
    bootstrap: [
        AppComponent
    ],

    // All Services will declare here
    providers: [
        ProductService,
        MusicService
    ]
})


// to export or expose to external env
export class AppModule {

}

