// To import module file or anyother thing
// that help to build file
import { NgModule } from '@angular/core';
// To display app on browser
import { BrowserModule } from '@angular/platform-browser';
// Component
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';

// decorater (matadata)
@NgModule({
    // All Module will declare here
    imports: [
        BrowserModule
    ],

    // All Component and pipe
    declarations: [
        AppComponent,
        MoviesComponent
    ],

    // Only first/main component
    bootstrap: [
        AppComponent
    ],

    // All Services will declare here
    providers: []
})


// to export or expose to external env
export class AppModule {

}

