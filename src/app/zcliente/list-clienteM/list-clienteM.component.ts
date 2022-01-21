import { Component, ViewChild, OnInit  } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from '../cliente.service';

declare var require: any;
const data: any = require('../../shared/data/prospectoM.json');

@Component({
    selector: 'app-listclienteM',
    templateUrl: './list-clienteM.component.html',
    styleUrls: ['./list-clienteM.component.scss']
})

export class ListClienteMComponent  implements OnInit{
    Bandera = { ban: null }
listado = null as any;
list = { Id: null, NombreSociedad: null,
    FechaConstitucion: null, RepresentanteLegal: null,
    PresidenteConsejo: null, Consejero: null,
    Secretario: null
}
obtenerListado() { this.clienteService.getListMoral().subscribe(result => this.listado = result);}
 ngOnInit() { this.obtenerListado(); }
   
    @ViewChild(DatatableComponent , { static: true }) table: DatatableComponent;


    constructor(private router: Router,
                        private route: ActivatedRoute, private clienteService: ClienteService) {
        
    }

   
    onReadOnly() {

     }

Total() {this.router.navigate(['list-cliente'], { relativeTo: this.route.parent }); }
Fisica() {this.router.navigate(['list-clienteF'], { relativeTo: this.route.parent }); }
open() { this.Bandera.ban = 1,localStorage.setItem( "bandera", this.Bandera.ban ); this.router.navigate(['mod-moral'], { relativeTo: this.route.parent }); }
    }
