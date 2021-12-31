import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ClienteService } from "../cliente.service";
//import {NgForm} from '@angular/forms';
//import {HttpClient} from '@angular/common/http';
import { NgbNavChangeEvent } from "@ng-bootstrap/ng-bootstrap";
interface Catalogo {
  Catalogo_cve: number|string,
  desc_45: string
}

export class Domicilio {
  Id: string|number = null;
  TipoDom: string|number = null;
  Calle: string = null;
  NoEx: string = null;
  NoIn: string = null;
  CodPos: string|number = null;
  Colonia: string|number = null;
  Municipio: string|number = null;
  Estado: string|number = null;
  Pais: string|number = null;
}
@Component({
  selector: "app-mod-moral",
  templateUrl: "./mod-moral.component.html",
  styleUrls: ["./mod-moral.component.scss"],
})
export class ModMoralComponent implements OnInit {
  active = 1;
  active1 = "top";
  disabled = true;
  active3 = 3;
  active4 = 4;
  active5 = 5;
  active6 = 6;

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if ((changeEvent.nextId === 2, 3, 4, 5, 6)) {
      changeEvent.preventDefault();
    }
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      (this.active = 1), 2, 3, 4, 5, 6;
    }
  }

  tabs = [1, 2, 3, 4, 5, 6];
  counter = this.tabs.length + 1;
  active2;

  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter((id) => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }

  isCollapsed = false;
  isCollapsed2 = true;
  isCollapsed4 = false;
  isCollapsed5 = true;

  isCollapsed6 = true;
  isCollapsed7 = false;
  isCollapsed8 = true;

  //domicilio
  disabled1 = true;
  disabled2 = true;
  disabled3 = true;
  disabled4 = true;
  disabled5 = true;
  disabled6 = true;
  disabled7 = true;
  disabled8 = true;
  disabled9 = true;
  disabled10 = false;
  disabled11 = true;
  disabled12 = false;
  disabled13 = false;
  disabled14 = false;

  //telefonos
  isCollapsed1Tel = true;
  isCollapsed2Tel = true;
  isCollapsed3Tel = true;
  disabled1Tel = true;
  disabled2Tel = true;
  disabled3Tel = true;
  disabled4Tel = false;
  disabled5Tel = false;
  disabled6Tel = false;
  //Social
  isCollapsed1Red = true;
  isCollapsed2Red = true;
  isCollapsed3Red = true;
  disabled1Red = true;
  disabled2Red = true;
  disabled3Red = false;
  disabled4Red = false;
  disabled5Red = false;

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

  EstatusClienteA: string = "Prospecto";
  SucursalA: string = "";
  ClavePromotorA: string = "";
  RazonSocialA: string = "";

  //Catalogos array
  Tiprrc: Catalogo;
  Tiprpe: Catalogo;
  Tiprel: Catalogo;
  Tipred: Catalogo;
  Tipman: Catalogo;
  Tipgse: Catalogo;
  Tipdom: Catalogo;
  Tipded: Catalogo;
  Stscte: Catalogo;
  Sexo: Catalogo;
  Profes: Catalogo;
  Perjur: Catalogo;
  naCION: Catalogo;
  Identif: Catalogo;
  Edociv: Catalogo;
  CodId: Catalogo;
  Catpue: Catalogo;
  Bancos: Catalogo;
  Acteco: Catalogo;
  Actdet: Catalogo;
  //Fin Catalogos

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
    Consejero: null,
  };

  domMod: Domicilio = new Domicilio();
  dom: Domicilio = new Domicilio();

  proveedores = {
    Id: null,
    Consecutivo: null,
    NombreProvee: null,
    LimiteCreditoProvee: null,
    SaldoCuentaProvee: null,
  };

  bancarias = {
    Id: null,
    Consecutivo: null,
    InstitucionRefBan: null,
    AntiguedadRefBan: null,
    LimiteCreditoRefBan: null,
    SaldoCuentaRefBan: null,
  };

  personales = {
    Id: null,
    Consecutivo: null,
    NombreRefPer: null,
    TelefonoRefPer: null,
    TipoRelacionRefPer: null,
  };

  comerciales = {
    Id: null,
    Consecutivo: null,
    NombreRefCom: null,
    LimiteCreditoRefCom: null,
    SaldoCuentaRefCom: null,
  };

  economica = {
    Id: null,
    ActividadEconomica: null,
    ActividadDetallada: null,
    IngresoMensual: null,
    OtroIngresoMensual: null,
    GastosMensuales: null,
    FlujoEfectivo: null,
  };

  cuenta = {
    Id: null,
    Consecutivo: null,
    NombreBank: null,
    BancoCtaBan: null,
    NumBan: null,
    ClaveInter: null,
  };

  dom2 = {
    Id: null,
    TipoDom: null,
  };
  tel = {
    Id: 0,
    TipoTel: null,
    telefono: null,
    extencion: null,
  };
  red = {
    Id: 0,
    tipoRed: null,
    social: null,
  };

  Val = {
    Sucursal: null,
    PrimerNombre: null,
    SegundoNombre: null,
    ApellidoPaterno: null,
    ApellidoMaterno: null,
    RazonSocial: null,
    PersonalidadJuridica: "01",
    RFC: null,
  };

  retorno = {
    noCliente: null,
    errorClave: null,
    errorSp: null,
    errorDescripcion: null,
  };

  retorno2 = {
    errorClave: null,
    errorSp: null,
    errorDescripcion: null,
  };

  retornoID = {
    Sucursal: null,
    RazonSocial: null,
    ClavePromotor: null,
    EstatusCliente: null,
  };

  listado = {
    CodPos: null,
    Colonia: null,
    Municipio: null,
    Estado: null,
    Pais: null,
  };

  constructor(
    public toastr: ToastrService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.CatTipdom();
  }

  /**
   * Primera Validacion RFC
   */
  Validate() {
    this.clienteService.agregar9(this.Val).subscribe(
      (result) => (this.cliente = result),
      (datos) => { }
    );
  }

  /**
   * Guarda Datos Generales
   */
  General() {
    console.log(this.general);
    this.general.Id = 0;
    this.general.FechaAlta = '2021-12-29';
    this.general.FechaNacimiento = '1987-11-10';
    this.general.FechaConstitucion = "2010-11-10";

    this.clienteService.agregar(this.general).subscribe(
      (result: any) => {
        this.cliente = result;
        this.general.Id = result[0].noCliente;
      },
      (datos) => { }
    );
  }

  /**
   * Inserta domicilio
   */
  Domicilio() {
    this.dom.Id = this.general.Id;
    this.clienteService.agregar2(this.dom).subscribe(
      (result: any) => {
        this.clienteM = result;
        this.obtenerDomicilio();
      }
      //(datos) => { }
    );
  }

  DomicilioMod() {
    this.clienteService.agregar02(this.domMod).subscribe(
      (result) => (this.clienteMod = result),
      (datos) => { }
    );
  }

  Consultar(dom: any) {
    localStorage.setItem("Listado", JSON.stringify(dom)),
      (this.dom2 = JSON.parse(localStorage.getItem("Listado"))),
      this.clienteService.consultar(this.dom2).subscribe(
        (result) => (this.domcon = result),
        (datos) => { }
      ),
      (this.domborrar = null);
  }

  RertornoCon() {
    this.clienteService
      .retornoCon()
      .subscribe((result) => (this.domcon = result));
  }

  Retorno(retorno: any) {
    this.clienteService
      .retorno()
      .subscribe((result) => (this.cliente = result)),
      localStorage.setItem("ID", JSON.stringify(retorno));
  }

  Retorno2() {
    this.clienteService
      .retorno2()
      .subscribe((result) => (this.cliente = result));
  }

  Retorno3() {
    this.clienteService
      .retorno3()
      .subscribe((result) => (this.clienteM = result));
  }

  RetornoDomb() {
    this.clienteService
      .retornodomb()
      .subscribe((result) => (this.domborrar = result));
  }

  DomBorrar(dom: any) {
    localStorage.setItem("Listado", JSON.stringify(dom)),
      (this.dom2 = JSON.parse(localStorage.getItem("Listado"))),
      this.clienteService.domborrar(this.dom2).subscribe(
        (result) => (this.domborrar = result),
        (datos) => { }
      ),
      this.obtenerDomicilio(),
      (this.clienteM = null),
      (this.redclienb = null),
      (this.telclien = null);
  }

  Cuenta() {
    this.clienteService.agregar3(this.cuenta).subscribe((datos) => { });
  }

  Economica() {
    this.clienteService.agregar4(this.economica).subscribe((datos) => { });
  }

  Comerciales() {
    this.clienteService.agregar5(this.comerciales).subscribe((datos) => { });
  }

  Personales() {
    this.clienteService.agregar6(this.personales).subscribe((datos) => { });
  }

  Bancarias() {
    this.clienteService.agregar7(this.bancarias).subscribe((datos) => { });
  }

  Proveedores() {
    this.clienteService.agregar8(this.proveedores).subscribe((datos) => { });
  }

  RetornoTel() {
    this.clienteService
      .retornotel()
      .subscribe((result) => (this.telclien = result));
  }

  AgregarTel() {
    this.clienteService.agregartel(this.tel).subscribe(
      (result) => (this.telclien = result),
      (datos) => { }
    );
  }

  RetornoTelB() {
    this.clienteService
      .retornotelb()
      .subscribe((result) => (this.telclien = result));
  }

  BorrarTel() {
    this.clienteService.borrartel(this.tel).subscribe(
      (result) => (this.telclien = result),
      (datos) => { }
    );
    (this.domborrar = null), (this.redclienb = null);
  }

  RetornoRed() {
    this.clienteService
      .retornored()
      .subscribe((result) => (this.redclien = result));
  }

  AgregarRed() {
    this.clienteService.agregarred(this.red).subscribe(
      (result) => (this.redclien = result),
      (datos) => { }
    );
  }

  RetornoRedB() {
    this.clienteService
      .retornoredb()
      .subscribe((result) => (this.redclienb = result));
  }

  BorrarRed() {
    this.clienteService.borrarred(this.red).subscribe(
      (result) => (this.redclienb = result),
      (datos) => { }
    );
    (this.domborrar = null), (this.telclien = null);
  }

  CatTipdom() {
    this.clienteService
      .catTipdom()
      .subscribe((result) => (this.catalogo1 = result));
  }

  list() {
    this.router.navigate(["mto-fisica"], { relativeTo: this.route.parent });
  }

  open() {
    this.router.navigate(["list-clienteM"], { relativeTo: this.route.parent });
  }

  typeSuccess() {
    this.toastr.success("Finalizado con exito!!");
  }

  Cancelar() {
    this.router.navigate(["list-clienteM"], { relativeTo: this.route.parent });
  }

  Bloquear() {
    this.disabled1 = !this.disabled1;
    this.disabled2 = !this.disabled2;
    this.disabled3 = !this.disabled3;
    this.disabled4 = !this.disabled4;
    this.disabled5 = !this.disabled5;
    this.disabled6 = !this.disabled6;
    this.disabled7 = !this.disabled7;
    this.disabled8 = !this.disabled8;
    this.disabled9 = !this.disabled9;
    this.disabled10 = !this.disabled10;
    this.disabled11 = !this.disabled11;
    this.disabled14 = !this.disabled14;
    this.disabled13 = !this.disabled13;
    this.disabled12 = !this.disabled12;
    this.isCollapsed8 = !this.isCollapsed8;
  }

  BloqueRed() {
    this.disabled1Red = !this.disabled1Red;
    this.disabled2Red = !this.disabled2Red;
    this.isCollapsed1Red = !this.isCollapsed1Red;
    this.disabled3Red = !this.disabled3Red;
    this.disabled4Red = !this.disabled4Red;
    this.disabled5Red = !this.disabled5Red;
  }

  DesbloRed1() {
    this.disabled1Red = !this.disabled1Red;
    this.disabled2Red = !this.disabled2Red;
    this.isCollapsed1Red = !this.isCollapsed1Red;
    this.disabled3Red = !this.disabled3Red;
    this.disabled4Red = !this.disabled4Red;
    this.disabled5Red = !this.disabled5Red;
  }

  BloqueRedB() {
    this.disabled1Red = !this.disabled1Red;
    this.isCollapsed3Red = !this.isCollapsed3Red;
    this.disabled3Red = !this.disabled3Red;
    this.disabled4Red = !this.disabled4Red;
    this.disabled5Red = !this.disabled5Red;
  }

  DesbloRedB1() {
    this.disabled1Red = !this.disabled1Red;
    this.isCollapsed3Red = !this.isCollapsed3Red;
    this.disabled3Red = !this.disabled3Red;
    this.disabled4Red = !this.disabled4Red;
    this.disabled5Red = !this.disabled5Red;
  }

  BloqueTel() {
    this.disabled1Tel = !this.disabled1Tel;
    this.disabled2Tel = !this.disabled2Tel;
    this.disabled4Tel = !this.disabled4Tel;
    this.disabled3Tel = !this.disabled3Tel;
    this.disabled5Tel = !this.disabled5Tel;
    this.disabled6Tel = !this.disabled6Tel;
    this.isCollapsed1Tel = !this.isCollapsed1Tel;
  }

  DesbloTel1() {
    this.disabled1Tel = !this.disabled1Tel;
    this.disabled2Tel = !this.disabled2Tel;
    this.isCollapsed1Tel = !this.isCollapsed1Tel;
    this.disabled3Tel = !this.disabled3Tel;
    this.disabled4Tel = !this.disabled4Tel;
    this.disabled5Tel = !this.disabled5Tel;
    this.disabled6Tel = !this.disabled6Tel;
  }

  BloqueTelB() {
    this.disabled1Tel = !this.disabled1Tel;
    this.disabled4Tel = !this.disabled4Tel;
    this.disabled5Tel = !this.disabled5Tel;
    this.disabled6Tel = !this.disabled6Tel;
    this.isCollapsed3Tel = !this.isCollapsed3Tel;
  }

  DesbloTelB1() {
    this.disabled1Tel = !this.disabled1Tel;
    this.isCollapsed3Tel = !this.isCollapsed3Tel;
    this.disabled4Tel = !this.disabled4Tel;
    this.disabled5Tel = !this.disabled5Tel;
    this.disabled6Tel = !this.disabled6Tel;
  }

  MostrarDom() {
    this.clienteService.mostrardom().subscribe(
      (result: any) => (this.domicilio = result)
    );
  }
  //Codigo nuevo

  obtenerDomicilio() {
    this.clienteService.getDomicilio().subscribe(
      (result: any) => (this.domicilio = result)
    );
  }
}
