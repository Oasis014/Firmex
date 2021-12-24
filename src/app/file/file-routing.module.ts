import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadTwoComponent } from './file-uploadtwo/file-uploadtwo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'file-upload',
        component: FileUploadComponent,
        data: {
          title: 'File Upload'
        }
      },
      {
        path: 'file-uploadtwo',
        component: FileUploadTwoComponent,
        data: {
          title: 'File Upload Two'
        }
      }, 
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }