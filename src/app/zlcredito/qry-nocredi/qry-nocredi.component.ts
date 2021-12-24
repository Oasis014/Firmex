import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as Quill from 'quill';


@Component({
  selector: 'app-qry-nocredi',
  templateUrl: './qry-nocredi.component.html',
  styleUrls: ['./qry-nocredi.component.scss']
})
export class QryNocrediComponent implements OnInit {
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
 inver(router) {this.router.navigate(['alta-nocredi'], { relativeTo: this.route.parent }); }



}
