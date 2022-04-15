import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './composants/products/products.component';
import { AddProductComponent } from './composants/add-product/add-product.component';
import { HomePageComponent } from './composants/home-page/home-page.component';

import { HttpClientModule } from '@angular/common/http';
import { ComposantsComponent } from './composants/composants.component';
import { LoginComponent } from './composants/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    HomePageComponent,
    ComposantsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
