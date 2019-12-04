import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu-page/main-menu/main-menu.component';
import { RegisterComponent } from './register-page/register/register.component';
import { NotFoundComponent } from './page-404/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }