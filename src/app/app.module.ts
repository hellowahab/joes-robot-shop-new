import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from '_course-resources/user/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormControlsComponent } from '_course-resources/template-form-controls/template-form-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    SiteHeaderComponent,
    ProductDetailsComponent,
    CatalogComponent,
    CartComponent,
    SignInComponent,
    TemplateFormControlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
