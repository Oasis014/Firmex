import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';


@Component({
  selector: 'app-mod-depo',
  templateUrl: './mod-depo.component.html',
  styleUrls: ['./mod-depo.component.scss']
})
export class ModDepoComponent implements OnInit {
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
