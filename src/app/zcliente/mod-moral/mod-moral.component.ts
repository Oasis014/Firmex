import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Catalogos } from 'src/app/shared/models/catalogos';
import { DatosGenerales } from "src/app/shared/models/datosGenerales";
import { ResponseSP } from 'src/app/shared/models/responseSP';
import { Domicilio } from 'src/app/shared/models/domicilio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mod-moral',
  templateUrl: './mod-moral.component.html',
  styleUrls: ['./mod-moral.component.scss']
})

export class ModMoralComponent implements OnInit { // 717

  @ViewChild('inputFile')
  myInputFile: ElementRef;

  constructor(
    public readonly toastr: ToastrService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly clienteService: ClienteService,
    private readonly formBuilder: FormBuilder
  ) { }

  datosGeneralesForm: FormGroup;
  domicilioForm: FormGroup;
  actividadEconomicaForm: FormGroup;
  referenciasPersonalesForm: FormGroup;
  referenciasComercialesForm: FormGroup;
  referenciasBancariasForm: FormGroup;

  accionesForm: FormGroup;
  cuentasBancariasForm: FormGroup;
  partesRelacionadasForm: FormGroup;
  grupoSocioeconomicoForm: FormGroup;
  grupoRiesgoComunForm: FormGroup;

  disNextSection_1 = true;
  updateDomicilio = false;

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

  disBtnInsertActivEconom = false;
  disBtnInsertRefPer = false;
  disBtnInsertRefCom = false;
  disBtnInsertRefBan = false;

  disBtnInsertAcc = false;
  disBtnInsertCueBan = false;
  disBtnInsertParRel = false;
  disBtnInsertGruSoc = false;
  disBtnInsertGruRies = false;

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
  isCollapsed8 = true; // boton guardar en seccion "domicilio"

  //Objetos Desabilitados Cliente
  disBtnDatosGenerales = false;

  isCollapsedPrueba2 = true;
  isCollapsedPrueba1 = true;

  //objetos any Service
  domicilioList = [];
  actividadEconomicaList = [];
  referenciasPersonalesList = [];
  referenciasComercialesList = [];
  referenciasBancariasList = [];

  accionesList = [];
  cuentasBancariasList = [];
  partesRelacionadasList = [];
  grupoSocioeconomicoList = [];
  grupoRiesgoComunList = [];

  catalogo = null as any;
  catalogo1 = null as any;
  responseSP: ResponseSP[];
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
  /*proveedores = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    NombreProvee: null,
    LimiteCreditoProvee: null,
    SaldoCuentaProvee: null
  }*/

  /*bancarias = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    InstitucionRefBan: null,
    AntiguedadRefBan: null,
    LimiteCreditoRefBan: null,
    SaldoCuentaRefBan: null
  }*/

  /*personales = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    NombreRefPer: null,
    TelefonoRefPer: null,
    TipoRelacionRefPer: null
  }*/

  /*comerciales = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    NombreRefCom: null,
    LimiteCreditoRefCom: null,
    SaldoCuentaRefCom: null
  }*/

  /*economica = {
    Id: localStorage.getItem("ID"),
    ActividadEconomica: null,
    ActividadDetallada: null,
    IngresoMensual: null,
    OtroIngresoMensual: null,
    GastosMensuales: null,
    FlujoEfectivo: null
  }*/

  /*cuenta = {
    Id: localStorage.getItem("ID"),
    Consecutivo: null,
    NombreBank: null,
    BancoCtaBan: null,
    NumBan: null,
    ClaveInter: null
  }*/

