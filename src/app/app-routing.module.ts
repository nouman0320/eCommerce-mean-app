import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu-page/main-menu/main-menu.component';
import { RegisterComponent } from './register-page/register/register.component';
import { NotFoundComponent } from './page-404/not-found/not-found.component';
import { ShoppingComponent } from './shopping-page/shopping/shopping.component';
import { OrderComponent } from './order-page/order/order.component';
import { AdminComponent } from './admin-page/admin/admin.component';

const routes: Routes = [
  {path: '', component: MainMenuComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop', component: ShoppingComponent},
  {path: 'checkout', component: OrderComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
