import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KufSkeletonLoaderModule } from '../../projects/kuf-skeleton-loader/src/lib/kuf-skeleton-loader.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        KufSkeletonLoaderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
