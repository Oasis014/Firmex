import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mod-moral',
  templateUrl: './mod-moral.component.html',
  styleUrls: ['./mod-moral.component.scss']
})
export class ModMoralComponent implements OnInit{

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

//Declaracion Var LocalStorage Domicilio.
Id: string = ''; Tipo: string = ''; Calle: string = ''; NoEx: string = ''; NoIn: string = ''; CodPos: string = ''; Colonia: string = ''; Municipio: string = ''; Estado: string = ''; Pais: string = '';
//Declaracion Var General
EstatusClienteA: string = 'Prospecto';
SucursalA: string = '';
ClavePromotorA: string = '';
RazonSocialA: string = '';
// Objetos Ocultos Cliente
public isCollapsed = false; public isCollapsed2 = true; public isCollapsed4 = false; public isCollapsed5 = true; public isCollapsed6 = true; public isCollapsed7 = false; public isCollapsed8 = true;
//Objetos Desabilitados Cliente
public disabled1 = true; public disabled2 = true; public disabled3 = true; public disabled4 = true; public disabled5 = true; public disabled6 = true; public disabled7 = true;
public disabled8 = true; public disabled9 = true; public disabled10 = false; public disabled11 = true; public disabled12 = false; public disabled13 = false; public disabled14 = false;
//objetos any Service
domicilio = null as any; catalogo = null as any; catalogo1 = null as any; cliente = null as any;
domborrar = null as any; clienteM = null as any; clienteMod = null as any; domcon = null as any;
telclien = null as any; telclienb = null as any; redclien = null as any; redclienb = null as any;

//Arreglos de variables para obtener campos
proveedores = {
        Id: null, Consecutivo: null,
        NombreProvee: null, LimiteCreditoProvee: null, SaldoCuentaProvee: null
}
bancarias = {
        Id: null, Consecutivo: null, InstitucionRefBan: null,
        AntiguedadRefBan: null, LimiteCreditoRefBan: null, SaldoCuentaRefBan: null
}
personales = {
        Id: null, Consecutivo: null,
        NombreRefPer: null, TelefonoRefPer: null, TipoRelacionRefPer: null
}
comerciales = {
        Id: null, Consecutivo: null, NombreRefCom: null,
        LimiteCreditoRefCom: null, SaldoCuentaRefCom: null
}
economica = {
        Id: null, ActividadEconomica: null,
        ActividadDetallada: null, IngresoMensual: null,
        OtroIngresoMensual: null, GastosMensuales: null, FlujoEfectivo: null
}
cuenta = {
        Id: null, Consecutivo: null,
        NombreBank: null, BancoCtaBan: null,
        NumBan: null, ClaveInter: null
}
domMod = { Id: null, TipoDom: null,
        Calle: null, NoEx: null,
        NoIn: null, CodPos: null,
        Colonia: null, Municipio: null,
        Estado: null, Pais: null
}
dom = { Id: null, TipoDom: null,
        Calle: null, NoEx: null,
        NoIn: null, CodPos: null,
        Colonia: null, Municipio: null,
        Estado: null, Pais: null
}
dom2 = { Id: null, TipoDom: null
}
general = { Id: null, Sucursal: null, ApellidoPaterno: null, ApellidoMaterno: null,
    PrimerNombre: null, SegundoNombre: null, RazonSocial: null,
    ClavePromotor: null, EstatusCliente: null, FechaAlta: null,
    PersonalidadJuridica: "0", RFC: null, Nacionalidad: null,
    EmailPersonal: null, EmailEmpresa: null, ParteRelacionada: null,
    GrupoConsejo: null, GrupoRiesgoComun: null, FechaNacimiento: null,
    Sexo: null, EstadoCivil: null, CURP: null, TipoIdentificacion: null,
    NumeroIdentificacion: null, ListaNegra: null, Profesion: null,
    NombreSociedad: null, FechaConstitucion: null, RepresentanteLegal: null,
    PresidenteConsejo: null, Consejero: null
  }
  Val = {
    Sucursal: null, PrimerNombre: null,
    SegundoNombre: null, ApellidoPaterno: null,
    ApellidoMaterno: null, RazonSocial: null,
    PersonalidadJuridica: "01", RFC: null
    }
  retorno = {
  noCliente: null, errorClave: null,
  errorSp: null, errorDescripcion: null
  }
  retorno2 = {
    errorClave: null, errorSp: null, errorDescripcion: null
    }
  retornoID = {
    Sucursal: null, RazonSocial: null, ClavePromotor: null, EstatusCliente: null
    }
  listado = { CodPos: null, Colonia: null,
        Municipio: null, Estado: null, Pais: null
        }

