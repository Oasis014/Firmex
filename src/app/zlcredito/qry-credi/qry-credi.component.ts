import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as Quill from 'quill';


@Component({
  selector: 'app-qry-credi',
  templateUrl: './qry-credi.component.html',
  styleUrls: ['./qry-credi.component.scss']
})
export class QryCrediComponent implements OnInit {
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
 inver(router) {this.router.navigate(['mod-credi'], { relativeTo: this.route.parent }); }



}
