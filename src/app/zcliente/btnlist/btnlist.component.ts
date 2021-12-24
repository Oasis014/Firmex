import { Component, OnInit, ViewChild, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";

declare var require: any;
const data: any = require('../../shared/data/prospectoV.json');

@Component({
    selector: 'app-btnlist2',
    templateUrl: './btnlist.component.html',
    styleUrls: ['./btnlist.component.scss']
})

export class BtnListComponent {
 rows = [];
     selected: any[] = [];
     temp = [];

     // Table Column Titles
     columns = [
          { prop: 'id' },
          { prop: 'nombre' },
          { prop: 'genero' },
          { prop: 'edad' },
          { prop: 'estado' },
          { prop: 'ciudad' }
     ];
     @ViewChild(DatatableComponent , { static: true }) table: DatatableComponent;


     constructor(public router: Router,
                         public route: ActivatedRoute) {
         this.temp = [...data];
         this.rows = data;
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

}
