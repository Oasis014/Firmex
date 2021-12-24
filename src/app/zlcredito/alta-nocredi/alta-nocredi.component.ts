import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as Quill from 'quill';


@Component({
  selector: 'app-alta-nocredi',
  templateUrl: './alta-nocredi.component.html',
  styleUrls: ['./alta-nocredi.component.scss']
})
export class AltaNoCrediComponent implements OnInit {
constructor(public router: Router,
                                                    public route: ActivatedRoute) { }
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
 inver(router) {this.router.navigate(['qry-nocredi'], { relativeTo: this.route.parent }); }



}
