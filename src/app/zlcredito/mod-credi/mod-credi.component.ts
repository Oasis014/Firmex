import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailMask from 'text-mask-addons/dist/emailMask';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CreditoService } from '../services/credito.service';
import { ResponseSP } from 'src/app/shared/models/responseSP';

@Component({
  selector: 'app-mod-credi',
  templateUrl: './mod-credi.component.html',
  styleUrls: ['./mod-credi.component.scss']
})
export class ModCrediComponent implements OnInit {

  collapseCreditoForm = true;
  isCollapsedPrueba1 = false;

  mask: Array<string | RegExp>;
  efectivo = {
    mask: createNumberMask({allowDecimal: true}),
  };

  email = [{
    mask: emailMask,
  }];

  number = [{
    mask: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  }];

  number2 = [{
    mask: [ /\d/, /\d/, /\d/, /\d/ ],
  }];

  numeroClienteInput: FormControl;
  datosCliente = {
    sucursal: 'sdsdd',
    promotor: 'sdsdsdd',
    estatusCliente: 'sdsdd',
    nombreCompleto: 'fdgdfg',
    razonSocial: 'dfgdfgdf',
    rfc: 'fdgdfgdfgdf',
    estatusSolicitud: 'dfgdfgdgrere',
  };
  creditoForm: FormGroup;
  disValidate = false;
  hideCredito = false;
  rgxComa = /,/gi;
  numeroCliente = 0;

  constructor(
    public toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private creditoService: CreditoService
  ) { }

  ngOnInit() {
    this.numeroClienteInput = new FormControl('', [Validators.required]);
    this.creditoForm = this.fb.group({
      destinoCredito:             ['', [
        Validators.required,
        Validators.maxLength(250)
      ]],
      origenRecursos:             ['', [
        Validators.required,
        Validators.maxLength(250)
      ]],
      numeroDisposiciones:        ['', [
        Validators.required,
        Validators.maxLength(5),
        Validators.max(65535)
      ]],
      frecuenciaDisposicion:      ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      montoFrecuenciaDisposicion: ['', [
        Validators.required,
        Validators.maxLength(15)
      ]],
      numeroPagos:                ['', [
        Validators.required,
        Validators.maxLength(5),
        Validators.max(65535)
      ]],
      frecuenciaPago:             ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      montoFrecuenciaPago:        ['', [
        Validators.required,
        Validators.maxLength(15)
      ]],
      divisa:                     ['', [
        Validators.required,
        Validators.maxLength(2)
      ]],
      montoLineaCredito:          ['', [
        Validators.required,
        Validators.maxLength(15)
      ]],
    });

/*
numeroCliente                ` INTEGER,
fechaAlta                    ` DATE,

destinoCredito               ` CHAR(250),
origenRecursos               ` CHAR(250),
numeroDisposiciones          ` SMALLINT,
frecuenciaDisposicion        ` CHAR(100),
montoFrecuenciaDisposicion   ` DECIMAL(15,2),
numeroPagos                  ` SMALLINT,
frecuenciaPago               ` CHAR(100),
montoFrecuenciaPago          ` DECIMAL(15,2),
divisa                       ` CHAR(2),
montoLineaCredito            ` DECIMAL(15,2),

solicitudLinea               ` INTEGER,
tipoSolicitud                ` CHAR(2),
estatusSolicitud             ` CHAR(2),
*/


  }

  /*open() {
    this.router.navigate(['mod-linecredi'], { relativeTo: this.route.parent });
  }*/

  validarCliente(): void {
    this.creditoService.validarCliente(this.numeroClienteInput.value).subscribe((resp: ResponseSP) => {
        console.log(resp);
        // if ( resp.data.length > 0 ) {

          this.disValidate = true;
          this.numeroClienteInput.disable();

          /*this.datosCliente = {
            sucursal: resp.data[0]['sucursalDesc'],
            promotor: resp.data[0]['clavePromotorDesc'],
            estatusCliente: resp.data[0]['estatusCliente'],
            nombreCompleto: resp.data[0]['nombreCompleto'],
            razonSocial: resp.data[0]['razonSocial'],
            rfc: resp.data[0]['rfc'],
            estatusSolicitud: '',
          };*/
          this.collapseCreditoForm = false;
          this.numeroCliente = this.numeroClienteInput.value;
        // } else {
          // this.collapseCreditoForm = true;
        // }
    });
  }

  cancelar(): void {

  }

  guardar(): void {
    const values = this.creditoForm.value;
    values['numeroCliente'] = 2;
    values['solicitudLinea'] = 1;
    values['tipoSolicitud'] = 'xx';
    values['estatusSolicitud'] = 'xx';

    values.montoFrecuenciaDisposicion = values.montoFrecuenciaDisposicion.replace('$', '');
    values.montoFrecuenciaDisposicion = values.montoFrecuenciaDisposicion.replace(this.rgxComa, '');

    values.montoLineaCredito = values.montoLineaCredito.replace('$', '');
    values.montoLineaCredito = values.montoLineaCredito.replace(this.rgxComa, '');

    values.montoFrecuenciaPago = values.montoFrecuenciaPago.replace('$', '');
    values.montoFrecuenciaPago = values.montoFrecuenciaPago.replace(this.rgxComa, '');

    this.creditoService.guardarSolicitud(values).subscribe(
      (resp: ResponseSP) => {
        console.log(resp);
        this.hideCredito = false;
        // errorClave: "000"
        // errorDescripcion: "Ejecucin Exitosa"
        // errorSp: "mgsp_SolicitudesLineasCredito"
        // solicitudLinea: "1"
    });
  }

}
