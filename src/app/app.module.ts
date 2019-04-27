import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BusyModule, BusyConfig } from 'angular2-busy';
import { ObservableTracker} from './services/observabletracker.service';

import { AppComponent } from './app.component';

import { ItemListComponent } from './components/item-list/item-list.component';
import { EditableListComponent } from './components/editable-list/editable-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { WebViewComponent } from './components/web-view/web-view.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './components/signin/signin.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { CrossBrowserPaddingDirective } from './directives/cross-browser-padding.directive';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectFormComponent } from './components/projects/add-project-form/add-project-form.component';
import { ObservableTrackerComponent } from './components/observable-tracker/observable-tracker.component';

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
    AddProjectFormComponent,
    ObservableTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BusyModule.forRoot(
      new BusyConfig({
          message: 'Don\'t panic!',
            backdrop: false,
            template: '<div class="progress-loader-overlay"><div class="loader">{{message}}</div></div>',
            delay: 200,
            minDuration: 600,
            wrapperClass: 'my-class'
        }))
  ],
  providers: [ObservableTracker],
  bootstrap: [AppComponent]
})
export class AppModule { }
