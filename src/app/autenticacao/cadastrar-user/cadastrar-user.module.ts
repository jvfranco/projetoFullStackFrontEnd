import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CadastrarUserRoutingModule } from './cadastrar-user-routing.module';
import { CadastroUserComponent, CadastrarUserComponent } from './components';

@NgModule({
  declarations: [
    CadastroUserComponent,
    CadastrarUserComponent
  ],
  imports: [
    CommonModule,
    CadastrarUserRoutingModule,
    RouterModule
  ]
})
export class CadastrarUserModule { }
