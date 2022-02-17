import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Catalogos } from 'src/app/shared/models/catalogos';

@Component({
  selector: 'app-mod-moral',
  templateUrl: './mod-moral.component.html',
  styleUrls: ['./mod-moral.component.scss']
})

export class ModMoralComponent implements OnInit {

  @ViewChild('inputFile')
  myInputFile: ElementRef;

  constructor(
    public toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  active = 1;
  active1 = 'top';
  disabled = true;
  active3 = 3;
  active4 = 4;
  active5 = 5;
  active6 = 6;

  tabs = [1, 2, 3, 4, 5, 6];
  counter = this.tabs.length + 1;
  active2: any;
  ban: string = '';
  //Declaracion Var LocalStorage Domicilio.
  Id: string = '';
  Tipo: string = '';
  Calle: string = '';
  NoEx: string = '';
  NoIn: string = '';
  CodPos: string = '';
  Colonia: string = '';
  Municipio: string = '';
  Estado: string = '';
  Pais: string = '';

  //Declaracion Var General
  EstatusClienteA: string = 'Prospecto';
  SucursalA: string = '';
  ClavePromotorA: string = '';
  RazonSocialA: string = '';
  Contador: number = 0;

  // Objetos Ocultos Cliente
  isCollapsed = false;
  isCollapsed2 = true;
  isCollapsed4 = false;
  isCollapsed5 = true;
  isCollapsed6 = true;
  isCollapsed7 = false;
  isCollapsed8 = true;

  //Objetos Desabilitados Cliente
  disabledGen1 = false;
  disabledGen2 = false;
  disabledGen3 = false;
  disabledGen4 = false;
  disabledGen5 = false;
  disabledGen6 = false;
  disabledGen7 = false;
  disabledGen8 = false;
  disabledGen9 = false;
  disabledGen10 = false;
  disabledGen11 = false;
  disabledGen12 = false;
  disabledGen13 = false;
  disabledGen14 = false;
  disabledGen15 = true;
  disabledGen16 = true;
  disabledGen17 = false;
  disabledGen18 = false;
  disabledGen19 = false;
  disabledGen20 = false;
  disabledGen21 = false;
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
  isCollapsedPrueba2 = true;
  isCollapsedPrueba1 = true;

  //objetos any Service
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

  //Objetos any Catalogos
  ctActdet = null as any;
  ctActeco = null as any;
  ctBancos = null as any;
  ctCatpue = null as any;
  ctCodId = null as any;
  ctEdociv = null as any;
  ctIdentif = null as any;
  ctPerjur = null as any;
  ctProfes = null as any;
  ctStscte = null as any;
  ctTipded = null as any;
  ctTipdom = null as any;
  ctTipgse = null as any;
  ctTipman = null as any;
  ctTipred = null as any;
  ctTiprel = null as any;
  ctTiprpe = null as any;
  ctTiprrc = null as any;
  ctTiptel = null as any;
  ctnaCION = null as any;
  ctSexo = null as any;
  ctDocumentos: Catalogos[];

  //Arreglos de variables para obtener campos
  proveedores = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    NombreProvee: null,
    LimiteCreditoProvee: null,
    SaldoCuentaProvee: null
  }

