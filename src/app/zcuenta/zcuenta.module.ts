import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing.Module
import { CuentaRoutingModule } from './zcuenta-routing.module';
import { GeneralModule } from "../general/general.module";

// Listado
import { ListEjeComponent } from './list-eje/list-eje.component';
import { ListDepoComponent } from './list-depo/list-depo.component';
// Datos de la cuenta
import { QryEjeComponent } from './qry-eje/qry-eje.component';
// Alta cuenta eje
import { ModEjeComponent } from './mod-eje/mod-eje.component';
import { EjeOperComponent } from './mod-eje/eje-oper.component';
import { EjeAltaComponent } from './mod-eje/eje-alta.component';

// Datos depositos o retiros
import { QryDepoComponent } from './qry-depo/qry-depo.component';
// Depositos y Retiros
import { ModDepoComponent } from './mod-depo/mod-depo.component';


@NgModule({
  declarations: [
     ListEjeComponent,
     ListDepoComponent,
     QryEjeComponent,
     ModEjeComponent,
     EjeOperComponent,
     EjeAltaComponent,
     QryDepoComponent,
     ModDepoComponent

  ],
  imports: [
    CommonModule,
    CuentaRoutingModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    GeneralModule
  ]
})
export class CuentaModule { }
