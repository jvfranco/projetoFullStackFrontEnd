import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LoginModule,
  LoginRoutingModule,
  CadastrarUserModule,
  CadastrarUserRoutingModule,
  RecuperarSenhaModule,
  RecuperarSenhaRoutingModule
} from './autenticacao';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    AngularFontAwesomeModule,
    CadastrarUserModule,
    CadastrarUserRoutingModule,
    RecuperarSenhaModule,
    RecuperarSenhaRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
