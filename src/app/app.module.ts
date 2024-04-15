import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Client/index/index.component';
import { IndexAdminComponent } from './Admin/index-admin/index-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
