import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

const routes: Routes = [

  { path : "registeration", component : UserRegisterationComponent },
  
  { path : "users", component : UserListPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
