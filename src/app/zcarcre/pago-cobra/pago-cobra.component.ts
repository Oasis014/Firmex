import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';


@Component({
  selector: 'app-pago-cobra',
  templateUrl: './pago-cobra.component.html',
  styleUrls: ['./pago-cobra.component.scss']
})
export class PagoCobraComponent implements OnInit {
  ngOnInit() {
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '#toolbar-toolbar'
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }
}
