import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-qryclienteM',
  templateUrl: './qry-clienteM.component.html',
  styleUrls: ['./qry-clienteM.component.scss']
})
export class QryClienteMComponent implements OnInit {

  constructor(public router: Router,
                                                    public route: ActivatedRoute) { }

  ngOnInit() {
  }
ModM(router) {this.router.navigate(['mod-moral'], { relativeTo: this.route.parent }); }
}
