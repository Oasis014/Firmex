import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";
import { CreditoService } from '../services/credito.service';
//import { PipeClienteComponent } from '../list-cliente/filter-pipe';

@Component({
  selector: 'app-list-credi',
  templateUrl: './list-credi.component.html',
  styleUrls: ['./list-credi.component.scss']
})
export class ListCrediComponent {

  list: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private creditoService: CreditoService
  ) { }

  ngOnInit() {
    this.obtenerListado();
  }

  obtenerListado() {
    this.creditoService.getListLineaCredito().subscribe(
      (result: any) => {
        this.list = result
      }
    );
  }

  open() {
    this.router.navigate(['mod-credi'], {
      relativeTo: this.route.parent
    });
  }
}
