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
import { environment } from 'src/environments/environment';

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
  datosGeneralesFisicaForm: FormGroup;

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

  disBtnDatosGeneralesMoral = false;
  disBtnDatosGeneralesFisica = false;

  domicilioBtnText = 'Guardar';

  // Objetos Ocultos Cliente
  isCollapsed = false;
  isCollapsed2 = true;
  isCollapsed4 = false;
  isCollapsed5 = true;
  isCollapsed6 = true;
  isCollapsed7 = false;
  isCollapsed8 = true; // boton guardar en seccion "domicilio"
  showEspecificosMoral = false;
  showEspecificosFisica = false;
  showBtnValidar = true;

  showMoral = true;
  showFisica = false;

  infoGeneral = {
    sucursal: '',
    promotor: '',
    estatus: '',
    razonSocial: ''
  };

  isPatchLocation = false;
  locationToUpdate: Domicilio;
  readyMun = false;
  readyCol = false;
  readyCp = false;

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

  domicilio = new Domicilio();
  general = new DatosGenerales();

  catalogo = null as any;
  catalogo1 = null as any;
  responseSP: ResponseSP[];
  //domborrar = null as any;
  clienteM = null as any;
  clienteMod = null as any;
  domcon = null as any;
  telclien = null as any;
  telclienb = null as any;
  redclien = null as any;
  redclienb = null as any;

  //Objetos any Catalogos
  ctActdet: Catalogos[];
  ctActeco: Catalogos[];
  ctBancos: Catalogos[];
  ctCatpue: Catalogos[];
  ctCodId: Catalogos[];
  ctEdociv: Catalogos[];
  ctIdentif: Catalogos[];
  ctPerjur: Catalogos[];
  ctProfes: Catalogos[];
  ctStscte: Catalogos[];
  ctTipded: Catalogos[];
  ctTipdom: Catalogos[];
  ctTipgse: Catalogos[];
  ctTipman: Catalogos[];
  ctTipred: Catalogos[];
  ctTiprel: Catalogos[];
  ctTiprpe: Catalogos[];
  ctTiprrc: Catalogos[];
  ctTiptel: Catalogos[];
  ctnaCION: Catalogos[];
  ctSexo: Catalogos[];
  ctDocumentos: Catalogos[];

  ctSucursal = null as any;
  ctPromotor = null as any;
  cPaises = null as any;
  cEstado = null as any;
  cMpio = null as any;
  cCP = null as any;
  cColonia = null as any;

  listadoDocumentos: Array<any>;
  archivo: any;
  tipoDocumento: number|string;

  ngOnInit() {
    this.ban = localStorage.getItem("bandera");

    if (this.ban == "1") {
      this.general.setMoral();
      this.showMoral = true;
      this.showFisica = false;

      this.datosGeneralesForm = this.formBuilder.group({
        numeroCliente:       ['0'],
        estatusCliente:      ['Prospecto'],
        sucursal:            ['', [Validators.required, Validators.maxLength(5)]],
        promotor:            ['', [Validators.required, Validators.maxLength(5)]],
        razonSocial:         ['', [Validators.required, Validators.maxLength(120)]],
        fechaConstitucion:   ['', [Validators.required]],
        rfc:                 ['', [Validators.required, Validators.maxLength(13)]],

        nombreSociedad:      ['', [Validators.required, Validators.maxLength(120)]],
        representanteLegal:  ['', [Validators.required, Validators.maxLength(120)]],
        presidenteConsejo:   ['', [Validators.required, Validators.maxLength(120)]],
        consejero:           ['', [Validators.required, Validators.maxLength(120)]],
        emailPersonal:       ['', [Validators.required, Validators.maxLength(80)]],
        emailEmpresa:        ['', [Validators.required, Validators.maxLength(80)]],
        parteRelacionada:    ['', [Validators.required, Validators.maxLength(5)]],
        grupoVinculoConsejo: ['', [Validators.required, Validators.maxLength(10)]],
        grupoRiesgoComun:    ['', [Validators.required, Validators.maxLength(5)]],
        telefonoOficina:     ['', [Validators.maxLength(15)]],
        extensionOficina:    ['', [Validators.maxLength(10)]],
        celular:             ['', [Validators.maxLength(15)]],
        redSocial1:          ['', [Validators.maxLength(50)]],
        redSocial2:          ['', [Validators.maxLength(50)]],
      });
    }

    if (this.ban == "2") {
      this.general.setFisica();
      this.showMoral = false;
      this.showFisica = true;

      this.datosGeneralesFisicaForm = this.formBuilder.group({
        numeroCliente:   ['0'],
        estatusCliente:  ['Prospecto'],
        sucursal:        ['', [Validators.required, Validators.maxLength(5)]],
        primerNombre:    ['', [Validators.required, Validators.maxLength(30)]], // 30
        segundoNombre:   ['', [Validators.required, Validators.maxLength(30)]], // 30
        apellidoPaterno: ['', [Validators.required, Validators.maxLength(30)]],
        apellidoMaterno: ['', [Validators.required, Validators.maxLength(30)]],
        promotor:        ['', [Validators.required, Validators.maxLength(5)]],
        fechaNacimiento: ['', [Validators.required, Validators.maxLength(10)]],
        rfc:             ['', [Validators.required, Validators.maxLength(13)]],

        sexo:                 ['', [Validators.required, Validators.maxLength(1)]],
        estadoCivil:          ['', [Validators.required, Validators.maxLength(2)]],
        curp:                 ['', [Validators.required, Validators.maxLength(18)]],
        tipoIdentificacion:   ['', [Validators.required, Validators.maxLength(2)]],
        numeroIdentificacion: ['', [Validators.required, Validators.maxLength(20)]],
        listaNegra:           ['', [Validators.required, Validators.maxLength(30)]],
        profesion:            ['', [Validators.required, Validators.maxLength(2)]],
        nacionalidad:         ['', [Validators.required, Validators.maxLength(2)]],
        emailPersonal:        ['', [Validators.required, Validators.maxLength(80)]],
        emailEmpresa:         ['', [Validators.required, Validators.maxLength(80)]],
        parteRelacionada:     ['', [Validators.required, Validators.maxLength(5)]],
        grupoVinculoConsejo:  ['', [Validators.required, Validators.maxLength(10)]],
        grupoRiesgoComun:     ['', [Validators.required, Validators.maxLength(5)]],
      });
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
    this.cPromotor();
    this.cSucursal();
    this.cEdo();

    this.domicilioForm = this.formBuilder.group({
      TipoDomicilio:  ['', [Validators.required, Validators.maxLength(2)]],
      Calle:          ['', [Validators.required, Validators.maxLength(80)]],
      NumeroExterior: ['', [Validators.required, Validators.maxLength(6)]],
      NumeroInterior: ['', [Validators.maxLength(6)]],
      CodigoPostal:   ['', [Validators.required, Validators.maxLength(5)]],
      Colonia:        ['', [Validators.required, Validators.maxLength(100)]],
      Municipio:      ['', [Validators.required, Validators.maxLength(3)]],
      Estado:         ['', [Validators.required, Validators.maxLength(2)]],
      Pais:           ['', [Validators.required, Validators.maxLength(2)]],
    });
    this.domicilioForm.disable();

    this.actividadEconomicaForm = this.formBuilder.group({
      ActividadEconomica: ['', [Validators.required, Validators.maxLength(4)]],
      ActividadDetallada: ['', [Validators.required, Validators.maxLength(5)]],
      IngresoMensual:     ['', [Validators.required, Validators.maxLength(15)]],
      OtroIngresoMensual: ['', [Validators.required, Validators.maxLength(15)]],
      GastosMensuales:    ['', [Validators.required, Validators.maxLength(15)]],
      FlujoEfectivo:      ['', [Validators.required, Validators.maxLength(15)]],
    });
    this.actividadEconomicaForm.disable();

    this.referenciasPersonalesForm = this.formBuilder.group({
      NombreRefPer:       ['', [Validators.required, Validators.maxLength(120)]],
      TipoRelacionRefPer: ['', [Validators.required, Validators.maxLength(2)]],
      TelefonoRefPer:     ['', [Validators.required, Validators.maxLength(15)]],
    });
    this.referenciasPersonalesForm.disable();

    this.referenciasComercialesForm = this.formBuilder.group({
      NombreRefCom:        ['', [Validators.required, Validators.maxLength(120)]],
      LimiteCreditoRefCom: ['', [Validators.required, Validators.maxLength(15)]],
      SaldoCuentaRefCom:   ['', [Validators.required, Validators.maxLength(15)]],
    });
    this.referenciasComercialesForm.disable();

    this.referenciasBancariasForm = this.formBuilder.group({
      InstitucionRefBan:   ['', [Validators.required, Validators.maxLength(120)]],
      SaldoCuentaRefBan:   ['', [Validators.required, Validators.maxLength(15)]],
      LimiteCreditoRefBan: ['', [Validators.required, Validators.maxLength(15)]],
      AntiguedadRefBan:    ['', [Validators.required, Validators.maxLength(5)]],
    });
    this.referenciasBancariasForm.disable();

    this.accionesForm = this.formBuilder.group({
      FechaCompra1aAccion: ['', [Validators.required, Validators.maxLength(10)]],
      ParteInicialSocial:  ['', [Validators.required, Validators.maxLength(15)]],
      FechaPago:           ['', [Validators.required, Validators.maxLength(10)]],
      ParteSocialActual:   ['', [Validators.required, Validators.maxLength(15)]],
      CostoAcciones:       ['', [Validators.required, Validators.maxLength(15)]],
      FormaPagoAcciones:   ['', [Validators.required, Validators.maxLength(50)]],
      RetirablesA:         ['', [Validators.required, Validators.maxLength(15)]],
      RetirablesB:         ['', [Validators.required, Validators.maxLength(15)]],
      TotalAcciones:       ['', [Validators.required, Validators.maxLength(15)]],
    });
    this.accionesForm.disable();

    this.cuentasBancariasForm = this.formBuilder.group({
      NombreCuentaBancariaCtaBan: ['', [Validators.required, Validators.maxLength(120)]],
      BancoCtaBan:                ['', [Validators.required, Validators.maxLength(5)]],
      NumeroCuentaCtaBan:         ['', [Validators.required, Validators.maxLength(15)]],
      ClaveInterbancariaCtaBan:   ['', [Validators.required, Validators.maxLength(18)]],
    });
    this.cuentasBancariasForm.disable();

    this.partesRelacionadasForm = this.formBuilder.group({
      ParteRelacionadaParRel: ['', [Validators.required, Validators.maxLength(2)]],
      NombreParRel:           ['', [Validators.required, Validators.maxLength(120)]],
      RFCParRel:              ['', [Validators.required, Validators.maxLength(13)]],
      DireccionParRel:        ['', [Validators.required, Validators.maxLength(120)]],
    });
    this.partesRelacionadasForm.disable();

    this.grupoSocioeconomicoForm = this.formBuilder.group({
      GrupoSocioeconomicoGpoSoc: ['', [Validators.required, Validators.maxLength(2)]],
      NombreGpoSoc:              ['', [Validators.required, Validators.maxLength(120)]],
      RFCGpoSoc:                 ['', [Validators.required, Validators.maxLength(13)]],
      DireccionGpoSoc:           ['', [Validators.required, Validators.maxLength(120)]],
    });
    this.grupoSocioeconomicoForm.disable();

    this.grupoRiesgoComunForm = this.formBuilder.group({
      GrupoRiesgoComunRgoCom: ['', [Validators.required, Validators.maxLength(2)]],
      NombreRgoCom:           ['', [Validators.required, Validators.maxLength(150)]],
      RFCRgoCom:              ['', [Validators.required, Validators.maxLength(13)]],
      DireccionRgoCom:        ['', [Validators.required, Validators.maxLength(150)]],
    });
    this.grupoRiesgoComunForm.disable();


    this.onChanges();

  }

  onChanges(): void {

    this.domicilioForm.get('Estado').valueChanges.subscribe(id => {
      if ( id != null && id != '' && this.isPatchLocation == false ) {
        console.log(id);
        this.cColonia = [];
        this.cCP = [];
        this.clienteService.catMunicipio(id).subscribe(
          (result: any) => {
            this.cMpio = result;
        });
      }
    });

    this.domicilioForm.get('Municipio').valueChanges.subscribe(id => {
      if ( id != null && id != '' && this.isPatchLocation == false ) {
        console.log(id);
        this.cCP = [];
        this.clienteService.catCol(this.domicilioForm.controls.Estado.value, id).subscribe(
          (result: any) => {
            this.cColonia = result;
        });
      }
    });

    this.domicilioForm.get('Colonia').valueChanges.subscribe(val => {
      if ( val != null && val != '' && this.isPatchLocation == false ) {
        console.log(val);
        this.clienteService.catCP(
          this.domicilioForm.controls.Estado.value,
          this.domicilioForm.controls.Municipio.value
        ).subscribe(
          (result: any) => {
            this.cCP = result;
        });
      }
    });

  }

  loadLocationLists() {
    this.clienteService.catMunicipio(this.locationToUpdate.Estado).subscribe(
      (result: any) => {
        this.cMpio = result;

        if ( this.isPatchLocation == true ) {
          this.readyMun = true;
          this.fullLoad();
        }
    });

    this.clienteService.catCol(this.locationToUpdate.Estado, this.locationToUpdate.Municipio).subscribe(
      (result: any) => {
        this.cColonia = result;

        if ( this.isPatchLocation == true ) {
          this.readyCol = true;
          this.fullLoad();
        }
    });

    this.clienteService.catCP(this.locationToUpdate.Estado, this.locationToUpdate.Municipio).subscribe(
      (result: any) => {
        this.cCP = result;

        if ( this.isPatchLocation == true ) {
          this.readyCp = true;
          this.fullLoad();
        }
    });

  }

  fullLoad() {
    if ( this.readyMun && this.readyCol && this.readyCp ) {
      this.domicilioForm.controls.Estado.setValue(this.locationToUpdate.Estado);
      this.domicilioForm.controls.Municipio.setValue(this.locationToUpdate.Municipio);
      this.domicilioForm.controls.Colonia.setValue(this.locationToUpdate.Colonia);
      this.domicilioForm.controls.CodigoPostal.setValue(this.locationToUpdate.CodigoPostal);

      this.isPatchLocation = false;
      this.readyMun = false;
      this.readyCol = false;
      this.readyCp = false;
    }

  }


  /**
   * METODOS DATOS GENERALES
   */
   validarDatosGenerales() {

    if ( "1" == this.ban ) {
      console.log("validar moral");
      this.showEspecificosMoral = true;
      this.general.setFormMoral(this.datosGeneralesForm.value);
      console.log(this.general);

      this.datosGeneralesForm.controls.sucursal.disable();
      this.datosGeneralesForm.controls.promotor.disable();
      this.datosGeneralesForm.controls.razonSocial.disable();
      this.datosGeneralesForm.controls.fechaConstitucion.disable();
      this.datosGeneralesForm.controls.rfc.disable();

    } else if ( "2" == this.ban ) {
      console.log("validar fisica");
      this.showEspecificosFisica = true;
      this.general.setFormFisica(this.datosGeneralesFisicaForm.value);
      console.log(this.general)

      this.datosGeneralesFisicaForm.controls.sucursal.disable();
      this.datosGeneralesFisicaForm.controls.primerNombre.disable();
      this.datosGeneralesFisicaForm.controls.segundoNombre.disable();
      this.datosGeneralesFisicaForm.controls.apellidoPaterno.disable();
      this.datosGeneralesFisicaForm.controls.apellidoMaterno.disable();
      this.datosGeneralesFisicaForm.controls.promotor.disable();
      this.datosGeneralesFisicaForm.controls.fechaNacimiento.disable();
      this.datosGeneralesFisicaForm.controls.rfc.disable();

    }

    this.general.EstatusCliente = '0';

    this.clienteService.agregar9(this.general).subscribe(
      (result: ResponseSP[]) => {
        this.responseSP = result;
        this.showBtnValidar = false;
      }
    );
  }

  guardaGeneral() {

    if ( "1" == this.ban ) {
      this.general.setDatosGenerales(this.datosGeneralesForm.value);

    } else if ( "2" == this.ban ) {
      this.general.setDatosGeneralesFisica(this.datosGeneralesFisicaForm.value);
    }

    this.updateInfoGeneral();

    this.clienteService.agregar(this.general).subscribe(
      (result: ResponseSP[]) => {
        this.responseSP = result;
        this.general.setId(+result[0].noCliente)

        this.typeSuccess();
        this.disNextSection_1 = false;

        if ( "1" == this.ban ) {
          this.datosGeneralesForm.disable();
          this.disBtnDatosGeneralesMoral = true;
          this.datosGeneralesForm.controls.numeroCliente.setValue(+result[0].noCliente);
        } else if ( "2" == this.ban ) {
          this.datosGeneralesFisicaForm.disable();
          this.disBtnDatosGeneralesFisica = true;
          this.datosGeneralesFisicaForm.controls.numeroCliente.setValue(+result[0].noCliente);
        }

      }
    );
  }

  updateInfoGeneral(): void {
    for ( let item of this.ctSucursal ) {
      if ( item.catalogo_cve == this.general.Sucursal ) {
        this.infoGeneral.sucursal = item.desc_45;
      }
    }

    for ( let item of this.ctPromotor ) {
      if ( item.catalogo_cve == this.general.ClavePromotor ) {
        this.infoGeneral.promotor = item.desc_45;
      }
    }

    this.infoGeneral.estatus = 'Prospecto';
    this.infoGeneral.razonSocial = this.general.RazonSocial;
  }

  cancelar() {
    this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent });
  }
  // FIN DATOS GENERALES

  cancelarActualizacion(seccion: string): void {
    if ( 'domicilio' == seccion ) {
      this.domicilioBtnText = 'Guardar';
      this.isCollapsed8 = true;
      this.domicilioForm.reset();
      this.domicilioForm.disable();
      this.cMpio = [];
      this.cColonia = [];
      this.cCP = [];
    }
  }


  /**
   * METODOS DOMICILIO
   **/
  consultarDomicilio(dom: any) {

    console.log(dom);
    this.cancelarActualizacion('domicilio');
    let params = {
      userId:this.general.Id,
      domId: dom.TipoDomicilio
    }
    this.updateDomicilio = true;
    this.clienteService.consultar(params).subscribe(
      (result: any) => {

        this.domicilioForm.enable();
        this.domicilioBtnText = 'Actualizar';
        this.isCollapsed8 = false;

        this.isPatchLocation = true;
        this.locationToUpdate = result[0];

        this.loadLocationLists();

        this.domicilioForm.controls.TipoDomicilio.setValue(result[0].TipoDomicilio);
        this.domicilioForm.controls.TipoDomicilio.disable();
        this.domicilioForm.controls.Pais.setValue(result[0].Pais);
        this.domicilioForm.controls.Calle.setValue(result[0].Calle);
        this.domicilioForm.controls.NumeroExterior.setValue(result[0].NumeroExterior);
        this.domicilioForm.controls.NumeroInterior.setValue(result[0].NumeroInterior);
      }
    );
  }

  DomBorrar(dom: any) {

    let params = {
      userId: this.general.Id,
      domId: dom.TipoDomicilio
    };

    this.clienteService.domborrar(params).subscribe(
      (result: any) => {
        console.log(result);
        this.obtenerDomicilio();
      }
    );

  }

  insertaDomicilio() {
    this.domicilioForm.enable();
    this.isCollapsed8 = false;
  }

  cancelarDomicilioTest() {
    console.log(this.domicilioForm.valid);
    console.log(this.domicilioForm.value);
    this.updateDomicilio = false;
  }

  guardaDomicilio() {
    this.domicilio.updateFromForm(this.domicilioForm.value);
    this.domicilio.setClienteId(this.general.Id);

    this.clienteService.agregarDomicilio(this.domicilio).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.clienteM = result;
        this.domcon = null;
        this.obtenerDomicilio();

        this.domicilioForm.reset();
        this.domicilioForm.disable();
        this.isCollapsed8 = true;
        this.domicilioBtnText = 'Guardar';
        this.updateDomicilio = false;
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
    this.clienteService.obtenerDocumentos(this.general.Id).subscribe(
      (res: {data: Array<any>, status: string, message: string}) => {
        this.listadoDocumentos = res.data;

        for (let doc of this.listadoDocumentos) {
          doc.nombreDocumento = `${environment.api.archivos}${this.general.Id}/${doc.nombreDocumento}`;
        }

      }
    );
  }

  guardarDocumento() {
    let param = {
      userId: this.general.Id,
      idDoc: this.tipoDocumento,
    };
    this.clienteService.guardarDocumento(this.archivo, param).subscribe(
      (res: any) => {
        console.log(res);
        this.responseSP = res.data;
        this.tipoDocumento = "";
        this.myInputFile.nativeElement.value = '';
        this.getDocumentos();
      }, (error: any) => {
        console.log("ERROR:");
        console.log(error);
      }
    );
  }

  borrarDocumento(doc: any): void {
    console.log(doc);

    let params = {
      userId: this.general.Id,
      tipoId: doc.tipoDocumento,
      nomDoc: doc.nombreDocumento
    };

    this.clienteService.borrarDocumento(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result.data;
        this.getDocumentos();
      }, (error: any) => {
        console.log("ERROR: borrarDocumento(doc: any)");
        console.log(error);
      });

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

  /*DatosMuestra() {
    this.Contador++;
    if (this.Contador == 1) {
      this.isCollapsed5 = !this.isCollapsed5;
    }
  }*/

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
      (result: Catalogos[]) => { this.ctActdet = result }
    );
  }

  CatEco() {
    this.clienteService.catActeco().subscribe(
      (result: Catalogos[]) => { this.ctActeco = result }
    );
  }

  CatBncs() {
    this.clienteService.catBancos().subscribe(
      (result: Catalogos[]) => { this.ctBancos = result }
    );
  }

  CatPue() {
    this.clienteService.catCatpue().subscribe(
      (result: Catalogos[]) => { this.ctCatpue = result }
    );
  }

  CodId() {
    this.clienteService.catCodId().subscribe(
      (result: Catalogos[]) => { this.ctCodId = result }
    );
  }

  EdoCiv() {
    this.clienteService.catEdociv().subscribe(
      (result: Catalogos[]) => { this.ctEdociv = result }
    );
  }

  Identif() {
    this.clienteService.catIdentif().subscribe(
      (result: Catalogos[]) => { this.ctIdentif = result }
    );
  }

  Perjur() {
    this.clienteService.catPerjur().subscribe(
      (result: Catalogos[]) => { this.ctPerjur = result }
    );
  }

  Profes() {
    this.clienteService.catProfes().subscribe(
      (result: Catalogos[]) => { this.ctProfes = result }
    );
  }

  ctSx() {
    this.clienteService.catSexo().subscribe(
      (result: Catalogos[]) => { this.ctSexo = result }
    );
  }

  StsCte() {
    this.clienteService.catStscte().subscribe(
      (result: Catalogos[]) => { this.ctStscte = result }
    );
  }

  Tipded() {
    this.clienteService.catTipded().subscribe(
      (result: Catalogos[]) => { this.ctTipded = result }
    );
  }

  TipDom() {
    this.clienteService.catTipdom().subscribe(
      (result: Catalogos[]) => { this.ctTipdom = result }
    );
  }

  Tipgse() {
    this.clienteService.catTipgse().subscribe(
      (result: Catalogos[]) => { this.ctTipgse = result }
    );
  }

  Tipman() {
    this.clienteService.catTipman().subscribe(
      (result: Catalogos[]) => { this.ctTipman = result }
    );
  }

  Tipred() {
    this.clienteService.catTipred().subscribe(
      (result: Catalogos[]) => { this.ctTipred = result }
    );
  }

  TipRel() {
    this.clienteService.catTiprel().subscribe(
      (result: Catalogos[]) => { this.ctTiprel = result }
    );
  }

  Tiprpe() {
    this.clienteService.catTiprpe().subscribe(
      (result: Catalogos[]) => { this.ctTiprpe = result }
    );
  }

  Tiprrc() {
    this.clienteService.catTiprrc().subscribe(
      (result: Catalogos[]) => { this.ctTiprrc = result }
    );
  }

  Tiptel() {
    this.clienteService.catTiptel().subscribe(
      (result: Catalogos[]) => { this.ctTiptel = result }
    );
  }

  cnaCION() {
    this.clienteService.catnaCION().subscribe(
      (result: Catalogos[]) => { this.ctnaCION = result }
    );
  }

  catDocumentos() {
    this.clienteService.catDocumentos().subscribe(
      (result: {data: Array<any>, status: string, message: string}) => {
        this.ctDocumentos = result.data;
      }
    );
  }

  cPromotor(){
    this.clienteService.catPromotor().subscribe(
     (result: Catalogos[]) => { this.ctPromotor = result }
    );
  }

  cSucursal(){
    this.clienteService.catSucursales().subscribe(
     (result: Catalogos[]) => { this.ctSucursal = result }
    );
  }

  cEdo(){
    this.clienteService.catEstado().subscribe(
     (result: Catalogos[]) => { this.cEstado = result }
    );
  }

}
