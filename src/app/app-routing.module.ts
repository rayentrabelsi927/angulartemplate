import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Client/index/index.component';
import { IndexAdminComponent } from './Admin/index-admin/index-admin.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: IndexComponent },
  { path: 'admin', component: IndexAdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
