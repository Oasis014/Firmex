import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpClient, HttpEventType, HttpSentEvent } from "@angular/common/http";
import { Subscription } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-fileuploadtwo',
  templateUrl: './file-uploadtwo.component.html',
  styleUrls: ['./file-uploadtwo.component.scss']
})



/*
export class FileUploadTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

*/









export class FileUploadTwoComponent {

    fileName = '';

    constructor(private http: HttpClient) {}

    onFileSelected(event) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);

            const upload$ = this.http.post("/assets/upload/", formData);

            upload$.subscribe();
        }
    }
}












/*



export class FileUploadTwoComponent {

    @Input() requiredFileType:string;

    fileName = '';
    uploadProgress:number;
    uploadSub: Subscription;

    constructor(private http: HttpClient) {}

    onFileSelected(event) {
        const file:File = event.target.files[0];
      
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("thumbnail", file);

            const upload$ = this.http.post("/api/thumbnail-upload", formData, {
                reportProgress: true,
                observe: 'events'
            })
            .pipe(
                finalize(() => this.reset())
            );
          
            this.uploadSub = upload$.subscribe(event => {
              if (event.type == HttpEventType.UploadProgress) {
                //this.uploadProgress = Math.round(100 * (event.loaded / event.total));
                this.uploadProgress = 10;
              }
            })
        }
    }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}

*/