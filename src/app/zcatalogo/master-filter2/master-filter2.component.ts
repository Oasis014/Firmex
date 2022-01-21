import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";

var url2 = 'EstadoCivil.json';

declare var require: any;
const data: any = require('../../shared/data/EstadoCivil.json');

@Component({
    selector: 'app-master-filter2',
    templateUrl: './master-filter2.component.html',
    styleUrls: ['./master-filter2.component.scss']
})

export class Mast2FilterComponent {
    rows = [];
    selected: any[] = [];
    temp = [];

    // Table Column Titles
    columns = [
         { prop: 'ID' },
                 { prop: 'Descripcion' }
    ];
    @ViewChild(DatatableComponent , { static: true }) table: DatatableComponent;

    constructor(private router: Router,
                        private route: ActivatedRoute) {
        this.temp = [...data];
        this.rows = data;
    }
    Filt1() {this.router.navigate(['master-filter'], { relativeTo: this.route.parent }); }
    Filt2() {this.router.navigate(['master-filter2'], { relativeTo: this.route.parent }); }
    Filt3() {this.router.navigate(['master-filter3'], { relativeTo: this.route.parent }); }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.ID.toLowerCase().indexOf(val) !== -1 || !val;
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
    
