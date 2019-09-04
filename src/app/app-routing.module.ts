import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { EditableListComponent } from './components/editable-list/editable-list.component';
import { WebViewComponent } from './components/web-view/web-view.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FeesComponent } from './components/fees/fees.component';
import { ProjectListComponent } from './components/project-list/project-list.component';

const routes: Routes = [
  {
    path: 'projectlist',
    component: ProjectListComponent
  },
  {
    path: 'edit',
    component: EditableListComponent
  },
  {
    path: 'web',
    component: WebViewComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projectlist/:id',
    component: ItemListComponent
  },
  {
    path: 'fees',
    component: FeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
