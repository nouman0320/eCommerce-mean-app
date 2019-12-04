import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HeaderComponent } from './navigation-header/navigation/header/header.component';
import { UserService } from './services/user.service';
import { MainMenuComponent } from './main-menu-page/main-menu/main-menu.component';
import { LoginComponent } from './main-menu-page/login/login.component';
import { AboutUsComponent } from './main-menu-page/about-us/about-us.component';
import { DetailsComponent } from './main-menu-page/details/details.component';
import { RegisterComponent } from './register-page/register/register.component';
import { NotFoundComponent } from './page-404/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    LoginComponent,
    AboutUsComponent,
    DetailsComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
