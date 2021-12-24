import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-mtocredi',
  templateUrl: './mto-credi.component.html',
  styleUrls: ['./mto-credi.component.scss']
})
export class MtoCrediComponent implements OnInit {

  constructor(public router: Router,
                                                    public route: ActivatedRoute) { }

  ngOnInit() {
  }
ModF(router) {this.router.navigate(['alta-inver'], { relativeTo: this.route.parent }); }
}
