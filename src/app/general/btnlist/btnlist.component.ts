import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-btnlist',
    templateUrl: './btnlist.component.html',
    styleUrls: ['./btnlist.component.scss']
})

export class BtnListComponent {
 constructor(private router: Router,
                        private route: ActivatedRoute){}

        ngOnInit() {

           }

           open() {
               this.router.navigate(['mto-prospect2'], { relativeTo: this.route.parent });
             }
}
