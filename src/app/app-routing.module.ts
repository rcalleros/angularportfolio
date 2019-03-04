import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { WebViewComponent } from './web-view/web-view.component';

const routes: Routes = [
  {
    path:'',
    component: ItemListComponent
  },
  {
    path:'web',
    component: WebViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
