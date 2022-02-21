import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Listados
import { ListRevolComponent } from './list-revol/list-revol.component';
import { ListCrediComponent } from './list-credi/list-credi.component';

// Alta Revolvente
import { ModCrediComponent } from './mod-credi/mod-credi.component';
// Datos Depositos o retiros



const routes: Routes = [
  {
    path: '',
    children: [
{
        path: 'list-credi',
        component: ListCrediComponent,
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
                  path: 'mod-credi',
                  component: ModCrediComponent,
                  data: {
                    title: 'vista credito'
                  }
                },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversionRoutingModule { }
