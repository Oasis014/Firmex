import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastFilterComponent } from './master-filter/master-filter.component';
import { Mast2FilterComponent } from './master-filter2/master-filter2.component';
import { Mast3FilterComponent } from './master-filter3/master-filter3.component';
import { Mast4FilterComponent } from './master-filter4/master-filter4.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
         path: 'master-filter',
         component: MastFilterComponent,
         data: {
           title: 'Filter Data Table'
         }
      },  
      {
         path: 'master-filter2',
         component: Mast2FilterComponent,
         data: {
           title: 'Filter Data Table'
         }
      }, 
      {
         path: 'master-filter3',
         component: Mast3FilterComponent,
         data: {
           title: 'Filter Data Table'
         }
      },
      {
         path: 'master-filter4',
         component: Mast4FilterComponent,
         data: {
           title: 'Filter Data Table'
         }
      }, 
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
