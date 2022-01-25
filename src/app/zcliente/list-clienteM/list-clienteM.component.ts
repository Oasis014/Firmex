import { Component, ViewChild, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from '../cliente.service';
import { PipeClienteComponent } from '../list-cliente/filter-pipe';

@Component({
    selector: 'app-listclienteM',
    templateUrl: './list-clienteM.component.html',
    styleUrls: ['./list-clienteM.component.scss']
})

export class ListClienteMComponent  {
    Bandera = { ban: null }
    filterPost = '';
//listado moral
list = [{ NumeroCLiente: null, NombreSociedad: null,
    FechaConstitucion: null, RepresentanteLegal: null,
    PresidenteConsejo: null, Consejero: null,
    Secretario: null
}] as any;
obtenerListado() { this.clienteService.getListMoral().subscribe(result => this.list = result);}
 ngOnInit() { this.obtenerListado(); }
   
    


    constructor(private router: Router,
                        private route: ActivatedRoute, private clienteService: ClienteService) {
        
    }

   
    onReadOnly() {

     }

Total() {this.router.navigate(['list-cliente'], { relativeTo: this.route.parent }); }
Fisica() {this.router.navigate(['list-clienteF'], { relativeTo: this.route.parent }); }
open() { this.Bandera.ban = 1,localStorage.setItem( "bandera", this.Bandera.ban ); this.router.navigate(['mod-moral'], { relativeTo: this.route.parent }); }
    }