  domMod = {
    Id: localStorage.getItem("ID"),
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

  dom = new Domicilio();

  general = new DatosGenerales();

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

    this.datosGeneralesForm = this.formBuilder.group({
      // campos primer formulario ( el de validar )
      numeroCliente:       [''],                                                    // Numero Cliente
      estatusCliente:      [''],                                                    // Estatus Cliente
      sucursal:            ['', [Validators.required, Validators.maxLength(5)]],    // Sucursal
      promotor:            ['', [Validators.required, Validators.maxLength(5)]],    // Promotor  // general.ClavePromotor
      razonSocial:         ['', [Validators.required, Validators.maxLength(120)]],  // Razon social  // general.RazonSocial
      fechaConstitucion:   ['', [Validators.required]],                             // fecha de constitucion  // general.FechaConstitucion
      rfc:                 ['', [Validators.required, Validators.maxLength(13)]],   // rfc  //general.RFC

      nombreSociedad:      ['', [Validators.required, Validators.maxLength(120)]],  // Nombre de la sociedad
      representanteLegal:  ['', [Validators.required, Validators.maxLength(120)]],  // Representante Legal
      presidenteConsejo:   ['', [Validators.required, Validators.maxLength(120)]],  // Presidente del consejo
      consejero:           ['', [Validators.required, Validators.maxLength(120)]],  // Consejero
      emailPersonal:       ['', [Validators.required, Validators.maxLength(80)]],   // Email Personal
      emailEmpresa:        ['', [Validators.required, Validators.maxLength(80)]],   // Email Empresa
      parteRelacionada:    ['', [Validators.required, Validators.maxLength(5)]],
      grupoVinculoConsejo: ['', [Validators.required, Validators.maxLength(10)]],   // Grupo de Vinculo al Consejo
      grupoRiesgoComun:    ['', [Validators.required, Validators.maxLength(5)]],    // Grupo de Riesgo Comun
      telefonoOficina:     ['', [Validators.maxLength(15)]],                        // Teléfono Oficina
      extensionOficina:    ['', [Validators.maxLength(10)]],                        // Extensión Oficina
      celular:             ['', [Validators.maxLength(15)]],                        // Celular
      redSocial1:          ['', [Validators.maxLength(50)]],                        // RedSocial 1
      redSocial2:          ['', [Validators.maxLength(50)]],                        // RedSocial 2
    });

    this.domicilioForm = this.formBuilder.group({
      tipoDom: ['', [Validators.required, Validators.maxLength(2)]],    /* IN `InTipoDomicilio` CHAR(2),  */
      calle: ['', [Validators.required, Validators.maxLength(80)]],      /* IN `InCalle` CHAR(80),  */
      noEx: ['', [Validators.required, Validators.maxLength(6)]],       /* IN `InNumeroExterior` CHAR(6),  */
      noIn: ['', [Validators.maxLength(6)]],       /* IN `InNumeroInterior` CHAR(6),  */
      codPos: ['', [Validators.required, Validators.maxLength(5)]],     /* IN `InCodigoPostal` CHAR(5),  */
      colonia: ['', [Validators.required, Validators.maxLength(100)]],    /* IN `InColonia` CHAR(100),  */
      municipio: ['', [Validators.required, Validators.maxLength(3)]],  /* IN `InMunicipio` CHAR(3),  */
      estado: ['', [Validators.required, Validators.maxLength(2)]],     /* IN `InEstado` CHAR(2),  */
      pais: ['', [Validators.required, Validators.maxLength(2)]],       /* IN `InPais` CHAR(2), */
    });
    this.domicilioForm.disable();

    this.actividadEconomicaForm = this.formBuilder.group({
      ActividadEconomica: ['', [Validators.required, Validators.maxLength(4)]],   // IN `InActividadEconomica` CHAR(4),
      ActividadDetallada: ['', [Validators.required, Validators.maxLength(5)]],   // IN `InActividadDetallada` CHAR(5),
      IngresoMensual: ['', [Validators.required, Validators.maxLength(15)]],       // IN `InIngresoMensual` DECIMAL(15,2),
      OtroIngresoMensual: ['', [Validators.required, Validators.maxLength(15)]],   // IN `InOtroIngresoMensual` DECIMAL(15,2),
      GastosMensuales: ['', [Validators.required, Validators.maxLength(15)]],      // IN `InGastosMensuales` DECIMAL(15,2),
      FlujoEfectivo: ['', [Validators.required, Validators.maxLength(15)]],        // IN `InFlujoEfectivo` DECIMAL(15,2),
    });
    this.actividadEconomicaForm.disable();

    this.referenciasPersonalesForm = this.formBuilder.group({
      NombreRefPer: ['', [Validators.required, Validators.maxLength(120)]],
      TipoRelacionRefPer: ['', [Validators.required, Validators.maxLength(2)]],
      TelefonoRefPer: ['', [Validators.required, Validators.maxLength(15)]],
    });
    this.referenciasPersonalesForm.disable();

    this.referenciasComercialesForm = this.formBuilder.group({
      NombreRefCom: ['', [Validators.required, Validators.maxLength(120)]],
      LimiteCreditoRefCom: ['', [Validators.required, Validators.maxLength(15)]],
      SaldoCuentaRefCom: ['', [Validators.required, Validators.maxLength(15)]],
    });
    this.referenciasComercialesForm.disable();

    this.referenciasBancariasForm = this.formBuilder.group({
      InstitucionRefBan: ['', [Validators.required, Validators.maxLength(120)]],   /* IN `InInstitucionRefBan` CHAR(120),  */
      SaldoCuentaRefBan: ['', [Validators.required, Validators.maxLength(15)]],    /* IN `InSaldoCuentaRefBan` DECIMAL(15,2), */
      LimiteCreditoRefBan: ['', [Validators.required, Validators.maxLength(15)]],  /* IN `InLimiteCreditoRefBan` DECIMAL(15,2),  */
      AntiguedadRefBan: ['', [Validators.required, Validators.maxLength(5)]],      /* IN `InAntiguedadRefBan` DECIMAL(5),  */
    });
    this.referenciasBancariasForm.disable();




    this.accionesForm = this.formBuilder.group({
      FechaCompra1aAccion: ['', [Validators.required, Validators.maxLength(10)]], // IN `InFechaCompra1aAccion` DATE,
      ParteInicialSocial: ['', [Validators.required, Validators.maxLength(15)]],  // IN `InParteInicialSocial` DECIMAL(15),
      FechaPago: ['', [Validators.required, Validators.maxLength(10)]],           // IN `InFechaPago` DATE,
      ParteSocialActual: ['', [Validators.required, Validators.maxLength(15)]],   // IN `InParteSocialActual` DECIMAL(15),
      CostoAcciones: ['', [Validators.required, Validators.maxLength(15)]],       // IN `InCostoAcciones` DECIMAL(15,2),
      FormaPagoAcciones: ['', [Validators.required, Validators.maxLength(50)]],   // IN `InFormaPagoAcciones` CHAR(50),
      RetirablesA: ['', [Validators.required, Validators.maxLength(15)]],         // IN `InRetirablesA` DECIMAL(15),
      RetirablesB: ['', [Validators.required, Validators.maxLength(15)]],         // IN `InRetirablesB` DECIMAL(15),
      TotalAcciones: ['', [Validators.required, Validators.maxLength(15)]],       // IN `InTotalAcciones` DECIMAL(15),
    });
    this.accionesForm.disable();

    this.cuentasBancariasForm = this.formBuilder.group({
      NombreCuentaBancariaCtaBan: ['', [Validators.required, Validators.maxLength(120)]],  // IN `InNombreCuentaBancariaCtaBan` CHAR(120),
      BancoCtaBan: ['', [Validators.required, Validators.maxLength(5)]],                 // IN `InBancoCtaBan` CHAR(5),
      NumeroCuentaCtaBan: ['', [Validators.required, Validators.maxLength(15)]],          // IN `InNumeroCuentaCtaBan` DECIMAL(15),
      ClaveInterbancariaCtaBan: ['', [Validators.required, Validators.maxLength(18)]],    // IN `InClaveInterbancariaCtaBan` DECIMAL(18),
    });
    this.cuentasBancariasForm.disable();

    this.partesRelacionadasForm = this.formBuilder.group({
      ParteRelacionadaParRel: ['', [Validators.required, Validators.maxLength(2)]],  // N `InParteRelacionadaParRel` CHAR(2),               
      NombreParRel: ['', [Validators.required, Validators.maxLength(120)]],            // IN `InNombreParRel` CHAR(120),     
      RFCParRel: ['', [Validators.required, Validators.maxLength(13)]],               // IN `InRFCParRel` CHAR(13),  
      DireccionParRel: ['', [Validators.required, Validators.maxLength(120)]],         // IN `InDireccionParRel` CHAR(120),              
    });
    this.partesRelacionadasForm.disable();

    this.grupoSocioeconomicoForm = this.formBuilder.group({
      GrupoSocioeconomicoGpoSoc: ['', [Validators.required, Validators.maxLength(2)]],  // IN `InGrupoSocioeconomicoGpoSoc` CHAR(2),
      NombreGpoSoc: ['', [Validators.required, Validators.maxLength(120)]],               // IN `InNombreGpoSoc` CHAR(120),
      RFCGpoSoc: ['', [Validators.required, Validators.maxLength(13)]],                  // IN `InRFCGpoSoc` CHAR(13),
      DireccionGpoSoc: ['', [Validators.required, Validators.maxLength(120)]],            // IN `InDireccionGpoSoc` CHAR(120),
    });
    this.grupoSocioeconomicoForm.disable();

    this.grupoRiesgoComunForm = this.formBuilder.group({
      GrupoRiesgoComunRgoCom: ['', [Validators.required, Validators.maxLength(2)]], // IN `InGrupoRiesgoComunRgoCom` CHAR(2),
      NombreRgoCom: ['', [Validators.required, Validators.maxLength(150)]],           // IN `InNombreRgoCom` CHAR(150),
      RFCRgoCom: ['', [Validators.required, Validators.maxLength(13)]],              // IN `InRFCRgoCom` CHAR(13),
      DireccionRgoCom: ['', [Validators.required, Validators.maxLength(150)]],        // IN `InDireccionRgoCom` CHAR(150),
    });
    this.grupoRiesgoComunForm.disable();


  }

