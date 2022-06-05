import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Listados
import { ListRevolComponent } from './list-revol/list-revol.component';
import { ListCrediComponent } from './list-credi/list-credi.component';
import { ListCredilComponent } from './list-credil/list-credil.component';
// Alta Revolvente
import { ModCrediComponent } from './mod-credi/mod-credi.component';
import { ModLineCrediComponent } from './mod-linecredi/mod-linecredi.component';
// Datos Depositos o retiros

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-credil',
        component: ListCredilComponent,
        data: {
          title: 'Listado de Credito'
        }
      },
      {
        path: 'list-credi', /* LISTADO PRINCIPAL */
        component: ListCrediComponent,
        data: {
          title: 'Listado de Linea de Credito'
        }
      },
      {
        path: 'list-revol',
        component: ListRevolComponent,
        data: {
          title: 'Cuenta Re-inversion'
        }
      },
      {
        path: 'mod-credi', /* NUEVO CREDITO */
        component: ModCrediComponent,
        data: {
          title: 'vista credito'
        }
      },
      {
        path: 'mod-linecredi/:id/linea/:cred', /* DETALE CREDITO */
        component: ModLineCrediComponent,
        data: {
          title: 'modificacion linea credito'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditoRoutingModule { }
