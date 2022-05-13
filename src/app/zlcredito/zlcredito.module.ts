import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { GeneralModule } from "../general/general.module";
import { CreditoRoutingModule } from './zlcredito-routing.module';
import { PipeClienteComponent } from './list-revol/filter-pipe';
import { ListCredilComponent } from './list-credil/list-credil.component';
import { ListCrediComponent } from './list-credi/list-credi.component';
import { ListRevolComponent } from './list-revol/list-revol.component';
import { ModCrediComponent } from './mod-credi/mod-credi.component';
import { ModLineCrediComponent } from './mod-linecredi/mod-linecredi.component';
import { CreditoService } from './services/credito.service';


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
    CreditoRoutingModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    GeneralModule,
    TextMaskModule
  ],
  providers: []
})
export class CreditoModule { }
