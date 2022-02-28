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
import { deletedConfirmed } from 'src/app/shared/data/sweet-alerts';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})

export class EditarClienteComponent implements OnInit { // 717

  @ViewChild('inputFile')
  myInputFile: ElementRef;

  constructor(
    public readonly toastr: ToastrService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly clienteService: ClienteService,
    private readonly formBuilder: FormBuilder,
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

  //disNextSection_1 = true;
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

  domicilioDisBtnInsert = true; // boton guardar en seccion "domicilio"

  actividadEconomicaDisBtnInsert = true;
  referenciasPersonalesDisBtnInsert = true;
  referenciasComercialesDisBtnInsert = true;
  referenciasBancariasDisBtnInsert = true;

  accionesDisBtnInsert = true;
  cuentasBancariasDisBtnInsert = true;
  partesRelacionadasDisBtnInsert = true;
  grupoSocioeconomicoDisBtnInsert = true;
  grupoRiesgoComunDisBtnInsert = true;

  disBtnDatosGeneralesMoral = false;
  disBtnDatosGeneralesFisica = false;

  domicilioBtnText = 'Guardar';
  actividadEconomicaBtnText = 'Guardar';
  referenciasPersonalesBtnText = 'Guardar';
  referenciasComercialesBtnText = 'Guardar';
  referenciasBancariasBtnText = 'Guardar';
  accionesBtnText = 'Guardar';
  cuentasBancariasBtnText = 'Guardar';
  partesRelacionadasBtnText = 'Guardar';
  grupoSocioeconomicoBtnText = 'Guardar';
  grupoRiesgoComunBtnText = 'Guardar';

  referenciasPersonalesSelected: any;
  referenciasComercialesSelected: any;
  referenciasBancariasSelected: any;
  accionesSelected: any;
  cuentasBancariasSelected: any;
  partesRelacionadasSelected: any;
  grupoSocioeconomicoSelected: any;
  grupoRiesgoComunSelected: any;

  referenciasPersonalesUpdate = false;
  referenciasComercialesUpdate = false;
  referenciasBancariasUpdate = false;
  accionesUpdate = false;
  cuentasBancariasUpdate = false;
  partesRelacionadasUpdate = false;
  grupoSocioeconomicoUpdate = false;
  grupoRiesgoComunUpdate = false;

  // Objetos Ocultos Cliente
  isCollapsed = false;
  isCollapsed2 = true;
  isCollapsed4 = false;
  isCollapsed5 = true;
  isCollapsed6 = true;
  isCollapsed7 = false;
  //showEspecificosMoral = false;
  showEspecificosFisica = false;
  //showBtnValidar = true;

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
  general = new DatosGenerales;

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
    const id = this.route.snapshot.params.id;
    const userType = this.route.snapshot.params.type;
    console.log(`el cliente es ${userType} y su ID es ${id}`);

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

    if ( 'moral' === userType ) {
      this.showMoral = true;
      this.datosGeneralesForm = this.formBuilder.group({
        numeroCliente:       [''],
        estatusCliente:      [''],
        sucursal:            [''],
        promotor:            [''],
        razonSocial:         [''],
        fechaConstitucion:   [''],
        rfc:                 [''],
        nombreSociedad:      [''],
        representanteLegal:  [''],
        presidenteConsejo:   [''],
        consejero:           [''],
        emailPersonal:       [''],
        emailEmpresa:        [''],
        parteRelacionada:    [''],
        grupoVinculoConsejo: [''],
        grupoRiesgoComun:    [''],
        telefonoOficina:     [''],
        extensionOficina:    [''],
        celular:             [''],
        redSocial1:          [''],
        redSocial2:          [''],
      });
      this.datosGeneralesForm.disable();
      this.obtenerDatosGeneralesMoral(id);
    } else if ( 'fisica' === userType ) {
      this.showMoral = false;
      this.datosGeneralesFisicaForm = this.formBuilder.group({
        numeroCliente:        ['0'],
        estatusCliente:       [''],
        sucursal:             [''],
        primerNombre:         [''], // 30
        segundoNombre:        [''], // 30
        apellidoPaterno:      [''],
        apellidoMaterno:      [''],
        promotor:             [''],
        fechaNacimiento:      [''],
        rfc:                  [''],
        sexo:                 [''],
        estadoCivil:          [''],
        curp:                 [''],
        tipoIdentificacion:   [''],
        numeroIdentificacion: [''],
        listaNegra:           [''],
        profesion:            [''],
        nacionalidad:         [''],
        emailPersonal:        [''],
        emailEmpresa:         [''],
        parteRelacionada:     [''],
        grupoVinculoConsejo:  [''],
        grupoRiesgoComun:     [''],
      });
      this.datosGeneralesFisicaForm.disable();
      this.obtenerDatosGeneralesFisica(id);
    }

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

  obtenerDatosGeneralesMoral(id: number): void {
    this.clienteService.getDatosGeneralesMoral(id).subscribe(
      (result) => {
        console.log(result);
        this.datosGeneralesForm.controls.numeroCliente.setValue(result[0].NumeroCliente);
        this.datosGeneralesForm.controls.estatusCliente.setValue(result[0].EstatusCliente);
        this.datosGeneralesForm.controls.sucursal.setValue(result[0].Sucursal);
        this.datosGeneralesForm.controls.promotor.setValue(result[0].ClavePromotor);
        this.datosGeneralesForm.controls.razonSocial.setValue(result[0].RazonSocial);
        this.datosGeneralesForm.controls.fechaConstitucion.setValue(result[0].FechaConstitucion);
        this.datosGeneralesForm.controls.rfc.setValue(result[0].RFC);
        this.datosGeneralesForm.controls.nombreSociedad.setValue(result[0].NombreSociedad);
        this.datosGeneralesForm.controls.representanteLegal.setValue(result[0].RepresentanteLegal);
        this.datosGeneralesForm.controls.presidenteConsejo.setValue(result[0].PresidenteConsejo);
        this.datosGeneralesForm.controls.consejero.setValue(result[0].Consejero);
        this.datosGeneralesForm.controls.emailPersonal.setValue(result[0].EmailPersonal);
        this.datosGeneralesForm.controls.emailEmpresa.setValue(result[0].EmailEmpresa);
        this.datosGeneralesForm.controls.parteRelacionada.setValue(result[0].ParteRelacionada);
        this.datosGeneralesForm.controls.grupoVinculoConsejo.setValue(result[0].GrupoConsejo);
        this.datosGeneralesForm.controls.grupoRiesgoComun.setValue(result[0].GrupoRiesgoComun);
        this.datosGeneralesForm.controls.telefonoOficina.setValue(result[0].TelefonoOficina);
        this.datosGeneralesForm.controls.extensionOficina.setValue(result[0].ExtensionOficina);
        this.datosGeneralesForm.controls.celular.setValue(result[0].Celular);
        this.datosGeneralesForm.controls.redSocial1.setValue(result[0].RedSocial1);
        this.datosGeneralesForm.controls.redSocial2.setValue(result[0].RedSocial2);

        this.general = new DatosGenerales(result[0]);
        this.obtenerTodosListados();
      }
    );
  }

  obtenerDatosGeneralesFisica(id: number): void {
    this.clienteService.getDatosGeneralesFisica(id).subscribe(
      (result) => {
        console.log(result);
        this.datosGeneralesFisicaForm.controls.numeroCliente.setValue(result[0].NumeroCliente);
        this.datosGeneralesFisicaForm.controls.estatusCliente.setValue(result[0].EstatusCliente);
        this.datosGeneralesFisicaForm.controls.sucursal.setValue(result[0].Sucursal);
        this.datosGeneralesFisicaForm.controls.primerNombre.setValue(result[0].PrimerNombre);
        this.datosGeneralesFisicaForm.controls.segundoNombre.setValue(result[0].SegundoNombre);
        this.datosGeneralesFisicaForm.controls.apellidoPaterno.setValue(result[0].ApellidoPaterno);
        this.datosGeneralesFisicaForm.controls.apellidoMaterno.setValue(result[0].ApellidoMaterno);
        this.datosGeneralesFisicaForm.controls.promotor.setValue(result[0].ClavePromotor);
        this.datosGeneralesFisicaForm.controls.fechaNacimiento.setValue(result[0].FechaNacimiento);
        this.datosGeneralesFisicaForm.controls.rfc.setValue(result[0].RFC);
        this.datosGeneralesFisicaForm.controls.sexo.setValue(result[0].Sexo);
        this.datosGeneralesFisicaForm.controls.estadoCivil.setValue(result[0].EstadoCivil);
        this.datosGeneralesFisicaForm.controls.curp.setValue(result[0].CURP);
        this.datosGeneralesFisicaForm.controls.tipoIdentificacion.setValue(result[0].TipoIdentificacion);
        this.datosGeneralesFisicaForm.controls.numeroIdentificacion.setValue(result[0].NumeroIdentificacion);
        this.datosGeneralesFisicaForm.controls.listaNegra.setValue(result[0].ListaNegra);
        this.datosGeneralesFisicaForm.controls.profesion.setValue(result[0].Profesion);
        this.datosGeneralesFisicaForm.controls.nacionalidad.setValue(result[0].Nacionalidad);
        this.datosGeneralesFisicaForm.controls.emailPersonal.setValue(result[0].EmailPersonal);
        this.datosGeneralesFisicaForm.controls.emailEmpresa.setValue(result[0].EmailEmpresa);
        this.datosGeneralesFisicaForm.controls.parteRelacionada.setValue(result[0].ParteRelacionada);
        this.datosGeneralesFisicaForm.controls.grupoVinculoConsejo.setValue(result[0].GrupoConsejo);
        this.datosGeneralesFisicaForm.controls.grupoRiesgoComun.setValue(result[0].GrupoRiesgoComun);

        this.general = new DatosGenerales(result[0]);
        this.obtenerTodosListados();
      }
    );

  }

  obtenerTodosListados(): void {
    this.obtenerDomicilio();
    this.obtenerListadoActividadEconomica();
    this.obtenerReferenciasPersonales();
    this.obtenerReferenciasComerciales();
    this.obtenerReferenciasBancarias();
    this.obtenerAcciones();
    this.obtenerCuentasBancarias();
    this.obtenerPartesRelacionadas();
    this.obtenerSocioEco();
    this.obtenerRiesgoComun();
    this.getDocumentos();
  }


  cancelar() {
    this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent });
  }
  // FIN DATOS GENERALES

  cancelarActualizacion(seccion: string): void {
    if ( 'domicilio' == seccion ) {
      this.domicilioBtnText = 'Guardar';
      this.domicilioDisBtnInsert = true;
      this.domicilioForm.reset();
      this.domicilioForm.disable();
      this.cMpio = [];
      this.cColonia = [];
      this.cCP = [];
    } else {
      this[seccion+'BtnText'] = 'Guardar';
      this[seccion+'DisBtnInsert'] = true;
      this[seccion+'Form'].reset();
      this[seccion+'Form'].disable();

      if ( 'undefined' !== typeof(this[seccion+'Update'])) {
        this[seccion+'Update'] = false;
      }
    }
  }

  btnInsert(seccion: string): void {
    this[seccion+'Form'].enable();
    this[seccion+'DisBtnInsert'] = false;
  }

  confirmarBorrarElemento(obj: any, funcName: string): void {
    swal({
      title: '¿Seguro desea eliminar el registro?',
      text: "Esta acción no podrá revertise.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0CC27E',
      cancelButtonColor: '#FF586B',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonClass: 'btn btn-success btn-raised mr-5',
      cancelButtonClass: 'btn btn-danger btn-raised',
      buttonsStyling: false
    }).then((result) => {
      console.log(result);
      if ( 'undefined' !== typeof(result['value']) && result['value'] == true ) {
        this[funcName](obj);
      }
    })

  }

  prepareEdit(seccion: string, obj?): void {
    this[seccion+'Form'].enable();
    this[seccion+'BtnText'] = 'Actualizar';
    this[seccion+'DisBtnInsert'] = false;
    if ( 'undefined' !== typeof(this[seccion+'Update'])) {
      this[seccion+'Update'] = true;
    }

    console.log(obj);
    if ( 'undefined' !== obj ) {
      for (let item in this[seccion+'Form'].controls ) {
        console.log(item);
        console.log(obj[item]);
        this[seccion+'Form'].controls[item].setValue(obj[item]);
      }
    }

  }


  /**
   * METODOS DOMICILIO
   **/
  consultarDomicilio(dom: any) {

    console.log(dom);
    this.cancelarActualizacion('domicilio');
    let params = {
      userId: this.general.NumeroCliente,
      domId: dom.TipoDomicilio
    }
    this.updateDomicilio = true;
    this.clienteService.consultar(params).subscribe(
      (result: any) => {

        this.prepareEdit('domicilio', dom);

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
      userId: this.general.NumeroCliente,
      domId: dom.TipoDomicilio
    };

    this.clienteService.domborrar(params).subscribe(
      (result: any) => {
        console.log(result);
        this.obtenerDomicilio();
        deletedConfirmed();
      }
    );

  }


  guardaDomicilio() {
    let formValues = this.domicilioForm.getRawValue();
    this.domicilio.updateFromForm(formValues);
    this.domicilio.setClienteId(this.general.NumeroCliente);

    this.clienteService.agregarDomicilio(this.domicilio).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.clienteM = result;
        this.domcon = null;
        this.obtenerDomicilio();

        this.domicilioForm.reset();
        this.domicilioForm.disable();
        this.domicilioDisBtnInsert = true;
        this.domicilioBtnText = 'Guardar';
        this.updateDomicilio = false;
      }
    );
  }

  /* obtiene todos los domicilios de un cliente */
  obtenerDomicilio() {
    let params = {
      userId: this.general.NumeroCliente
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

  guardarActividadEconomica() {
    let params = this.actividadEconomicaForm.value;
    params.Id  =this.general.NumeroCliente;
    this.clienteService.agregar4(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;

        this.obtenerListadoActividadEconomica();
        this.cancelarActualizacion('actividadEconomica');
    });
  }

  obtenerListadoActividadEconomica() {
    this.clienteService.getActiEco(this.general.NumeroCliente).subscribe(
      (result: any) => {
        console.log(result);
        this.actividadEconomicaList = result
      });
  }

  consultarActividadEconomica(eco): void {
    console.log(eco);
    this.prepareEdit('actividadEconomica', eco);
  }

  borrarActividadEconomica(obj: any) {
    console.log(obj);

    this.clienteService.borrarActividadEconomica(obj).subscribe(
      (result: any) => {
        this.responseSP = result;
        this.obtenerListadoActividadEconomica();
      }
    );

  }

  // -------------------------------------------------------------------------

  guardaReferenciasPersonales() {
    let form = this.referenciasPersonalesForm.value;

    if ( !this.referenciasPersonalesUpdate ) {
      console.log('guardar');
      form.NumeroCliente = this.general.NumeroCliente;

      this.clienteService.guardaReferenciaPersonal(form).subscribe(
        (result: any) => {
          console.log(result);
          this.responseSP = result;
          this.obtenerReferenciasPersonales();
          this.cancelarActualizacion('referenciasPersonales');
      });
    } else {
      console.log('actualizar');
      form.NumeroCliente = this.referenciasPersonalesSelected.NumeroCliente;
      form.Consecutivo = this.referenciasPersonalesSelected.Consecutivo;

      this.clienteService.actualizaReferenciaPersonal(form).subscribe(
        (result: any) => {
          console.log(result);
          this.responseSP = result;
          this.obtenerReferenciasPersonales();
          this.cancelarActualizacion('referenciasPersonales');
      });
    }

  }

  obtenerReferenciasPersonales() {
    this.clienteService.getPersonales(this.general.NumeroCliente).subscribe(
      (result: any) => {
        console.log(result);
        this.referenciasPersonalesList = result;
    });
  }

  consultarReferenciaPersonal(obj): void {
    console.log(obj);
    this.referenciasPersonalesSelected = obj;
    this.referenciasPersonalesUpdate = true;
    this.prepareEdit('referenciasPersonales', obj);
  }

  borrarReferenciaPersonal(obj: any): void {
    let params = {
      NumeroCliente: obj.NumeroCliente,
      Consecutivo: obj.Consecutivo
    };
    this.clienteService.borrarReferenciaPersonal(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.obtenerReferenciasPersonales();
      }
    );
  }

  // -------------------------------------------------------------------------

  guardarReferenciasComerciales() {
    let form = this.referenciasComercialesForm.value;

    if ( !this.referenciasComercialesUpdate ) {
      console.log('guardar');

      form.NumeroCliente = this.general.NumeroCliente;

      this.clienteService.guardaReferenciaComercial(form).subscribe(
        (result: any) => {
          console.log(result);
          this.responseSP = result;
          this.obtenerReferenciasComerciales();
          this.cancelarActualizacion('referenciasComerciales');
      });
    } else {
      console.log('actualizar');

      form.NumeroCliente = this.referenciasComercialesSelected.NumeroCliente;
      form.Consecutivo = this.referenciasComercialesSelected.Consecutivo;

      this.clienteService.actualizaReferenciaComercial(form).subscribe(
        (result: any) => {
          console.log(result);
          this.responseSP = result;
          this.obtenerReferenciasComerciales();
          this.cancelarActualizacion('referenciasComerciales');
      });
    }
  }

  obtenerReferenciasComerciales() {
    this.clienteService.getComerciales(this.general.NumeroCliente).subscribe(
      (result: any) => {
        this.referenciasComercialesList = result;
    });
  }

  consultarReferenciaComercial(com: any): void {
    console.log(com);
    this.referenciasComercialesSelected = com;
    this.referenciasComercialesUpdate = true;
  }

  borrarReferenciaComercial(com: any): void {
    let params = {
      NumeroCliente: com.NumeroCliente,
      Consecutivo: com.Consecutivo
    };
    this.clienteService.borrarReferenciaComercial(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.obtenerReferenciasComerciales();
      }
    );
  }

  // -------------------------------------------------------------------------

  guardarReferenciasBancarias() {
    let refBan = this.referenciasBancariasForm.value;

    if ( !this.referenciasBancariasUpdate ) {
      console.log('guardar');

      refBan.Id = this.general.NumeroCliente;

      this.clienteService.guardaReferenciaBancaria(refBan).subscribe(
        (result: any) => {
          console.log(result);
          this.responseSP = result;
          this.obtenerReferenciasBancarias();
          this.cancelarActualizacion('referenciasBancarias');
        });

    } else {
      console.log('actualizar');

      refBan.NumeroCliente = this.referenciasBancariasSelected.NumeroCliente;
      refBan.Consecutivo = this.referenciasBancariasSelected.Consecutivo;
      this.clienteService.actualizaReferenciaBancaria(refBan).subscribe(
        (result: any) => {
          console.log(result);
          this.responseSP = result;
          this.obtenerReferenciasBancarias();
          this.cancelarActualizacion('referenciasBancarias');
        });
    }

  }

  obtenerReferenciasBancarias() {
    this.clienteService.getBancarias(this.general.NumeroCliente).subscribe(
      (result: any) => {
        this.referenciasBancariasList = result;
      });
  }

  consultarReferenciaBancaria(ban: any): void {
    console.log(ban);
    this.referenciasBancariasSelected = ban;
    this.referenciasBancariasUpdate = true;
    this.prepareEdit('referenciasBancarias', ban);
  }

  borrarReferenciaBancaria(ban: any): void {
    let params = {
      NumeroCliente: ban.NumeroCliente,
      Consecutivo: ban.Consecutivo
    };
    this.clienteService.borrarReferenciaBancaria(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.obtenerReferenciasBancarias();
      }
    );
  }

  /* FIN ACTIVIDAD Y REFERENCIA*/

  /********************
   * METODOS CUENTAS BANCARIAS
   * ********************************/

  guardarAcciones() {
    let form = this.accionesForm.value;

    if ( !this.accionesUpdate ) {
      console.log('guardar');
      form.NumeroCliente = this.general.NumeroCliente;
      this.clienteService.agregarAccion(form).subscribe(
        (result: any) => {
          console.log(result)
          this.responseSP = result;
          this.obtenerAcciones();
          this.cancelarActualizacion('acciones');
      });
    } else {
      console.log('actualizar');
      form.NumeroCliente = this.accionesSelected.NumeroCliente;
      form.Consecutivo = this.accionesSelected.Consecutivo;
      this.clienteService.actualizarAccion(form).subscribe(
        (result: any) => {
          console.log(result)
          this.responseSP = result;
          this.obtenerAcciones();
          this.cancelarActualizacion('acciones');
      });
    }
  }

  obtenerAcciones() {
    this.clienteService.getAcciones(this.general.NumeroCliente).subscribe(
      (result: any) => {
        this.accionesList = result;
    });
  }

  consultarAccion(acc: any): void {
    console.log(acc);
    this.accionesSelected = acc;
    this.accionesUpdate = true;
    this.prepareEdit('acciones', acc);
  }

  borrarAccion(acc: any): void {
    console.log(acc);
    let params = {
      NumeroCliente: acc.NumeroCliente,
      Consecutivo: acc.Consecutivo
    };
    this.clienteService.borrarAccion(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.obtenerAcciones();
      }
    );
  }

  // -------------------------------------------------------------------------

  guardarCuentasBancarias() {
    let form = this.cuentasBancariasForm.value;

    if ( !this.cuentasBancariasUpdate ) {
      console.log('guardar');
      form.NumeroCliente = this.general.NumeroCliente;
      this.clienteService.agregarCuentaBancaria(form).subscribe(
        (result: any) => {
          this.responseSP = result;
          this.obtenerCuentasBancarias();
          this.cancelarActualizacion('cuentasBancarias');
      });
    } else {
      console.log('actualizar');
      form.NumeroCliente = this.cuentasBancariasSelected.NumeroCliente;
      form.Consecutivo = this.cuentasBancariasSelected.Consecutivo;
      this.clienteService.actualizarCuentaBancaria(form).subscribe(
        (result: any) => {
          this.responseSP = result;
          this.obtenerCuentasBancarias();
          this.cancelarActualizacion('cuentasBancarias');
      });
    }
  }

  obtenerCuentasBancarias() {
    this.clienteService.getCuenta(this.general.NumeroCliente).subscribe(
      (result: any) => {
        this.cuentasBancariasList = result;
      });
  }

  consultarCuentaBancaria(obj): void {
    console.log(obj);
    this.cuentasBancariasSelected = obj;
    this.cuentasBancariasUpdate = true;
    this.prepareEdit('cuentasBancarias', obj);
  }

  borrarCuentaBancarias(obj: any): void {
    let params = {
      NumeroCliente: obj.NumeroCliente,
      Consecutivo: obj.Consecutivo
    };
    this.clienteService.borrarCuentaBancaria(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.obtenerCuentasBancarias();
      }
    );
  }


  // -------------------------------------------------------------------------

  guardarPartesRelacionadas() {
    let form = this.partesRelacionadasForm.value;

    if ( !this.partesRelacionadasUpdate ) {
      console.log('guardar');
      form.NumeroCliente = this.general.NumeroCliente;
      this.clienteService.agregarParteRelacionada(form).subscribe(
        (result: any) => {
          this.responseSP = result;
          this.obtenerPartesRelacionadas();
          this.cancelarActualizacion('partesRelacionadas');
      });
    } else {
      console.log('actualizar');
      form.NumeroCliente = this.partesRelacionadasSelected.NumeroCliente;
      form.Consecutivo = this.partesRelacionadasSelected.Consecutivo;
      this.clienteService.actualizarParteRelacionada(form).subscribe(
        (result: any) => {
          this.responseSP = result;
          this.obtenerPartesRelacionadas();
          this.cancelarActualizacion('partesRelacionadas');
      });
    }
  }

  obtenerPartesRelacionadas() {
    this.clienteService.getRelacional(this.general.NumeroCliente).subscribe(
      (result: any) => {
        console.log(result);
        this.partesRelacionadasList = result;
    });
  }

  consultarParteRelacionada(obj): void {
    console.log(obj);
    this.partesRelacionadasSelected = obj;
    this.partesRelacionadasUpdate = true;
    this.prepareEdit('partesRelacionadas', obj);
  }

  borrarParteRelacionada(obj: any): void {
    let params = {
      NumeroCliente: obj.NumeroCliente,
      Consecutivo: obj.Consecutivo
    };
    this.clienteService.borrarParteRelacionada(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.obtenerPartesRelacionadas();
      }
    );
  }


  // -------------------------------------------------------------------------

  SocioEco() {
    let form = this.grupoSocioeconomicoForm.value;

    if ( !this.grupoSocioeconomicoUpdate ) {
      console.log('guardar');
      form.NumeroCliente = this.general.NumeroCliente;
      this.clienteService.agregarGrupoSocioeconomico(form).subscribe(
        (result: ResponseSP[]) => {
          this.responseSP = result;
          this.obtenerSocioEco();
          this.cancelarActualizacion('grupoSocioeconomico');
        }
      );
    } else {
      console.log('actualizar');
      form.NumeroCliente = this.grupoSocioeconomicoSelected.NumeroCliente;
      form.Consecutivo = this.grupoSocioeconomicoSelected.Consecutivo;
      this.clienteService.actualizarGrupoSocioeconomico(form).subscribe(
        (result: ResponseSP[]) => {
          this.responseSP = result;
          this.obtenerSocioEco();
          this.cancelarActualizacion('grupoSocioeconomico');
        }
      );
    }
  }

  obtenerSocioEco() {
    this.clienteService.getSocioEco(this.general.NumeroCliente).subscribe(
      (result: any) => {
        this.grupoSocioeconomicoList = result;
    });
  }

  consultarGrupoSocioeconomico(obj): void {
    console.log(obj);
    this.grupoSocioeconomicoSelected = obj;
    this.grupoSocioeconomicoUpdate = true;
    this.prepareEdit('grupoSocioeconomico', obj);
  }

  borrarGrupoSocioeconomico(obj: any): void {
    let params = {
      NumeroCliente: obj.NumeroCliente,
      Consecutivo: obj.Consecutivo
    };
    this.clienteService.borrarGrupoSocioeconomico(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.obtenerSocioEco();
      }
    );
  }


  // -------------------------------------------------------------------------

  guardarRiesgoComun() {
    let form = this.grupoRiesgoComunForm.value;

    if ( !this.grupoRiesgoComunUpdate ) {
      console.log('guardar');
      form.NumeroCliente = this.general.NumeroCliente;
      this.clienteService.agregarGrupoRiesgoComun(form).subscribe(
        (result: any) => {
          console.log(result);
          this.responseSP = result;
          this.obtenerRiesgoComun();
          this.cancelarActualizacion('grupoRiesgoComun');
      });
    } else {
      console.log('actualizar');
      form.NumeroCliente = this.grupoRiesgoComunSelected.NumeroCliente;
      form.Consecutivo = this.grupoRiesgoComunSelected.Consecutivo;
      this.clienteService.actualizarGrupoRiesgoComun(form).subscribe(
        (result: any) => {
          console.log(result);
          this.responseSP = result;
          this.obtenerRiesgoComun();
          this.cancelarActualizacion('grupoRiesgoComun');
      });
    }

  }

  obtenerRiesgoComun() {
    this.clienteService.getRiesgoComun(this.general.NumeroCliente).subscribe(
      (result: any) => {
        this.grupoRiesgoComunList = result;
    });
  }

  consultarGrupoRiesgoComun(obj): void {
    console.log(obj);
    this.grupoRiesgoComunSelected = obj;
    this.grupoRiesgoComunUpdate = true;
    this.prepareEdit('grupoRiesgoComun', obj);
  }

  borrarGrupoRiesgoComun(obj: any): void {
    let params = {
      NumeroCliente: obj.NumeroCliente,
      Consecutivo: obj.Consecutivo
    };
    this.clienteService.borrarGrupoRiesgoComun(params).subscribe(
      (result: any) => {
        console.log(result);
        this.responseSP = result;
        this.obtenerRiesgoComun();
      }
    );
  }

  /* FIN CUENTAS BANCARIAS*/


  /** METODOS DOCUMENTOS */
  getDocumentos() {
    this.clienteService.obtenerDocumentos(this.general.NumeroCliente).subscribe(
      (res: {data: Array<any>, status: string, message: string}) => {
        this.listadoDocumentos = res.data;

        for (let doc of this.listadoDocumentos) {
          doc.urlDocumento = `${environment.api.archivos}${this.general.NumeroCliente}/${doc.nombreDocumento}`;
        }

      }
    );
  }

  guardarDocumento() {
    let param = {
      userId: this.general.NumeroCliente,
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
      userId: this.general.NumeroCliente,
      consecutivoId: doc.Consecutivo,
      tipo: doc.tipoDocumento,
      nom: doc.nombreDocumento
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