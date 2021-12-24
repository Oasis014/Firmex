import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as Quill from 'quill';


@Component({
  selector: 'app-qry-depo',
  templateUrl: './qry-depo.component.html',
  styleUrls: ['./qry-depo.component.scss']
})
export class QryDepoComponent implements OnInit {
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
 inver(router) {this.router.navigate(['depo-reti'], { relativeTo: this.route.parent }); }



}
