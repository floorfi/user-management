import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'createUser',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createUser',
    component: UserEditComponent
  },
  {
    path: 'updateUser/:id',
    component: UserEditComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