  /**
   * METODOS DATOS GENERALES
   */
   validarDatosGenerales() {
    this.isCollapsed2 = !this.isCollapsed2;

    let values = this.datosGeneralesForm.value;
    this.general.setForm1(values)
    console.log(this.general)

    this.clienteService.agregar9(this.general).subscribe(
      (result: ResponseSP[]) => {
        this.responseSP = result;
      }
    );
  }

  guardaGeneral() {
    let values = this.datosGeneralesForm.value;
    this.general.setDatosGenerales(values)

    // TODO settear la fecha actual
    this.general.FechaAlta = '2021-12-29';
    // TODO poner una default, porque el sp la requiere
    this.general.FechaNacimiento = '1987-11-10';


    this.clienteService.agregar(this.general).subscribe(
      (result: ResponseSP[]) => {
        this.responseSP = result;
        this.general.setId(+result[0].noCliente)
        this.datosGeneralesForm.controls.numeroCliente.setValue(+result[0].noCliente);

        // REMOVE ya no se va a necesitar
        localStorage.setItem("ID", this.general.Id+'');

        this.typeSuccess();
        this.datosGeneralesForm.disable();
        this.disBtnDatosGenerales = true;
        this.disNextSection_1 = false;

      }
    );
  }

  cancelar() {
    this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent });
  }
  // FIN DATOS GENERALES


  /**
   * METODOS DOMICILIO
   **/
  consultarDomicilio(dom: any) {

    console.log(dom);
    let params = {
      userId: dom.numeroCliente,
      domId: dom.tipoDomicilio
    }
    this.clienteService.consultar(params).subscribe(
      (result: any) => {
        //this.domcon = result;
        //this.domicilioForm.setValue(result);
        console.log(result);

        this.domicilioForm.enable();
        this.updateDomicilio = true;


        //this.domicilioForm.controls.id.setValue(result.Id);
        this.domicilioForm.controls.tipoDom.setValue(result[0].tipoDomicilio);
        this.domicilioForm.controls.calle.setValue(result[0].calle);
        this.domicilioForm.controls.noEx.setValue(result[0].numeroExterior);
        this.domicilioForm.controls.noIn.setValue(result[0].numeroInterior);
        this.domicilioForm.controls.codPos.setValue(result[0].codigoPostal);
        this.domicilioForm.controls.colonia.setValue(result[0].colonia);
        this.domicilioForm.controls.municipio.setValue(result[0].municipio);
        this.domicilioForm.controls.estado.setValue(result[0].estado);
        this.domicilioForm.controls.pais.setValue(result[0].pais);

      }
    );
  }

  DomBorrar(dom: any) {
    localStorage.setItem("Listado", JSON.stringify(dom));

    let params = {
      userId: dom.numeroCliente,
      domId: dom.tipoDomicilio
    };

    this.clienteService.domborrar(params).subscribe(
      (result: any) => {
        console.log(result);
        this.domborrar = result;
        this.obtenerDomicilio();
      }
    );

    /*this.obtenerDomicilio();
    this.clienteM = null;
    this.domcon = null;*/
  }

  insertaDomicilio() {
    this.domicilioForm.enable();
    this.isCollapsed8 = false;
  }

  guardaDomicilio() {
    let values = this.domicilioForm.value;
    this.dom.setData(values);
    this.dom.setId(this.general.Id);

    this.clienteService.agregarDomicilio(this.dom).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.clienteM = result;
        this.domcon = null;
        this.domborrar = null;
        this.obtenerDomicilio();

        this.domicilioForm.reset();
        this.domicilioForm.disable();
        this.isCollapsed8 = true;
      }
    );
  }

  /* obtiene todos los domicilios de un cliente */
  obtenerDomicilio() {
    let params = {
      userId: this.general.Id
    };
    this.clienteService.getDomicilio(params).subscribe(
      (result: any) => {
        this.domicilioList = result;
      }
    );
  }

  // FIN DOMICILIO


  /********************
   * METODOS ACTIVIDAD Y REFERENCIA
   * ********************************/
  insertActividadEconomica() {
    this.actividadEconomicaForm.enable();
    this.disBtnInsertActivEconom = true;
  }

  guardarActividadEconomica() {
    let params = this.actividadEconomicaForm.value;
    params.Id  =this.general.Id;
    this.clienteService.agregar4(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;

        this.actividadEconomicaForm.reset();
        this.actividadEconomicaForm.disable();
        this.obtenerListadoActividadEconomica();
        this.disBtnInsertActivEconom = false;
    });
  }

  obtenerListadoActividadEconomica() {
    this.clienteService.getActiEco(this.general.Id).subscribe(
      (result: any) => {
        console.log(result);
        this.actividadEconomicaList = result
      });
  }

  // -------------------------------------------------------------------------

  insertaReferenciaPersonal() {
    this.referenciasPersonalesForm.enable();
    this.disBtnInsertRefPer = true;
  }

  guardaReferenciasPersonales() {
    let form = this.referenciasPersonalesForm.value;
    form.Id = this.general.Id;
    form.Consecutivo = this.referenciasPersonalesList.length + 1;

    this.clienteService.guardaReferenciaPersonal(form).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;

        this.referenciasPersonalesForm.reset();
        this.referenciasPersonalesForm.disable();
        this.obtenerReferenciasPersonales();
        this.disBtnInsertRefPer = false;
    });
  }

  obtenerReferenciasPersonales() {
    this.clienteService.getPersonales(this.general.Id).subscribe(
      (result: any) => {
        console.log(result);
        this.referenciasPersonalesList = result;
    });
  }

  // -------------------------------------------------------------------------

  insertaReferenciasComerciales() {
    this.referenciasComercialesForm.enable();
    this.disBtnInsertRefCom = true;
  }

  guardarReferenciasComerciales() {
    let form = this.referenciasComercialesForm.value;
    form.Id = this.general.Id;
    form.Consecutivo = this.referenciasComercialesList.length + 1;

    this.clienteService.guardaReferenciaComercial(form).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;

        this.referenciasComercialesForm.reset();
        this.referenciasComercialesForm.disable();
        this.obtenerReferenciasComerciales();
        this.disBtnInsertRefCom = false;
      });
  }

  obtenerReferenciasComerciales() {
    this.clienteService.getComerciales(this.general.Id).subscribe(
      (result: any) => {
        this.referenciasComercialesList = result;
    });
  }

  // -------------------------------------------------------------------------

  insertaReferenciasBancarias() {
    this.referenciasBancariasForm.enable();
    this.disBtnInsertRefBan = true;
  }

  guardarReferenciasBancarias() {
    let refBan = this.referenciasBancariasForm.value;
    refBan.Id = this.general.Id;
    refBan.Consecutivo = this.referenciasBancariasList.length + 1;

    this.clienteService.guardaReferenciaBancaria(refBan).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;

        this.referenciasBancariasForm.reset();
        this.referenciasBancariasForm.disable();
        this.obtenerReferenciasBancarias();
        this.disBtnInsertRefBan = false;
      });
  }

  obtenerReferenciasBancarias() {
    this.clienteService.getBancarias(this.general.Id).subscribe(
      (result: any) => {
        this.referenciasBancariasList = result;
      });
  }

  /* FIN ACTIVIDAD Y REFERENCIA*/

  /********************
   * METODOS CUENTAS BANCARIAS
   * ********************************/

   insertAcciones() {
    this.accionesForm.enable();
    this.disBtnInsertAcc = true;
   }

   guardarAcciones() {
     let form = this.accionesForm.value;
     form.NumeroCliente = this.general.Id;
     form.Consecutivo = this.accionesList.length + 1;

     this.clienteService.agregarAccion(form).subscribe(
      (result: any) => {
        console.log(result)
        this.responseSP = result;

        this.accionesForm.reset();
        this.accionesForm.disable();
        this.obtenerAcciones();
        this.disBtnInsertAcc = false;
      });
  }

  obtenerAcciones() {
    this.clienteService.getAcciones(this.general.Id).subscribe(
      (result: any) => {
        this.accionesList = result;
    });
  }

  // -------------------------------------------------------------------------

  insertCuentasBancarias() {
    this.cuentasBancariasForm.enable();
    this.disBtnInsertCueBan = true;
  }

  guardarCuentasBancarias() {
    let form = this.cuentasBancariasForm.value;
    form.NumeroCliente = this.general.Id;
    form.Consecutivo = this.cuentasBancariasList.length + 1;

    this.clienteService.agregarCuentaBancaria(form).subscribe(
      (result: any) => {
        this.responseSP = result;

        this.cuentasBancariasForm.reset();
        this.cuentasBancariasForm.disable();
        this.obtenerCuentasBancarias();
        this.disBtnInsertAcc = false;
    });
  }

  obtenerCuentasBancarias() {
    this.clienteService.getCuenta(this.general.Id).subscribe(
      (result: any) => {
        this.cuentasBancariasList = result;
      });
  }


  // -------------------------------------------------------------------------

  insertPartesRelacionadas() {
    this.partesRelacionadasForm.enable();
    this.disBtnInsertParRel = true;
  }

  guardarPartesRelacionadas() {
    let form = this.partesRelacionadasForm.value;
    form.NumeroCliente = this.general.Id;
    form.Consecutivo = this.partesRelacionadasList.length + 1;

    this.clienteService.agregarParteRelacionada(form).subscribe(
      (result: any) => {
        this.responseSP = result;

        this.partesRelacionadasForm.reset();
        this.partesRelacionadasForm.disable();
        this.obtenerPartesRelacionadas();
        this.disBtnInsertParRel = false;
    });
  }

  obtenerPartesRelacionadas() {
    this.clienteService.getRelacional(this.general.Id).subscribe(
      (result: any) => {
        console.log(result);
        this.partesRelacionadasList = result;
    });
  }


  // -------------------------------------------------------------------------

  insertGrupoSocioeconomico() {
    this.grupoSocioeconomicoForm.enable();
    this.disBtnInsertGruSoc = true;
  }

  SocioEco() {
    let form = this.grupoSocioeconomicoForm.value;
    form.NumeroCliente = this.general.Id;
    form.Consecutivo = this.grupoSocioeconomicoList.length + 1;

    this.clienteService.agregarGrupoSocioeconomico(form).subscribe(
      (result: ResponseSP[]) => {
        this.responseSP = result;

        this.grupoSocioeconomicoForm.reset();
        this.grupoSocioeconomicoForm.disable();
        this.obtenerSocioEco();
        this.disBtnInsertGruSoc = false;

      }
    );
  }

  obtenerSocioEco() {
    this.clienteService.getSocioEco(this.general.Id).subscribe(
      (result: any) => {
        this.grupoSocioeconomicoList = result;
    });
  }


  // -------------------------------------------------------------------------

  insertRiesgoComun() {
    this.grupoRiesgoComunForm.enable();
    this.disBtnInsertGruRies = true;
  }

  guardarRiesgoComun() {
    let form = this.grupoRiesgoComunForm.value;
    form.Id = this.general.Id;

    this.clienteService.agregarGrupoRiesgoComun(form).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;

        this.grupoRiesgoComunForm.reset();
        this.grupoRiesgoComunForm.disable();
        this.obtenerRiesgoComun();
        this.disBtnInsertGruRies = false;

    });
  }

  obtenerRiesgoComun() {
    this.clienteService.getRiesgoComun(this.general.Id).subscribe(
      (result: any) => {
        this.grupoRiesgoComunList = result;
    });
  }



  /* FIN CUENTAS BANCARIAS*/




  /** METODOS DOCUMENTOS */
  getDocumentos() {
    this.clienteService.obtenerDocumentos(1).subscribe(
      (res: {data: Array<any>, status: string, message: string}) => {
        this.listadoDocumentos = res.data;
      }
    );
  }

  guardarDocumento() {
    let param = {
      userId: 1,
      idDoc: this.tipoDocumento,
    };
    this.clienteService.guardarDocumento(this.archivo, param).subscribe(
      (res: any) => {
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
  // FIN METODOS DOCUMENTOS





















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

  /*DomicilioMod() {
    this.isCollapsed6 = !this.isCollapsed6;
    this.isCollapsed7 = !this.isCollapsed7;
    this.clienteService.agregar02(this.domMod).subscribe(
      (result: any) => {
        this.clienteM = result, this.domcon = null, this.domborrar = null, this.obtenerDomicilio();
      });
  }*/

  /*RertornoCon() {
    this.clienteService.retornoCon().subscribe(result => this.domcon = result);
  }*/

  /*Retorno(retorno: any) {
    this.clienteService.retorno().subscribe(result => this.responseSP = result), localStorage.setItem("ID", JSON.stringify(retorno));
  }

  Retorno2() {
    this.clienteService.retorno2().subscribe(result => this.responseSP = result);
  }

  Retorno3() {
    this.clienteService.retorno3().subscribe(result => this.clienteM = result);
  }*/

  /*
  RetornoDomb() {
    this.clienteService.retornodomb().subscribe(result => this.domborrar = result);
  }
  */



  /*
  Cuenta() {
    this.clienteService.agregar3(this.cuenta).subscribe(datos => { });
  }
  */

  /*Comerciales() {
    this.clienteService.agregar5(this.comerciales).subscribe(datos => { });
  }*/

  /*Personales() {
    this.clienteService.agregar6(this.personales).subscribe(datos => { });
  }*/

  /*Bancarias() {
    this.clienteService.agregar7(this.bancarias).subscribe(datos => { });
  }*/

  /*Proveedores() {
    this.clienteService.agregar8(this.proveedores).subscribe(datos => { });
  }*/

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
    this.clienteService.catDocumentos().subscribe(
      (result: {data: Array<any>, status: string, message: string}) => {
        this.ctDocumentos = result.data;
      }
    );
  }

}
