import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path : "", pathMatch:"full", component : NavbarComponent },
  { path : "registeration", component : UserRegisterationComponent },
  
  { path : "users", component : UserListPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
