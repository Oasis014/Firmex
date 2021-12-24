import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";

declare var require: any;
const data: any = require('../../shared/data/revolvente.json');

@Component({
  selector: 'app-list-revol',
  templateUrl: './list-revol.component.html',
  styleUrls: ['./list-revol.component.scss']
})

export class ListRevolComponent {
    rows = [];
    selected: any[] = [];
    temp = [];

    // Table Column Titles
    columns = [
         { prop: 'id' },
         { prop: 'nombre' },
         { prop: 'tipo' },
         { prop: 'producto' },
         { prop: 'programa' },
         { prop: 'revolvente' }

    ];
    @ViewChild(DatatableComponent , { static: true }) table: DatatableComponent;


    constructor(private router: Router,
                        private route: ActivatedRoute) {
        this.temp = [...data];
        this.rows = data;
    }

    doubleClicked(event){
                  this.router.navigate(['qry-credi'], { relativeTo: this.route.parent });
    }
    onReadOnly() {
       this.router.navigate(['/zprospect/mto-accion'], { relativeTo: this.route.parent });
     }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.nombre.toLowerCase().indexOf(val) !== -1 || !val;
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
    }
