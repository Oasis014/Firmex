import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-mtonocredi',
  templateUrl: './mto-nocredi.component.html',
  styleUrls: ['./mto-nocredi.component.scss']
})
export class MtoNocrediComponent implements OnInit {

  constructor(public router: Router,
                                                    public route: ActivatedRoute) { }

  ngOnInit() {
  }
ModF(router) {this.router.navigate(['mto-fisica'], { relativeTo: this.route.parent }); }
}
