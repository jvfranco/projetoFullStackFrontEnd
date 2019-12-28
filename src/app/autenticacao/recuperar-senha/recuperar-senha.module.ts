import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuperaSenhaComponent, RecuperarSenhaComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecuperarSenhaComponent,
    RecuperaSenhaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RecuperarSenhaModule { }
