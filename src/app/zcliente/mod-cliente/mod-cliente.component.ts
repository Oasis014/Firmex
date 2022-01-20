import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mod-cliente',
  templateUrl: './mod-cliente.component.html',
  styleUrls: ['./mod-cliente.component.scss']
})
export class ModClienteComponent implements OnInit {
  public isCollapsedEco2 = true; public isCollapsedEco1 = true; 
 
public isCollapsed = false;
public isCollapsed2 = true;
public isCollapsed3 = false;
public isCollapsed4 = false;
cliente = null as any;

general = { Id: null, Sucursal: null, ApellidoPaterno: null, ApellidoMaterno: null,
  PrimerNombre: null, SegundoNombre: null, RazonSocial: null,
  ClavePromotor: null, EstatusCliente: null, FechaAlta: null,
  PersonalidadJuridica: "01", RFC: null, Nacionalidad: null,
  EmailPersonal: null, EmailEmpresa: null, TelefonoDomicilio: null, ExtensionDomicilio: null,
  TelefonoOficina: null, ExtensionOficina: null, Celular: null,
  RedSocial1: null, RedSocial2: null, ParteRelacionada: null,
  GrupoConsejo: null, GrupoRiesgoComun: null, FechaNacimiento: null,
  Sexo: null, EstadoCivil: null, CURP: null, TipoIdentificacion: null,
  NumeroIdentificacion: null, ListaNegra: null, Profesion: null,
  NombreSociedad: null, FechaConstitucion: null, RepresentanteLegal: null,
  PresidenteConsejo: null, Consejero: null
}

  Val = {
  Sucursal: null,
  PrimerNombre: null,
  SegundoNombre: null,
  ApellidoPaterno: null,
  ApellidoMaterno: null,
  RazonSocial: null,
  PersonalidadJuridica: "01",
  RFC: null
  }
  retorno = {
    noCliente: null,
    errorClave: null,
    errorSp: null,
    errorDescripcion: null
    }
  retorno2 = {
      errorClave: null,
      errorSp: null,
      errorDescripcion: null
      }

open() {this.router.navigate(['list-clienteF'], { relativeTo: this.route.parent }); }

  constructor(public toastr: ToastrService, private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) { }

   Validate(){ this.clienteService.agregar9(this.Val).subscribe(result => this.cliente = result, datos =>{  }); }


      Retorno(){ this.clienteService.retorno().subscribe(result => this.cliente = result); }

      Retorno2(){ this.clienteService.retorno2().subscribe(result => this.cliente = result); }

      General(){ this.clienteService.agregar(this.general).subscribe(result => this.cliente = result, datos =>{  }); }

  ngOnInit() {
  }
  list() {this.router.navigate(['mto-fisica'], { relativeTo: this.route.parent }); }
  Cancelar() {this.router.navigate(['list-clienteF'], { relativeTo: this.route.parent }); }
  typeSuccess() {
        this.toastr.success('Modificado con Exito', 'Guardado');
    }

}
