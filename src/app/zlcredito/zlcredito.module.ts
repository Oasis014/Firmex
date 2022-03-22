import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InversionRoutingModule } from './zlcredito-routing.module';
import { GeneralModule } from "../general/general.module";
import { TextMaskModule } from 'angular2-text-mask';


// Listados
import { ListRevolComponent } from './list-revol/list-revol.component';
import { ListCrediComponent } from './list-credi/list-credi.component';
import { ListCredilComponent } from './list-credil/list-credil.component';
// Alta Revolvente
import { ModCrediComponent } from './mod-credi/mod-credi.component';
import { ModLineCrediComponent } from './mod-linecredi/mod-linecredi.component';
// Depositos o retiros
import { PipeClienteComponent } from './list-revol/filter-pipe';


@NgModule({
  declarations: [
    PipeClienteComponent,
    ListCredilComponent,
       ListCrediComponent,
       ListRevolComponent,
       ModCrediComponent,
       ModLineCrediComponent

  ],
  imports: [
    CommonModule,
    InversionRoutingModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    GeneralModule,
    TextMaskModule
  ]
})
export class CreditoModule { }
