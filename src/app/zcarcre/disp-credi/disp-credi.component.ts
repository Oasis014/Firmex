import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';


@Component({
  selector: 'app-disp-credi',
  templateUrl: './disp-credi.component.html',
  styleUrls: ['./disp-credi.component.scss']
})
export class DispCrediComponent implements OnInit {
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
