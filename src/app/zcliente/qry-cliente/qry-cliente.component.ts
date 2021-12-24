import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as Quill from 'quill';


@Component({
  selector: 'app-qrycliente',
  templateUrl: './qry-cliente.component.html',
  styleUrls: ['./qry-cliente.component.scss']
})
export class QryClienteComponent implements OnInit {

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

ModC(router) {this.router.navigate(['mod-cliente'], { relativeTo: this.route.parent }); }


}
