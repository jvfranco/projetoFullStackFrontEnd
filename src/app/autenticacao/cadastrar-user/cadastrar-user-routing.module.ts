import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarUserComponent, CadastroUserComponent } from './components';

export const CadastrarUserRoutes: Routes = [
    {
        path: 'cadastro-user',
        component: CadastroUserComponent,
        children: [
            {
                path: '',
                component: CadastrarUserComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(CadastrarUserRoutes)],
    exports: [
        RouterModule
    ]
})
export class CadastrarUserRoutingModule { }
