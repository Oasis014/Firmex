import { Component, ViewChild, OnInit  } from '@angular/core';
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
//Declaracion Var LocalStorage Economica.
NumeroCLiente: string = ''; NombreSociedad: string = ''; FechaConstitucion: string = ''; RepresentanteLegal: string = ''; PresidenteConsejo: string = ''; Consejero: string = ''; Secretario: string = ''; 

listado = null as any;
//listado moral
list = { NumeroCLiente: null, NombreSociedad: null,
    FechaConstitucion: null, RepresentanteLegal: null,
    PresidenteConsejo: null, Consejero: null,
    Secretario: null
}
obtenerListado() { this.clienteService.getListMoral().subscribe(result => this.listado = result);}
DetallePerfil(list: any){
    localStorage.setItem( "NumeroCLiente", list.NumeroCLiente ),this.NumeroCLiente = localStorage.getItem("NumeroCLiente"),
    localStorage.setItem( "NombreSociedad", list.NombreSociedad ),this.NombreSociedad = localStorage.getItem("NombreSociedad"),
    localStorage.setItem( "FechaConstitucion", list.FechaConstitucion ),this.FechaConstitucion = localStorage.getItem("FechaConstitucion"),
    localStorage.setItem( "RepresentanteLegal", list.RepresentanteLegal ),this.RepresentanteLegal = localStorage.getItem("RepresentanteLegal"),
    localStorage.setItem( "PresidenteConsejo", list.PresidenteConsejo ),this.PresidenteConsejo = localStorage.getItem("PresidenteConsejo"),
    localStorage.setItem( "Consejero", list.Consejero ),this.Consejero = localStorage.getItem("Consejero"),
    localStorage.setItem( "Secretario", list.Secretario ),this.Secretario = localStorage.getItem("Secretario"),
    this.clienteService.mostrarmoral(this.list).subscribe(result => this.listado = result, datos =>{  }) }
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
