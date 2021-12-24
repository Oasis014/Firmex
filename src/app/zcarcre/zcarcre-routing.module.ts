import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Listados
import { ListCobraComponent } from './list-cobra/list-cobra.component';
import { ListCrediComponent } from './list-credi/list-credi.component';
// Datos Operación de Crédito
import { QryCobraComponent } from './qry-cobra/qry-cobra.component';
import { QryCrediComponent } from './qry-credi/qry-credi.component';
// Alta Operación de Crédito
import { PagoCobraComponent } from './pago-cobra/pago-cobra.component';
import { DispCrediComponent } from './disp-credi/disp-credi.component';


const routes: Routes = [
  {
    path: '',
    children: [

       {
                    path: 'qry-cobra',
                    component: QryCobraComponent,
                    data: {
                      title: 'Pago Adelantado'
                    }
       },
        {
                     path: 'qry-credi',
                     component: QryCrediComponent,
                     data: {
                       title: 'Disposición'
                     }
      },
            {
              path: 'list-cobra',
              component: ListCobraComponent,
              data: {
                title: 'Pago Anticipado'
              }
      },

        {
                     path: 'list-credi',
                     component: ListCrediComponent,
                     data: {
                       title: 'Disposición'
                     }
      },
      {
              path: 'pago-cobra',
              component: PagoCobraComponent,
              data: {
                title: 'Pago Anticipado'
              }
      },

        {
                     path: 'disp-credi',
                     component: DispCrediComponent,
                     data: {
                       title: 'Disposición'
                     }
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarcreRoutingModule { }
