import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {

    path: "Login", component: LoginComponent
  },
  {
    path: "Main", component: UserPageComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
