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

  ctActdet = null as any;
	ctActeco = null as any;
	ctBancos = null as any;
	ctCatpue = null as any;
	ctCodId = null as any;
	ctEdociv = null as any;
	ctIdentif = null as any;
	ctPerjur = null as any;
	ctProfes = null as any;
	ctStscte  = null as any;
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
  ctSucursal = null as any;
  ctPromotor = null as any;
  cPaises = null as any;
  cEstado = null as any;
  cMpio = null as any;
  cCP = null as any;
  cColonia = null as any;

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

  edoCte = {
    edoId: null,
    mpioId: null,
    codPosID:null
  }

  open() {
    this.router.navigate(['list-clienteF'], 
    { relativeTo: this.route.parent }); 
  }

  constructor(
    public toastr: ToastrService, private router: Router, 
    private route: ActivatedRoute, private clienteService: ClienteService) 
    { }

  Validate(){ 
    this.clienteService.agregar9(this.Val).subscribe(
      result => this.cliente = result, datos =>{  }); 
  }

  Domicilio(){ 
    this.clienteService.agregar2(this.dom).subscribe(
      result => this.cliente = result, datos =>{  }); 
  }

  Retorno(){ 
    this.clienteService.retorno().subscribe(
      result => this.cliente = result); 
  }

  Retorno2(){ 
    this.clienteService.retorno2().subscribe(
      result => this.cliente = result); 
  }

  General(){ 
    this.clienteService.agregar(this.general).subscribe(
      result => this.cliente = result, datos =>{  }); 
  }

  Cuenta(){ 
    this.clienteService.agregar3(this.cuenta).subscribe(
      datos =>{ }); 
  }

  Economica(){ 
    this.clienteService.agregar4(this.economica).subscribe(
      datos =>{ }); 
  }

  Comerciales(){ 
    this.clienteService.agregar5(this.comerciales).subscribe(
      datos =>{ }); 
  }

  Personales(){ 
    this.clienteService.agregar6(this.personales).subscribe(
      datos =>{ }); 
  }

  Bancarias(){ 
    this.clienteService.agregar7(this.bancarias).subscribe(
      datos =>{ }); 
  }

  Proveedores(){ 
    this.clienteService.agregar8(this.proveedores).subscribe(
    datos =>{ }); 
  }
  
  Telefonos(){}

  CatDet(){ 
    this.clienteService.catActdet().subscribe(
    result => {this.ctActdet = result});			
  }
          
  CatEco(){ 
    this.clienteService.catActeco().subscribe(
    result => {this.ctActeco = result});
  }
            
  CatBncs(){ 
    this.clienteService.catBancos().subscribe(
    result => {this.ctBancos = result});
  }
          
  CatPue(){ 
    this.clienteService.catCatpue().subscribe(
    result => {this.ctCatpue = result});
  }
          
  CodId(){ 
    this.clienteService.catCodId().subscribe(
    result => {this.ctCodId = result});
  }
      
  EdoCiv(){ 
    this.clienteService.catEdociv().subscribe(
    result => {this.ctEdociv = result});
  }
      
  Identif(){ 
    this.clienteService.catIdentif().subscribe(
    result => {this.ctIdentif = result});
  }
    
  Perjur(){ 
    this.clienteService.catPerjur().subscribe(
    result => {this.ctPerjur = result});
  }
      
  Profes(){ 
    this.clienteService.catProfes().subscribe(
    result => {this.ctProfes = result});
  }
          
  ctSx(){ 
    this.clienteService.catSexo().subscribe(
    result => {this.ctSexo = result});
  }
          
  StsCte(){ 
    this.clienteService.catStscte().subscribe(
    result => {this.ctStscte = result});
  }
          
  Tipded(){ 
    this.clienteService.catTipded().subscribe(
    result => {this.ctTipded = result});
  }
    
  TipDom(){ 
    this.clienteService.catTipdom().subscribe(
    result => {this.ctTipdom = result});
  }
    
  Tipgse(){ 
    this.clienteService.catTipgse().subscribe(
    result => {this.ctTipgse = result});
  }	
          
  Tipman(){ 
    this.clienteService.catTipman().subscribe(
    result =>{this.ctTipman = result});
  }
          
  Tipred(){ 
    this.clienteService.catTipred().subscribe(
    result =>{this.ctTipred = result});
  }
          
  TipRel(){ 
    this.clienteService.catTiprel().subscribe(
    result =>{this.ctTiprel = result});
  }
          
  Tiprpe(){ 
    this.clienteService.catTiprpe().subscribe(
    result =>{this.ctTiprpe = result});
  }
          
  Tiprrc(){ 
    this.clienteService.catTiprrc().subscribe(
    result =>{this.ctTiprrc = result});
  }
    
  Tiptel(){ 
    this.clienteService.catTiptel().subscribe(
    result =>{this.ctTiptel = result});
  }
      
  cnaCION(){ 
    this.clienteService.catnaCION().subscribe(
     result =>{this.ctnaCION = result});
  }

  cSucursal(){ 
    this.clienteService.catSucursales().subscribe(
     result =>{this.ctSucursal = result});
  }

  cPromotor(){ 
    this.clienteService.catPromotor().subscribe(
     result =>{this.ctPromotor = result});
  }

  cPais(){ 
    this.clienteService.catPaises().subscribe(
     result =>{this.cPaises = result});
  }

  cEdo(){ 
    this.clienteService.catEstado().subscribe(
     result =>{this.cEstado = result});
  }

  onChangeMunicipio(edoId: any) {    
    this.edoCte.edoId=edoId;
    this.clienteService.catMunicipio(this.edoCte).subscribe(
      result =>{this.cMpio = result});   
  }

  onChangeCodPostal(mpio: any) {
    this.edoCte.mpioId=mpio; 
    this.clienteService.catCP(this.edoCte).subscribe(
      result =>{this.cCP = result});
  }

  onChangeColonia(codPosID: any) {
    this.edoCte.codPosID=codPosID;    
    this.clienteService.catCol(this.edoCte).subscribe(
      result =>{this.cColonia = result});
  }

  ngOnInit() {
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
    this.cSucursal();
    this.cPromotor();
    this.cPais();
    this.cEdo();
    //this.cMun();
  }

  list() {
    this.router.navigate(['mto-fisica'], 
    { relativeTo: this.route.parent }); 
  }

  Cancelar() {
    this.router.navigate(['list-clienteF'], 
    { relativeTo: this.route.parent }); 
  }

  typeSuccess() {
    this.toastr.success('Modificado con Exito', 'Guardado');
  }

    actionMethod($event: MouseEvent) {
      ($event.target as HTMLButtonElement).disabled = true;
        // Do actions.
    }
}
