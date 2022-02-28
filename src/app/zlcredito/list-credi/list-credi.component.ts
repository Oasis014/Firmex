import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from '../cliente.service';
//import { PipeClienteComponent } from '../list-cliente/filter-pipe';


@Component({
  selector: 'app-list-credi',
  templateUrl: './list-credi.component.html',
  styleUrls: ['./list-credi.component.scss']
})

export class ListCrediComponent {
   //listado Credito
   list = [{ LineaCredito: null,        SolicitudLinea: null,      NumeroCliente: null,
    TipoSolicitud: null,       EstatusSolicitud: null,    DestinoCredito: null,
    OrigenRecursos: null,      MontoFrecuenciaDisposicion: null, FrecuenciaDisposicion: null,
    NumeroDisposiciones: null, MontoFrecuenciaPago: null, FrecuenciaPago: null,
    NumeroPagos: null,         Divisa: null,              MontoLineaCredito: null,
    FechaAlta: null }] as any;
   
    constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) { }

    obtenerListado() { this.clienteService.getListLineaCredito().subscribe(result => this.list = result);}

    ngOnInit() { this.obtenerListado(); }

                  open() {  this.router.navigate(['mod-credi'], { relativeTo: this.route.parent }); }
    }
    
