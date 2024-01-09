import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PaginatorComponent,
    ProductItemComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [LoaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
