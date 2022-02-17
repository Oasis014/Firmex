import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-list-revol',
  templateUrl: './list-revol.component.html',
  styleUrls: ['./list-revol.component.scss']
})

export class ListRevolComponent {
  filterPost = '';
  //listado moral
  list = [
      { 
      "NumeroCLiente": "", 
      "Sucursal": "",
      "PrimerNombre": "", 
      "ApellidoPaterno": "",
      "RazonSocial": "", 
      "RFC": "",
      "PersonalidadJuridica": "", 
      "EmailPersonal": "",
      "Celular": ""
  }] as any;
  
  
  
  obtenerListado() { this.clienteService.getListCliente().subscribe(result => this.list = result);}
  ngOnInit() { this.obtenerListado(); }


  constructor(private router: Router,
    private route: ActivatedRoute, private clienteService: ClienteService) {
    

}
   
    }
