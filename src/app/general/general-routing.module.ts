import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BtnListComponent } from './btnlist/btnlist.component';
import { BtnViewComponent } from './btnview/btnview.component';

const routes: Routes = [
  {
    path: '',
    children: [
    {
            path: 'btnlist',
            component: BtnListComponent,
            data: {
              title: 'Boton de lista'
            }
    },
    {
            path: 'btnview',
            component: BtnViewComponent,
            data: {
              title: 'Boton de Vista'
            }
    },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
