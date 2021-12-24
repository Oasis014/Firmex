import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BtnListComponent } from './btnlist/btnlist.component';
import { BtnEditComponent } from './btnedit/btnedit.component';
import { BtnViewComponent } from './btnview/btnview.component';

@NgModule({
  exports: [
        BtnListComponent,
        BtnEditComponent,
        BtnViewComponent
  ],
  declarations: [
        BtnListComponent,
        BtnEditComponent,
        BtnViewComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule
  ]
})
export class GeneralModule { }
