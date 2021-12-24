import { Component, ViewChild, OnInit  } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";

declare var require: any;
const data: any = require('../../shared/data/inmobiliaria.json');

@Component({
    selector: 'app-list-cobra',
    templateUrl: './list-cobra.component.html',
    styleUrls: ['./list-cobra.component.scss']
})

export class ListCobraComponent  {
    rows = [];
        selected: any[] = [];
        temp = [];

        // Table Column Titles
        columns = [
             { prop: 'id' },
             { prop: 'credito' },
             { prop: 'monto' },
             { prop: 'dispuesto' },
             { prop: 'disponible' },
             { prop: 'fecha' }
        ];
        @ViewChild(DatatableComponent , { static: true }) table: DatatableComponent;


        constructor(private router: Router,
                            private route: ActivatedRoute) {
            this.temp = [...data];
            this.rows = data;
        }

        doubleClicked(event){
                      this.router.navigate(['pago-cobra'], { relativeTo: this.route.parent });
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
                      Total() {this.router.navigate(['list-gara'], { relativeTo: this.route.parent }); }
                      Natural() {this.router.navigate(['list-natu'], { relativeTo: this.route.parent }); }
                      Prendaria() {this.router.navigate(['list-pren'], { relativeTo: this.route.parent }); }
                      Liquida() {this.router.navigate(['list-liqui'], { relativeTo: this.route.parent }); }
                      Personal() {this.router.navigate(['list-pers'], { relativeTo: this.route.parent }); }
                      Fomento() {this.router.navigate(['list-pers'], { relativeTo: this.route.parent }); }
                      Otras() {this.router.navigate(['list-otra'], { relativeTo: this.route.parent }); }

        }
