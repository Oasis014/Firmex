import { Component, ViewChild, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from '../cliente.service';
declare var require: any;
const data: any = require('../../shared/data/prospectoF.json');

@Component({
    selector: 'app-listclienteF',
    templateUrl: './list-clienteF.component.html',
    styleUrls: ['./list-clienteF.component.scss']
})

export class ListClienteFComponent  {
    Bandera = { ban: null }

    listado = null as any;
    //listado moral
    list = { NumeroCLiente: null, FechaNacimiento: null,
        Sexo: null, EstadoCivil: null,
        CURP: null, TipoIdentificacion: null,
        NumeroIdentificacion: null, ListaNegra: null,
        Profesion: null
    }
    
    
    obtenerListado() { this.clienteService.getListFisica().subscribe(result => this.listado = result);}
    ngOnInit() { this.obtenerListado(); }


    constructor(private router: Router,
                        private route: ActivatedRoute, private clienteService: ClienteService) {
        
    }

   
    onReadOnly() {

     }

    
    
Total() {this.router.navigate(['list-cliente'], { relativeTo: this.route.parent }); }
Moral() {this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent }); }
open() { this.Bandera.ban = 2,localStorage.setItem( "bandera", this.Bandera.ban ); this.router.navigate(['mod-moral'], { relativeTo: this.route.parent }); }
    }
