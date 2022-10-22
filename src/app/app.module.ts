import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './components/dashboard/components/posts/posts.component';
import { ActionrowComponent } from './components/dashboard/components/actionrow/actionrow.component';
import { PostComponent } from './components/dashboard/components/post/post.component';
import { MaintenanceComponent } from './components/dashboard/components/maintenance/maintenance.component';
import { AddpostComponent } from './components/dashboard/components/addpost/addpost.component';
import { PaymentModalComponent } from './components/dashboard/components/payment-modal/payment-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    PostsComponent,
    ActionrowComponent,
    PostComponent,
    MaintenanceComponent,
    AddpostComponent,
    PaymentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
