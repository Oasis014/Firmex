import { Component, ViewChild, OnInit  } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";

declare var require: any;
const data: any = require('../../shared/data/prospectoF.json');

@Component({
    selector: 'app-listclienteF',
    templateUrl: './list-clienteF.component.html',
    styleUrls: ['./list-clienteF.component.scss']
})

export class ListClienteFComponent  {
    Bandera = { ban: null }

    rows = [];
    selected: any[] = [];
    temp = [];

    // Table Column Titles
    columns = [
         { prop: 'id' },
         { prop: 'empresa' },
         { prop: 'cliente' },
         { prop: 'rfc' },
         { prop: 'empresa' },
         { prop: 'estatus' },
         { prop: 'sucursal' },
         { prop: 'no_sucursal' }
    ];
    @ViewChild(DatatableComponent , { static: true }) table: DatatableComponent;


    constructor(private router: Router,
                        private route: ActivatedRoute) {
        this.temp = [...data];
        this.rows = data;
    }

    doubleClicked(event){
                  this.router.navigate(['qry-cliente'], { relativeTo: this.route.parent });
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
Moral() {this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent }); }
open() { this.Bandera.ban = 2,localStorage.setItem( "bandera", this.Bandera.ban ); this.router.navigate(['mod-moral'], { relativeTo: this.route.parent }); }
    }
