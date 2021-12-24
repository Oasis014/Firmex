import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as Quill from 'quill';


@Component({
  selector: 'app-qryeje',
  templateUrl: './qry-eje.component.html',
  styleUrls: ['./qry-eje.component.scss']
})
export class QryEjeComponent implements OnInit {

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

Mod(router) {this.router.navigate(['mod-eje'], { relativeTo: this.route.parent }); }


}
