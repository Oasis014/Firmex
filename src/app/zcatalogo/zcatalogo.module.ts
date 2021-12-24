import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CatalogoRoutingModule } from './zcatalogo-routing.module';
import { GeneralModule } from '../general/general.module';

import { MastFilterComponent } from './master-filter/master-filter.component';
import { Mast2FilterComponent } from './master-filter2/master-filter2.component';
import { Mast3FilterComponent } from './master-filter3/master-filter3.component';
import { Mast4FilterComponent } from './master-filter4/master-filter4.component';

@NgModule({
  declarations: [
    MastFilterComponent,
    Mast2FilterComponent,
    Mast3FilterComponent,
    Mast4FilterComponent
 ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    GeneralModule
  ]
})
export class CatalogoModule { }