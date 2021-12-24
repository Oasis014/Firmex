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



public isCollapsed = false;
public isCollapsed2 = true;
public isCollapsed4 = false;
public isCollapsed5 = true;

public isCollapsed6 = true;
public isCollapsed7 = false;
public isCollapsed8 = true;

//domicilio
public disabled1 = true;
public disabled2 = true;
public disabled3 = true;
public disabled4 = true;
public disabled5 = true;
public disabled6 = true;
public disabled7 = true;
public disabled8 = true;
public disabled9 = true;
public disabled10 = false;
public disabled11 = true;
public disabled12 = false;
public disabled13 = false;
public disabled14 = false;

//telefonos
public isCollapsed1Tel = true;
public isCollapsed2Tel = true;
public isCollapsed3Tel = true;
public disabled1Tel = true;
public disabled2Tel = true;
public disabled3Tel = true;
public disabled4Tel = false;
public disabled5Tel = false;
public disabled6Tel = false;
//Social
public isCollapsed1Red = true;
public isCollapsed2Red = true;
public isCollapsed3Red = true;
public disabled1Red = true;
public disabled2Red = true;
public disabled3Red = false;
public disabled4Red = false;
public disabled5Red = false;

domicilio = null as any;
catalogo = null as any;
catalogo1 = null as any;
cliente = null as any;
domborrar = null as any;
clienteM = null as any;
clienteMod = null as any;
domcon = null as any;
telclien = null as any;
telclienb = null as any;
redclien = null as any;
redclienb = null as any;

EstatusClienteA: string = 'Prospecto';
SucursalA: string = '';
ClavePromotorA: string = '';
RazonSocialA: string = '';

//Catalogos array
Tiprrc={
	Catalogo_cve: null,
	desc_45: null,
}

Tiprpe={
	Catalogo_cve: null,
	desc_45: null,
}
Tiprel={
	Catalogo_cve: null,
	desc_45: null,
}
Tipred={
	Catalogo_cve: null,
	desc_45: null,
}
Tipman={
	Catalogo_cve: null,
	desc_45: null,
}
Tipgse={
	Catalogo_cve: null,
	desc_45: null,
}

Tipdom={
	Catalogo_cve: null,
	desc_45: null
}

Tipded={
	Catalogo_cve: null,
	desc_45: null,
}

Stscte={
	Catalogo_cve: null,
	desc_45: null,
}
Sexo={
	Catalogo_cve: null,
	desc_45: null,
}

Profes={
	Catalogo_cve: null,
	desc_45: null,
}
Perjur={
	Catalogo_cve: null,
	desc_45: null,
}
naCION={
	Catalogo_cve: null,
	desc_45: null,
}
Identif={
	Catalogo_cve: null,
	desc_45: null,
}
Edociv={
	Catalogo_cve: null,
	desc_45: null,
}
CodId={
	Catalogo_cve: null,
	desc_45: null,
}
Catpue={
	Catalogo_cve: null,
	desc_45: null,
}

Bancos={
	Catalogo_cve: null,
	desc_45: null,
}
Acteco={
	Catalogo_cve: null,
	desc_45: null,
}
Actdet={
	Catalogo_cve: null,
	desc_45: null,
}
//Fin Catalogos

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
domMod = {
        Id: null,
        TipoDom: null,
        Calle: null,
        NoEx: null,
        NoIn: null,
        CodPos: null,
        Colonia: null,
        Municipio: null,
        Estado: null,
        Pais: null
}
dom = {
        Id: null,
        TipoDom: null,
        Calle: null,
        NoEx: null,
        NoIn: null,
        CodPos: null,
        Colonia: null,
        Municipio: null,
        Estado: null,
        Pais: null
}
dom2 = {
Id: null,
TipoDom: null
}
tel = {
Id: 0,
TipoTel: null,
telefono: null,
extencion: null
}
red = {
Id: 0,
tipoRed: null,
social: null
}

