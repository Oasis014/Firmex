import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as Quill from 'quill';


@Component({
  selector: 'app-qry-cobra',
  templateUrl: './qry-cobra.component.html',
  styleUrls: ['./qry-cobra.component.scss']
})
export class QryCobraComponent implements OnInit {
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
 inver(router) {this.router.navigate(['pago-cobra'], { relativeTo: this.route.parent }); }



}
