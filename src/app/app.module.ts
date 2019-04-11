import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { WebViewComponent } from './web-view/web-view.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    WebViewComponent,
    TopBarComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
