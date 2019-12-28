import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuperaSenhaComponent, RecuperarSenhaComponent } from './components';

export const RecuperarSenhaRoutes: Routes = [
    {
        path: 'recuperar-senha',
        component: RecuperaSenhaComponent,
        children: [
            {
                path: '',
                component: RecuperarSenhaComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(RecuperarSenhaRoutes)],
    exports: [
        RouterModule
    ]
})
export class RecuperarSenhaRoutingModule { }