  constructor(public toastr: ToastrService, private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) { }

    Validate(){ this.clienteService.agregar9(this.Val).subscribe(result => this.cliente = result, datos =>{  }); }

    Domicilio(){ this.clienteService.agregar2(this.dom).subscribe(result => this.clienteM = result, datos =>{ }); }

    DomicilioMod(){ this.isCollapsed6 = !this.isCollapsed6; this.isCollapsed7 = !this.isCollapsed7; this.clienteService.agregar02(this.domMod).subscribe( datos =>{ }), this.clienteM = null }

    Consultar(dom: any){
    localStorage.setItem( "Tipo", dom.TipoDom ),this.Tipo = localStorage.getItem("Tipo"),
    localStorage.setItem( "Calle", dom.Calle ),this.Calle = localStorage.getItem("Calle"),
    localStorage.setItem( "NoEx", dom.NoEx ),this.NoEx = localStorage.getItem("NoEx"),
    localStorage.setItem( "NoIn", dom.NoIn ),this.NoIn = localStorage.getItem("NoIn"),
    localStorage.setItem( "CodPos", dom.CodPos ),this.CodPos = localStorage.getItem("CodPos"),
    localStorage.setItem( "Colonia", dom.Colonia ),this.Colonia = localStorage.getItem("Colonia"),
    localStorage.setItem( "Municipio", dom.Municipio ),this.Municipio = localStorage.getItem("Municipio"),
    localStorage.setItem( "Estado", dom.Estado ),this.Estado = localStorage.getItem("Estado"),
    localStorage.setItem( "Pais", dom.Pais ),this.Pais = localStorage.getItem("Pais"),
    this.clienteService.consultar(this.dom2).subscribe(result => this.domcon = result, datos =>{  }) }
    RertornoCon(){ this.clienteService.retornoCon().subscribe(result => this.domcon = result); }
    Retorno(retorno: any){ this.clienteService.retorno().subscribe(result => this.cliente = result), localStorage.setItem( "ID", JSON.stringify(retorno)); }
    Retorno2(){ this.clienteService.retorno2().subscribe(result => this.cliente = result); }
    Retorno3(){ this.clienteService.retorno3().subscribe(result => this.clienteM = result); }
    RetornoDomb(){ this.clienteService.retornodomb().subscribe(result => this.domborrar = result); }
    DomBorrar(dom: any){localStorage.setItem( "Listado", JSON.stringify(dom)), this.dom2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.domborrar(this.dom2).subscribe(result => this.domborrar = result, datos =>{ } ), this.obtenerDomicilio(), this.clienteM = null  }
    General(){this.clienteService.agregar(this.general).subscribe(result => this.cliente = result,  datos =>{ }); }
    Cuenta(){ this.clienteService.agregar3(this.cuenta).subscribe(datos =>{ }); }
    Economica(){ this.clienteService.agregar4(this.economica).subscribe(datos =>{ }); }
    Comerciales(){ this.clienteService.agregar5(this.comerciales).subscribe(datos =>{ }); }
    Personales(){ this.clienteService.agregar6(this.personales).subscribe(datos =>{ }); }
    Bancarias(){ this.clienteService.agregar7(this.bancarias).subscribe(datos =>{ }); }
    Proveedores(){ this.clienteService.agregar8(this.proveedores).subscribe(datos =>{ }); }
	CatTipdom(){this.clienteService.catTipdom().subscribe(result => this.catalogo1 = result);}
    ngOnInit() { this.CatTipdom();}
    list() {this.router.navigate(['mto-fisica'], { relativeTo: this.route.parent }); }
    open() {this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent }); }
    typeSuccess() { this.toastr.success('Finalizado con exito!!'); }
    Cancelar() {this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent }); }
    Bloquear(){ this.disabled1 = !this.disabled1; this.disabled2 = !this.disabled2; this.disabled3 = !this.disabled3; this.disabled4 = !this.disabled4; this.disabled5 = !this.disabled5; this.disabled6 = !this.disabled6; this.disabled7 = !this.disabled7; this.disabled8 = !this.disabled8; this.disabled9 = !this.disabled9; this.disabled10 = !this.disabled10; this.disabled11 = !this.disabled11; this.disabled14 = !this.disabled14; this.disabled13 = !this.disabled13; this.disabled12 = !this.disabled12; this.isCollapsed8 = !this.isCollapsed8;}
    MostrarDom() { this.clienteService.mostrardom().subscribe(result => this.domicilio = result); }
    obtenerDomicilio() { this.clienteService.getDomicilio().subscribe(result => this.domicilio = result);}

}


