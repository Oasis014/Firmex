import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarcreRoutingModule } from './zcarcre-routing.module';
import { GeneralModule } from '../general/general.module';
// Listados
import { ListCrediComponent } from './list-credi/list-credi.component';
import { ListCobraComponent } from './list-cobra/list-cobra.component';
// Datos Operación de Crédito
import { QryCobraComponent } from './qry-cobra/qry-cobra.component';
import { QryCrediComponent } from './qry-credi/qry-credi.component';
// Alta Operación de Crédito
import { PagoCobraComponent } from './pago-cobra/pago-cobra.component';
import { DispCrediComponent } from './disp-credi/disp-credi.component';


@NgModule({
  declarations: [

    PagoCobraComponent,
    DispCrediComponent,
    ListCobraComponent,
    ListCrediComponent,
    QryCobraComponent,
    QryCrediComponent

 ],
  imports: [
    CommonModule,
    CarcreRoutingModule,
    NgbModule,
        NgxDatatableModule,
    FormsModule,
        ReactiveFormsModule,
        NgbProgressbarModule,
        GeneralModule
  ]
})
export class CarcreModule { }
