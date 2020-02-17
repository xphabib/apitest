import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//services
import { UserService } from './services/user.service';
import { Base } from './services/base';
import { AuthService } from './services/auth.service';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    Base,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
