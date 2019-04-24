import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { EditableListComponent } from './editable-list/editable-list.component';
import { WebViewComponent } from './web-view/web-view.component';
import { SigninComponent } from './signin/signin.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'projectlist',
    component: ItemListComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
