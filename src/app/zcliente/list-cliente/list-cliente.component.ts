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

   cliente = null as any;
   dato = {
       NumeroCLiente: null,
       Sucursal: null,
       ApellidoPaterno: null,
       ApellidoMaterno: null,
       PrimerNombre: null,
       SegundoNombre: null,
       RazonSocial: null,
       ClavePromotor: null,
       EstatusCliente: null,
       FechaAlta: null,
       PersonalidadJuridica: null,
       RFC: null,
       Nacionalidad: null,
       EmailPersonal: null,
       EmailEmpresa: null,
       ParteRelacionada: null,
       GrupoConsejo: null,
       GrupoRiesgoComun: null
    }

    rows = [];
    selected: any[] = [];
    temp = [];

    // Table Column Titles
    columns = [
         { prop: 'id' },
         { prop: 'empresa' },
         { prop: 'cliente' },
         { prop: 'rfc' },
         { prop: 'estatus' },
         { prop: 'credito' }


    ];
    @ViewChild(DatatableComponent , { static: true }) table: DatatableComponent;


    constructor(private router: Router,
                        private route: ActivatedRoute, private clienteService: ClienteService) {

    }
     ngOnInit() {
            this.MostrarTodos();
          }

     MostrarTodos() {
                    this.clienteService.mostrarTodos().subscribe(result => this.cliente = result);
                  }

    doubleClicked(event){
                  this.router.navigate(['qry-cliente'], { relativeTo: this.route.parent });
    }
    onReadOnly() {

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
Moral() {this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent }); }
Fisica() {this.router.navigate(['list-clienteF'], { relativeTo: this.route.parent }); }
php() {this.router.navigate(['php-prueba'], { relativeTo: this.route.parent }); }
php2() {this.router.navigate(['php-funciona'], { relativeTo: this.route.parent }); }
    }
