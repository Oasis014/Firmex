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
 active = 1;
  active1 = 'top';
  disabled = true;
  active3 = 3;
  active4 = 4;
  active5 = 5;
  active6 = 6;


  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 2, 3, 4, 5, 6) {
      changeEvent.preventDefault();
    }
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.active = 1, 2, 3, 4, 5, 6;
    }
  }

  tabs = [1, 2, 3, 4, 5, 6];
  counter = this.tabs.length + 1;
  active2;

  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter(id => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }

public isCollapsed = false;
public isCollapsed2 = true;
public isCollapsed3 = false;
public isCollapsed4 = false;
cliente = null as any;
proveedores = {
        Id: null,
        Consecutivo: null,
        NombreProvee: null,
        LimiteCreditoProvee: null,
        SaldoCuentaProvee: null
}

bancarias = {
        Id: null,
        Consecutivo: null,
        InstitucionRefBan: null,
        AntiguedadRefBan: null,
        LimiteCreditoRefBan: null,
        SaldoCuentaRefBan: null
}

personales = {
        Id: null,
        Consecutivo: null,
        NombreRefPer: null,
        TelefonoRefPer: null,
        TipoRelacionRefPer: null
}

comerciales = {
        Id: null,
        Consecutivo: null,
        NombreRefCom: null,
        LimiteCreditoRefCom: null,
        SaldoCuentaRefCom: null
}

economica = {
        Id: null,
        ActividadEconomica: null,
        ActividadDetallada: null,
        IngresoMensual: null,
        OtroIngresoMensual: null,
        GastosMensuales: null,
        FlujoEfectivo: null
}

cuenta = {
        Id: null,
        Consecutivo: null,
        NombreBank: null,
        BancoCtaBan: null,
        NumBan: null,
        ClaveInter: null
}

dom = {
        Id: 4,
        Calle: null,
        NoEx: null,
        NoIn: null,
        CodPos: null,
        Colonia: null,
        Municipio: null,
        Estado: null,
        Pais: null,
        TipoDom: null
}

general = {
    Id: 0,
    Sucursal: null,
    ApellidoPaterno: null,
    ApellidoMaterno: null,
    PrimerNombre: null,
    SegundoNombre: null,
    RazonSocial: null,
    ClavePromotor: null,
    EstatusCliente: null,
    FechaAlta: null,
    PersonalidadJuridica: "01",
    RFC: null,
    Nacionalidad: null,
    EmailPersonal: null,
    EmailEmpresa: null,
    ParteRelacionada: null,
    GrupoConsejo: null,
    GrupoRiesgoComun: null,
    FechaNacimiento: null,
    Sexo: null,
    EstadoCivil: null,
    CURP: null,
    TipoIdentificacion: null,
    NumeroIdentificacion: null,
    ListaNegra: null,
    Profesion: null,
    NombreSociedad: null,
    FechaConstitucion: null,
    RepresentanteLegal: null,
    PresidenteConsejo: null,
    Consejero: null
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

   Domicilio(){ this.clienteService.agregar2(this.dom).subscribe(result => this.cliente = result, datos =>{  }); }

      Retorno(){ this.clienteService.retorno().subscribe(result => this.cliente = result); }

      Retorno2(){ this.clienteService.retorno2().subscribe(result => this.cliente = result); }

      General(){ this.clienteService.agregar(this.general).subscribe(result => this.cliente = result, datos =>{  }); }

      Cuenta(){ this.clienteService.agregar3(this.cuenta).subscribe(datos =>{ }); }

      Economica(){ this.clienteService.agregar4(this.economica).subscribe(datos =>{ }); }

      Comerciales(){ this.clienteService.agregar5(this.comerciales).subscribe(datos =>{ }); }

      Personales(){ this.clienteService.agregar6(this.personales).subscribe(datos =>{ }); }

      Bancarias(){ this.clienteService.agregar7(this.bancarias).subscribe(datos =>{ }); }

      Proveedores(){ this.clienteService.agregar8(this.proveedores).subscribe(datos =>{ }); }
      Telefonos(){}
  ngOnInit() {
  }
  list() {this.router.navigate(['mto-fisica'], { relativeTo: this.route.parent }); }
  Cancelar() {this.router.navigate(['list-clienteF'], { relativeTo: this.route.parent }); }
  typeSuccess() {
        this.toastr.success('Modificado con Exito', 'Guardado');
    }

    actionMethod($event: MouseEvent) {
        ($event.target as HTMLButtonElement).disabled = true;
        // Do actions.
    }
}
