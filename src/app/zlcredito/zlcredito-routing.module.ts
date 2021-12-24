import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Listados
import { ListRevolComponent } from './list-revol/list-revol.component';
import { ListNorevComponent } from './list-norev/list-norev.component';
// Datos Linea de Crédito
import { QryCrediComponent } from './qry-credi/qry-credi.component';
// Alta Revolvente
import { ModCrediComponent } from './mod-credi/mod-credi.component';
// Datos Depositos o retiros
import { QryNocrediComponent } from './qry-nocredi/qry-nocredi.component';
// Depositos o retiros


const routes: Routes = [
  {
    path: '',
    children: [
{
        path: 'list-norev',
        component: ListNorevComponent,
        data: {
          title: 'Cuenta Re-inversion'
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
                 path: 'qry-credi',
                 component: QryCrediComponent,
                 data: {
                   title: 'vista credito'
                 }
               },
 {
                  path: 'mod-credi',
                  component: ModCrediComponent,
                  data: {
                    title: 'vista credito'
                  }
                },

    {
                    path: 'qry-nocredi',
                    component: QryNocrediComponent,
                    data: {
                      title: 'vista no credito'
                    }
                  }



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversionRoutingModule { }
