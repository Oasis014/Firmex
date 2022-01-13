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
domicilio = null as any;
dom = { Id: null, TipoDom: null,
        Calle: null, NoEx: null,
        NoIn: null, CodPos: null,
        Colonia: null, Municipio: null,
        Estado: null, Pais: null
}
obtenerDomicilio() { this.clienteService.getDomicilio().subscribe(result => this.domicilio = result);}
 ngOnInit() { this.obtenerDomicilio(); }
    rows = [];
    selected: any[] = [];
    temp = [];

    // Table Column Titles
    columns = [
         { prop: 'id' },
         { prop: 'empresa' },
         { prop: 'cliente' },
         { prop: 'rfc' },
         { prop: 'moral' },
         { prop: 'estatus' },
         { prop: 'sucursal' },
         { prop: 'no_sucursal' }
    ];
    @ViewChild(DatatableComponent , { static: true }) table: DatatableComponent;


    constructor(private router: Router,
                        private route: ActivatedRoute, private clienteService: ClienteService) {
        this.temp = [...data];
        this.rows = data;
    }

    doubleClicked(event){
                  this.router.navigate(['qry-clienteM'], { relativeTo: this.route.parent });
    }
    onReadOnly() {

     }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.cliente.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    //  On select of dataTable's data row
                onSelect(event) {
                 //your code here
                }

                //  On Activation of dataTable's data row
                onActivate(event) {
                  //your code here

                  }
Total() {this.router.navigate(['list-cliente'], { relativeTo: this.route.parent }); }
Fisica() {this.router.navigate(['list-clienteF'], { relativeTo: this.route.parent }); }
open() {this.router.navigate(['mod-moral'], { relativeTo: this.route.parent }); }
    }