general = {
    Id: null,
    Sucursal: null,
    ApellidoPaterno: null,
    ApellidoMaterno: null,
    PrimerNombre: null,
    SegundoNombre: null,
    RazonSocial: null,
    ClavePromotor: null,
    EstatusCliente: null,
    FechaAlta: null,
    PersonalidadJuridica: "0",
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

  retornoID = {
    Sucursal: null,
    RazonSocial: null,
    ClavePromotor: null,
    EstatusCliente: null
    }

     listado = {
        CodPos: null,
        Colonia: null,
        Municipio: null,
        Estado: null,
        Pais: null
        }

  constructor(public toastr: ToastrService, private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) {
   }

    Validate(){ this.clienteService.agregar9(this.Val).subscribe(result => this.cliente = result, datos =>{  }); }

    Domicilio(){ this.clienteService.agregar2(this.dom).subscribe(result => this.clienteM = result, datos =>{ }), this.obtenerDomicilio(); }

    DomicilioMod(){ this.clienteService.agregar02(this.domMod).subscribe(result => this.clienteMod = result, datos =>{ }); }

    Consultar(dom: any){ localStorage.setItem( "Listado", JSON.stringify(dom)), this.dom2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.consultar(this.dom2).subscribe(result => this.domcon = result, datos =>{  }), this.domborrar = null }

    RertornoCon(){ this.clienteService.retornoCon().subscribe(result => this.domcon = result); }

    Retorno(retorno: any){ this.clienteService.retorno().subscribe(result => this.cliente = result), localStorage.setItem( "ID", JSON.stringify(retorno)); }

    Retorno2(){ this.clienteService.retorno2().subscribe(result => this.cliente = result); }

    Retorno3(){ this.clienteService.retorno3().subscribe(result => this.clienteM = result); }

    RetornoDomb(){ this.clienteService.retornodomb().subscribe(result => this.domborrar = result); }

    DomBorrar(dom: any){localStorage.setItem( "Listado", JSON.stringify(dom)), this.dom2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.domborrar(this.dom2).subscribe(result => this.domborrar = result, datos =>{ } ), this.obtenerDomicilio(), this.clienteM = null, this.redclienb = null,this.telclien = null  }

    General(){this.clienteService.agregar(this.general).subscribe(result => this.cliente = result,  datos =>{ }); }

    Cuenta(){ this.clienteService.agregar3(this.cuenta).subscribe(datos =>{ }); }

    Economica(){ this.clienteService.agregar4(this.economica).subscribe(datos =>{ }); }

    Comerciales(){ this.clienteService.agregar5(this.comerciales).subscribe(datos =>{ }); }

    Personales(){ this.clienteService.agregar6(this.personales).subscribe(datos =>{ }); }

    Bancarias(){ this.clienteService.agregar7(this.bancarias).subscribe(datos =>{ }); }

    Proveedores(){ this.clienteService.agregar8(this.proveedores).subscribe(datos =>{ }); }

     RetornoTel(){ this.clienteService.retornotel().subscribe(result => this.telclien = result); }

     AgregarTel(){ this.clienteService.agregartel(this.tel).subscribe(result => this.telclien = result, datos =>{  }); }

     RetornoTelB(){ this.clienteService.retornotelb().subscribe( result => this.telclien = result); }

     BorrarTel(){ this.clienteService.borrartel(this.tel).subscribe(result => this.telclien = result, datos =>{  });this.domborrar = null,this.redclienb = null }

     RetornoRed(){ this.clienteService.retornored().subscribe(result => this.redclien = result); }

     AgregarRed(){ this.clienteService.agregarred(this.red).subscribe(result => this.redclien = result, datos =>{  }); }

     RetornoRedB(){ this.clienteService.retornoredb().subscribe(result => this.redclienb = result); }

     BorrarRed(){ this.clienteService.borrarred(this.red).subscribe(result => this.redclienb = result, datos =>{  });this.domborrar = null,this.telclien = null }


	CatTipdom(){
		this.clienteService.catTipdom().subscribe(
			result => this.catalogo1 = result);
		}



    ngOnInit() {
		this.CatTipdom();
    }

    list() {this.router.navigate(['mto-fisica'], { relativeTo: this.route.parent }); }

    open() {this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent }); }

    typeSuccess() { this.toastr.success('Finalizado con exito!!'); }

    Cancelar() {this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent }); }

    Bloquear(){ this.disabled1 = !this.disabled1; this.disabled2 = !this.disabled2; this.disabled3 = !this.disabled3; this.disabled4 = !this.disabled4; this.disabled5 = !this.disabled5; this.disabled6 = !this.disabled6; this.disabled7 = !this.disabled7; this.disabled8 = !this.disabled8; this.disabled9 = !this.disabled9; this.disabled10 = !this.disabled10; this.disabled11 = !this.disabled11; this.disabled14 = !this.disabled14; this.disabled13 = !this.disabled13; this.disabled12 = !this.disabled12; this.isCollapsed8 = !this.isCollapsed8;}

    BloqueRed(){ this.disabled1Red = !this.disabled1Red; this.disabled2Red = !this.disabled2Red; this.isCollapsed1Red = !this.isCollapsed1Red; this.disabled3Red = !this.disabled3Red; this.disabled4Red = !this.disabled4Red; this.disabled5Red = !this.disabled5Red; }
    DesbloRed1(){ this.disabled1Red = !this.disabled1Red; this.disabled2Red = !this.disabled2Red; this.isCollapsed1Red = !this.isCollapsed1Red; this.disabled3Red = !this.disabled3Red; this.disabled4Red = !this.disabled4Red; this.disabled5Red = !this.disabled5Red; }
    BloqueRedB(){ this.disabled1Red = !this.disabled1Red; this.isCollapsed3Red = !this.isCollapsed3Red; this.disabled3Red = !this.disabled3Red; this.disabled4Red = !this.disabled4Red; this.disabled5Red = !this.disabled5Red; }
    DesbloRedB1(){ this.disabled1Red = !this.disabled1Red; this.isCollapsed3Red = !this.isCollapsed3Red; this.disabled3Red = !this.disabled3Red; this.disabled4Red = !this.disabled4Red; this.disabled5Red = !this.disabled5Red; }
    BloqueTel(){ this.disabled1Tel = !this.disabled1Tel; this.disabled2Tel = !this.disabled2Tel; this.disabled4Tel = !this.disabled4Tel; this.disabled3Tel = !this.disabled3Tel; this.disabled5Tel = !this.disabled5Tel; this.disabled6Tel = !this.disabled6Tel; this.isCollapsed1Tel = !this.isCollapsed1Tel; }
    DesbloTel1(){ this.disabled1Tel = !this.disabled1Tel; this.disabled2Tel = !this.disabled2Tel; this.isCollapsed1Tel = !this.isCollapsed1Tel; this.disabled3Tel = !this.disabled3Tel; this.disabled4Tel = !this.disabled4Tel; this.disabled5Tel = !this.disabled5Tel; this.disabled6Tel = !this.disabled6Tel; }
    BloqueTelB(){ this.disabled1Tel = !this.disabled1Tel; this.disabled4Tel = !this.disabled4Tel; this.disabled5Tel = !this.disabled5Tel; this.disabled6Tel = !this.disabled6Tel; this.isCollapsed3Tel = !this.isCollapsed3Tel; }
    DesbloTelB1(){ this.disabled1Tel = !this.disabled1Tel; this.isCollapsed3Tel = !this.isCollapsed3Tel; this.disabled4Tel = !this.disabled4Tel; this.disabled5Tel = !this.disabled5Tel; this.disabled6Tel = !this.disabled6Tel; }

     MostrarDom() {
                        this.clienteService.mostrardom().subscribe(result => this.domicilio = result);
                      }
//Codigo nuevo


obtenerDomicilio() { this.clienteService.getDomicilio().subscribe(result => this.domicilio = result);}

}


