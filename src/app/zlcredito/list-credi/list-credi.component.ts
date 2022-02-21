import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-list-credi',
  templateUrl: './list-credi.component.html',
  styleUrls: ['./list-credi.component.scss']
})

export class ListCrediComponent {
   
   
    constructor(private router: Router,
                        private route: ActivatedRoute) {
    }

  
    onReadOnly() {
       this.router.navigate(['/zprospect/mto-accion'], { relativeTo: this.route.parent });
     }


   

                  open() {  this.router.navigate(['mod-credi'], { relativeTo: this.route.parent }); }
    }
    
