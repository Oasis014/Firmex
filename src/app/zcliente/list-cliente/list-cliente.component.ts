import { Component, ViewChild, OnInit  } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from '../cliente.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-list-cliente',
    templateUrl: './list-cliente.component.html',
    styleUrls: ['./list-cliente.component.scss']
})

export class ListClienteComponent  {

    listado = null as any;
    //listado moral
    list = { NumeroCLiente: null, Sucursal: null,
        PrimerNombre: null, ApellidoPaterno: null,
        RazonSocial: null, RFC: null,
        PersonalidadJuridica: null, EmailPersonal: null,
        Celular: null
    }
    
    
    obtenerListado() { this.clienteService.getListCliente().subscribe(result => this.listado = result);}
    ngOnInit() { this.obtenerListado(); }


    constructor(private router: Router,
                        private route: ActivatedRoute, private clienteService: ClienteService) {

    }
     

    

   

Moral() {this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent }); }
Fisica() {this.router.navigate(['list-clienteF'], { relativeTo: this.route.parent }); }

    }
