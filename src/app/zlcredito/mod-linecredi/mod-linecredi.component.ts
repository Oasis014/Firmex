import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailMask from 'text-mask-addons/dist/emailMask';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CreditoService } from '../services/credito.service';
import { Catalogos } from 'src/app/shared/models/catalogos';

@Component({
  selector: 'app-mod-linecredi',
  templateUrl: './mod-linecredi.component.html',
  styleUrls: ['./mod-linecredi.component.scss']
})
export class ModLineCrediComponent implements OnInit {

  mask: Array<string | RegExp>;
  efectivo = {
    mask: createNumberMask({ allowDecimal: true }),
  };
  email = {
    mask: emailMask,
  };

  number = {
    mask: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  number2 = {
    mask: [/\d/, /\d/, /\d/, /\d/],
  };
  listCreditos = [];
  datosCreditoForm: FormGroup;
  userInfo = {
    numeroCliente: '',
    sucursal: '',
    promotor: '',
    estatusCliente: '',
    razonSocial: '',
    nombreCompleto: ''
  };
  listTipoCredito: Catalogos[];
  lineaCreditoId: number;
  lineaCredito: any;

  constructor(
    public toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private creditoService: CreditoService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.lineaCreditoId = this.route.snapshot.params.cred;
    console.log(`el cliente es ${id} y su numero de credito es: ${this.lineaCreditoId}`);
    this.userInfo.numeroCliente = id;
    this.getCustomerInfo(id);
    this.getLineInfo(id, this.lineaCreditoId);

    this.datosCreditoForm = this.formBuilder.group({
      tipoCredito: ['', [
        Validators.required,
        Validators.maxLength(2)
      ]], /* IN `InTipoCredito` CHAR(2), */
      noCuenta: ['', [
        Validators.required,
        Validators.maxLength(250),
        Validators.pattern("^[0-9]*$")
      ]], /* IN `InDestino` CHAR(250), */
      montoSolicitado: ['', [
        Validators.required, Validators.maxLength(21)
      ]], /* IN `InMontoSolicitado` DECIMAL(15,2), */
      /*
      IN `InLineaCredito` INTEGER,
      IN `InSolicitudLinea` INTEGER,
      IN `InConsecutivo` INTEGER,
      IN `InTipoCredito` CHAR(2),
      IN `InPlazo` CHAR(4),
      IN `InDestino` CHAR(250),
      IN `InMontoSolicitado` DECIMAL(15,2),
      */
    });

    this.getCatalogoTipoCredito();

  }

  getCustomerInfo(id: number): void {
    this.creditoService.validarCliente(id).subscribe((res: any) => {
      console.log(res.data);
      this.userInfo = {
        numeroCliente: res.data[0].numeroCliente,
        sucursal: res.data[0].sucursalDesc,
        promotor: res.data[0].clavePromotorDesc,
        estatusCliente: res.data[0].estatusCliente,
        razonSocial: res.data[0].razonSocial,
        nombreCompleto: res.data[0].nombreCompleto,
      };
    });
  }

  getLineInfo(customer: number, line: number): void {
    this.creditoService.getLineaCredito(customer, line).subscribe((res: any) => {
      console.log(res.data);
      this.lineaCredito = res.data[0];
      // destinoCredito: "111"
      // divisa: "01"
      // estatusSolicitud: "01"
      // fechaAlta: "2022-06-05"
      // frecuenciaDisposicion: "111"
      // frecuenciaPago: "111"
      // lineaCredito: "0"
      // montoFrecuenciaDisposicion: "111.00"
      // montoFrecuenciaPago: "111.00"
      // montoLineaCredito: "11111.00"
      // numeroCliente: "1"
      // numeroDisposiciones: "111"
      // numeroPagos: "111"
      // origenRecursos: "111"
      // solicitudLinea: "17"
      // tipoSolicitud: "01"
    });
  }

  saveData(): void {
    let rgxComa = /,/gi;
    let values = this.datosCreditoForm.value;
    console.log(values);
    values.montoSolicitado = values.montoSolicitado.replace('$', '');
    values.montoSolicitado = values.montoSolicitado.replace(rgxComa, '');

    values['lineaCredito'] = this.lineaCredito.lineaCredito;       // IN `InLineaCredito` INTEGER,
    values['solicitudLinea'] = this.lineaCredito.solicitudLinea;   // IN `InSolicitudLinea` INTEGER,
    values['consecutivo'] = 0;        // OK IN `InConsecutivo` INTEGER,
    values['InPlazo'] = 'abcd';         // IN `InPlazo` CHAR(4),

    this.creditoService.solicitudCredito(values).subscribe((res: any) => {
      console.log(res);
    });
  }

  deleteCredit(consecutivo: number): void {
    let params = {
      'numeroCliente': parseInt(this.userInfo.numeroCliente),
      'consecutivo': consecutivo,
      'solicitudLinea': 0
    };
    this.creditoService.borrarSolicitudCredito(params).subscribe(
      (res: any) => {
        console.log(res);
    });
  }

  getCatalogoTipoCredito(): void {
    this.creditoService.catalogoTipoCredito().subscribe(
      (res: Catalogos[]) => {
      this.listTipoCredito = res;
    });
  }

}