import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemListComponent } from './item-list/item-list.component';
import { EditableListComponent } from './editable-list/editable-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { WebViewComponent } from './web-view/web-view.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CrossBrowserPaddingDirective } from './directives/cross-browser-padding.directive';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectFormComponent } from './projects/add-project-form/add-project-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    WebViewComponent,
    TopBarComponent,
    SigninComponent,
    FooterComponent,
    EditableListComponent,
    NavMenuComponent,
    CrossBrowserPaddingDirective,
    ProjectsComponent,
    AddProjectFormComponent
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
