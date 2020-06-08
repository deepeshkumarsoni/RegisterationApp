import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterationComponent,
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
