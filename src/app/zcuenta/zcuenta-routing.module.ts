import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Listado
import { ListEjeComponent } from './list-eje/list-eje.component';
import { ListDepoComponent } from './list-depo/list-depo.component';
// Datos de la cuenta
import { QryEjeComponent } from './qry-eje/qry-eje.component';
// Alta de cuenta
import { ModEjeComponent } from './mod-eje/mod-eje.component';
import { EjeOperComponent } from './mod-eje/eje-oper.component';
import { EjeAltaComponent } from './mod-eje/eje-alta.component';

// Datos deposito o retiros
import { QryDepoComponent } from './qry-depo/qry-depo.component';
// Depositos y Retiros
import { ModDepoComponent } from './mod-depo/mod-depo.component';


const routes: Routes = [
  {
    path: '',
    children: [
{
                            path: 'list-eje',
                            component: ListEjeComponent,
                            data: {
                              title: 'lista Cuenta Eje'
                            }
                          },
{
                            path: 'list-depo',
                            component: ListDepoComponent,
                            data: {
                              title: 'lista Depositos & Retiros'
                            }
                          },

    {
                    path: 'mod-depo',
                    component: ModDepoComponent,
                    data: {
                      title: 'deposito'
                    }
                  },
    {
            path: 'qry-depo',
            component: QryDepoComponent,
            data: {
              title: 'query depo'
            }
          },
  {
        path: 'mod-eje',
        component: ModEjeComponent,
        data: {
          title: 'Cuenta Eje'
        }
      },
  {
          path: 'eje-oper',
          component: EjeOperComponent,
          data: {
            title: 'Cuenta Eje'
          }
        },
  {
            path: 'eje-alta',
            component: EjeAltaComponent,
            data: {
              title: 'Cuenta Eje'
            }
          },



      {
        path: 'qry-eje',
        component: QryEjeComponent,
        data: {
          title: 'Cuenta Eje'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }
