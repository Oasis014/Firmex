import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InversionRoutingModule } from './zlcredito-routing.module';
import { GeneralModule } from "../general/general.module";
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



@NgModule({
  declarations: [
       ListNorevComponent,
       ListRevolComponent,
       QryCrediComponent,
       ModCrediComponent,
       QryNocrediComponent


  ],
  imports: [
    CommonModule,
    InversionRoutingModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    GeneralModule
  ]
})
export class CreditoModule { }
