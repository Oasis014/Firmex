import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FileRoutingModule } from './file-routing.module';

import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadTwoComponent } from './file-uploadtwo/file-uploadtwo.component';

@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadTwoComponent
 ],
  imports: [
    CommonModule,
    FileRoutingModule,
    NgbModule
  ]
})
export class FileModule { }