  bancarias = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    InstitucionRefBan: null,
    AntiguedadRefBan: null,
    LimiteCreditoRefBan: null,
    SaldoCuentaRefBan: null
  }

  personales = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    NombreRefPer: null,
    TelefonoRefPer: null,
    TipoRelacionRefPer: null
  }

  comerciales = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    NombreRefCom: null,
    LimiteCreditoRefCom: null,
    SaldoCuentaRefCom: null
  }

  economica = {
    Id: localStorage.getItem("ID"),
    ActividadEconomica: null,
    ActividadDetallada: null,
    IngresoMensual: null,
    OtroIngresoMensual: null,
    GastosMensuales: null,
    FlujoEfectivo: null
  }

  cuenta = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    NombreBank: null,
    BancoCtaBan: null,
    NumBan: null,
    ClaveInter: null
  }

  domMod = {
    Id: localStorage.getItem("ID"), TipoDom: null,
    Calle: null, NoEx: null,
    NoIn: null, CodPos: null,
    Colonia: null, Municipio: null,
    Estado: null, Pais: null
  }

  dom = {
    Id: localStorage.getItem("ID"), TipoDom: null,
    Calle: null, NoEx: null,
    NoIn: null, CodPos: null,
    Colonia: null, Municipio: null,
    Estado: null, Pais: null
  }

  dom2 = {
    Id: localStorage.getItem("ID"), TipoDom: null
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
    TelefonoDomicilio: null,
    ExtensionDomicilio: null,
    TelefonoOficina: null,
    ExtensionOficina: null,
    Celular: null,
    RedSocial1: null,
    RedSocial2: null,
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
    PersonalidadJuridica: null,
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

  listadoDocumentos: Array<any>;
  archivo: any;
  tipoDocumento: number|string;

  ngOnInit() {
    this.ban = localStorage.getItem("bandera");
    if (this.ban == "1") {
      this.isCollapsedPrueba1 = !this.isCollapsedPrueba1;
    }

    if (this.ban == "2") {
      this.isCollapsedPrueba2 = !this.isCollapsedPrueba2;
    }
    this.CatDet();
    this.CatEco();
    this.CatBncs();
    this.CatPue();
    this.CodId();
    this.EdoCiv();
    this.Identif();
    this.Perjur();
    this.Profes();
    this.StsCte();
    this.Tipded();
    this.TipDom();
    this.Tipgse();
    this.Tipman();
    this.Tipred();
    this.TipRel();
    this.Tiprpe();
    this.Tiprrc();
    this.Tiptel();
    this.cnaCION();
    this.ctSx();
    this.catDocumentos();
    this.getDocumentos();
  }

  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter(id => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }

  DatosMuestra() {
    this.Contador++;
    if (this.Contador == 1) {
      this.isCollapsed5 = !this.isCollapsed5;
    }
  }

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

  Validate() {
    this.clienteService.agregar9(this.Val).subscribe(
      result => this.cliente = result, datos => { }
    );
  }

  Domicilio() {
    this.dom.Id = this.general.Id;
    this.clienteService.agregar2(this.dom).subscribe(
      (result: any) => {
        this.clienteM = result, this.domcon = null, this.domborrar = null, this.obtenerDomicilio();
      }
    );
  }

  DomicilioMod() {
    this.isCollapsed6 = !this.isCollapsed6;
    this.isCollapsed7 = !this.isCollapsed7;
    this.clienteService.agregar02(this.domMod).subscribe(
      (result: any) => {
        this.clienteM = result, this.domcon = null, this.domborrar = null, this.obtenerDomicilio();
      });
  }

  Consultar(dom: any) {
    localStorage.setItem("Tipo", dom.TipoDom),
    this.Tipo = localStorage.getItem("Tipo"),
    localStorage.setItem("Calle", dom.Calle),
    this.Calle = localStorage.getItem("Calle"),
    localStorage.setItem("NoEx", dom.NoEx),
    this.NoEx = localStorage.getItem("NoEx"),
    localStorage.setItem("NoIn", dom.NoIn),
    this.NoIn = localStorage.getItem("NoIn"),
    localStorage.setItem("CodPos", dom.CodPos),
    this.CodPos = localStorage.getItem("CodPos"),
    localStorage.setItem("Colonia", dom.Colonia),
    this.Colonia = localStorage.getItem("Colonia"),
    localStorage.setItem("Municipio", dom.Municipio),
    this.Municipio = localStorage.getItem("Municipio"),
    localStorage.setItem("Estado", dom.Estado),
    this.Estado = localStorage.getItem("Estado"),
    localStorage.setItem("Pais", dom.Pais),
    this.Pais = localStorage.getItem("Pais"),
    this.clienteService.consultar(this.dom2).subscribe(
      result => this.domcon = result, datos => { }
    );
  }

  RertornoCon() {
    this.clienteService.retornoCon().subscribe(result => this.domcon = result);
  }

  Retorno(retorno: any) {
    this.clienteService.retorno().subscribe(result => this.cliente = result), localStorage.setItem("ID", JSON.stringify(retorno));
  }

  Retorno2() {
    this.clienteService.retorno2().subscribe(result => this.cliente = result);
  }

  Retorno3() {
    this.clienteService.retorno3().subscribe(result => this.clienteM = result);
  }

  RetornoDomb() {
    this.clienteService.retornodomb().subscribe(result => this.domborrar = result);
  }

  DomBorrar(dom: any) {
    localStorage.setItem("Listado", JSON.stringify(dom)), this.dom2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.domborrar(this.dom2).subscribe(result => this.domborrar = result, datos => { }), this.obtenerDomicilio(), this.clienteM = null, this.domcon = null
  }

  General() {
    this.general.Id = 0;
    this.general.FechaAlta = '2021-12-29';
    this.general.FechaNacimiento = '1987-11-10';
    this.general.FechaConstitucion = "2010-11-10";

    this.clienteService.agregar(this.general).subscribe(
      (result: any) => {
        this.cliente = result;
        this.general.Id = result[0].noCliente;
        localStorage.setItem("ID", this.general.Id);
      }
    );
  }

  Cuenta() {
    this.clienteService.agregar3(this.cuenta).subscribe(datos => { });
  }

  Comerciales() {
    this.clienteService.agregar5(this.comerciales).subscribe(datos => { });
  }

  Personales() {
    this.clienteService.agregar6(this.personales).subscribe(datos => { });
  }

  Bancarias() {
    this.clienteService.agregar7(this.bancarias).subscribe(datos => { });
  }

  Proveedores() {
    this.clienteService.agregar8(this.proveedores).subscribe(datos => { });
  }

  CatTipdom() {
    this.clienteService.catTipdom().subscribe(result => this.catalogo1 = result);
  }

  list() {
    this.router.navigate(['mto-fisica'], { relativeTo: this.route.parent });
  }

  open() {
    this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent });
  }

  typeSuccess() {
    this.toastr.success('Finalizado con exito!!');
  }

  Cancelar() {
    this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent });
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

  Desabilitar() {
    this.disabledGen1 = !this.disabledGen1;
    this.disabledGen2 = !this.disabledGen2;
    this.disabledGen3 = !this.disabledGen3;
    this.disabledGen4 = !this.disabledGen4;
    this.disabledGen5 = !this.disabledGen5;
    this.disabledGen6 = !this.disabledGen6;
    this.disabledGen7 = !this.disabledGen7;
    this.disabledGen8 = !this.disabledGen8;
    this.disabledGen9 = !this.disabledGen9;
    this.disabledGen10 = !this.disabledGen10;
    this.disabledGen11 = !this.disabledGen11;
    this.disabledGen14 = !this.disabledGen14;
    this.disabledGen13 = !this.disabledGen13;
    this.disabledGen12 = !this.disabledGen12;
    this.disabledGen15 = !this.disabledGen15;
    this.disabledGen16 = !this.disabledGen16;
    this.disabledGen17 = !this.disabledGen17;
    this.disabledGen18 = !this.disabledGen18;
    this.disabledGen19 = !this.disabledGen19;
    this.disabledGen20 = !this.disabledGen20;
    this.disabledGen21 = !this.disabledGen21;
  }

  MostrarDom() {
    this.clienteService.mostrardom().subscribe(
      result => this.domicilio = result
    );
  }

  obtenerDomicilio() {
    this.clienteService.getDomicilio().subscribe(
      result => this.domicilio = result
    );
  }

  //Funcion para obtener registros catalogos
  CatDet() {
    this.clienteService.catActdet().subscribe(
      result => { this.ctActdet = result }
    );
  }

  CatEco() {
    this.clienteService.catActeco().subscribe(
      result => { this.ctActeco = result }
    );
  }

  CatBncs() {
    this.clienteService.catBancos().subscribe(
      result => { this.ctBancos = result }
    );
  }

  CatPue() {
    this.clienteService.catCatpue().subscribe(
      result => { this.ctCatpue = result }
    );
  }

  CodId() {
    this.clienteService.catCodId().subscribe(
      result => { this.ctCodId = result }
    );
  }

  EdoCiv() {
    this.clienteService.catEdociv().subscribe(
      result => { this.ctEdociv = result }
    );
  }

  Identif() {
    this.clienteService.catIdentif().subscribe(
      result => { this.ctIdentif = result }
    );
  }

  Perjur() {
    this.clienteService.catPerjur().subscribe(
      result => { this.ctPerjur = result }
    );
  }

  Profes() {
    this.clienteService.catProfes().subscribe(
      result => { this.ctProfes = result }
    );
  }

  ctSx() {
    this.clienteService.catSexo().subscribe(
      result => { this.ctSexo = result }
    );
  }

  StsCte() {
    this.clienteService.catStscte().subscribe(
      result => { this.ctStscte = result }
    );
  }

  Tipded() {
    this.clienteService.catTipded().subscribe(
      result => { this.ctTipded = result }
    );
  }

  TipDom() {
    this.clienteService.catTipdom().subscribe(
      result => { this.ctTipdom = result }
    );
  }

  Tipgse() {
    this.clienteService.catTipgse().subscribe(
      result => { this.ctTipgse = result }
    );
  }

  Tipman() {
    this.clienteService.catTipman().subscribe(
      result => { this.ctTipman = result }
    );
  }

  Tipred() {
    this.clienteService.catTipred().subscribe(
      result => { this.ctTipred = result }
    );
  }

  TipRel() {
    this.clienteService.catTiprel().subscribe(
      result => { this.ctTiprel = result }
    );
  }

  Tiprpe() {
    this.clienteService.catTiprpe().subscribe(
      result => { this.ctTiprpe = result }
    );
  }

  Tiprrc() {
    this.clienteService.catTiprrc().subscribe(
      result => { this.ctTiprrc = result }
    );
  }

  Tiptel() {
    this.clienteService.catTiptel().subscribe(
      result => { this.ctTiptel = result }
    );
  }

  cnaCION() {
    this.clienteService.catnaCION().subscribe(
      result => { this.ctnaCION = result }
    );
  }

  catDocumentos() {
    this.ctDocumentos = [
      {
        catalogo_cve: 1,
        desc_45: "Documento 1"
      }, {
        catalogo_cve: 2,
        desc_45: "Documento 2"
      }, {
        catalogo_cve: 3,
        desc_45: "Documento 3"
      }
    ];
    /*this.clienteService.catDocumentos().subscribe(
      (result: any) => {
        this.ctDocumentos = result;
      }
    );*/
  }

  getDocumentos() {
    this.clienteService.obtenerDocumentos(1).subscribe(
      (res: any) => {
        console.log(res);
        this.listadoDocumentos = res.data;
      }
    );
  }

  guardarDocumento() {
    let param = {
      userId: 1,
      idDoc: this.tipoDocumento,
      consDoc: 1
    };
    this.clienteService.guardarDocumento(this.archivo, param).subscribe(
      (res: any) => {
        console.log(res);
        this.myInputFile.nativeElement.value = '';
        this.getDocumentos();
      }, (error: any) => {
        console.log("ERROR:");
        console.log(error);
      }
    );
  }

  fileEvent(fileInput: Event) {
    this.archivo = (<HTMLInputElement>fileInput.target).files[0];
  }

}
