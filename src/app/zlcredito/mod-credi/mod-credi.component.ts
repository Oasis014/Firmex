import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailMask from 'text-mask-addons/dist/emailMask';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CreditoService } from '../services/credito.service';
import { ResponseSP } from 'src/app/shared/models/responseSP';
import { Catalogos } from 'src/app/shared/models/catalogos';

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
    sucursal: 'prueba',
    promotor: 'prueba',
    estatusCliente: 'prueba',
    nombreCompleto: 'prueba',
    razonSocial: 'prueba',
    rfc: 'prueba',
    estatusSolicitud: 'prueba',
  };
  creditoForm: FormGroup;
  disValidate = false;
  hideCredito = true;
  rgxComa = /,/gi;
  disSaveBtn = false;
  listDivisas: Catalogos[];
  idSolicitudLinea: number;

  constructor(
    public toastrService: ToastrService,
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
        Validators.maxLength(250),
      ]],
      origenRecursos:             ['', [
        Validators.required,
        Validators.maxLength(250),
      ]],
      numeroDisposiciones:        ['', [
        Validators.required,
        Validators.maxLength(5),
        Validators.max(65535),
        Validators.pattern("^[0-9]*$")
      ]],
      frecuenciaDisposicion:      ['', [
        Validators.required,
        Validators.maxLength(100),
      ]],
      montoFrecuenciaDisposicion: ['', [
        Validators.required,
        Validators.maxLength(21),
      ]],
      numeroPagos:                ['', [
        Validators.required,
        Validators.maxLength(5),
        Validators.max(65535),
        Validators.pattern("^[0-9]*$"),
      ]],
      frecuenciaPago:             ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      montoFrecuenciaPago:        ['', [
        Validators.required,
        Validators.maxLength(21),
      ]],
      divisa:                     ['', [
        Validators.required,
        Validators.maxLength(4)
      ]],
      montoLineaCredito:          ['', [
        Validators.required,
        Validators.maxLength(21)
      ]],
    });
    // IN `SolicitudLinea` INTEGER, 
    // IN `NumeroCliente` INTEGER, 
    // IN `TipoSolicitud` CHAR(2), 
    // IN `EstatusSolicitud` CHAR(2), 
    // IN `DestinoCredito` CHAR(250),
    // IN `OrigenRecursos` CHAR(250),
    // IN `MontoFrecuenciaDisposicion` DECIMAL(15,2),
    // IN `FrecuenciaDisposicion` CHAR(100),
    // IN `NumeroDisposiciones` SMALLINT,
    // IN `MontoFrecuenciaPago` DECIMAL(15,2),
    // IN `FrecuenciaPago` CHAR(100),
    // IN `NumeroPagos` SMALLINT,
    // IN `Divisa` CHAR(2),
    // IN `MontoLineaCredito` DECIMAL(15,2),
    // IN `FechaAlta` DATE,


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

    this.catalogoDivisas();
  }

  validarCliente(): void {
    this.creditoService.validarCliente(this.numeroClienteInput.value).subscribe((resp: ResponseSP) => {
        console.log(resp);

        if ( '901' === resp.errorClave ) {
          this.toastrService.error('El número de cliente, no existe.', 'Error');
        } else {
          if ( '0801' === resp.errorClave ) {
            this.toastrService.warning('El cliente tiene solicitudes pendientes.', 'Alerta');
          } else {
            this.toastrService.success('Consulta realizada con éxito.', '');
          }
          this.disValidate = true;
          this.numeroClienteInput.disable();
          this.collapseCreditoForm = false;
          this.disSaveBtn = false;

          if ( resp.data.length > 0 && null != resp.data[0] ) {
            this.datosCliente = {
              sucursal: resp.data[0]['sucursalDesc'],
              promotor: resp.data[0]['clavePromotorDesc'],
              estatusCliente: resp.data[0]['estatusCliente'],
              nombreCompleto: resp.data[0]['nombreCompleto'],
              razonSocial: resp.data[0]['razonSocial'],
              rfc: resp.data[0]['rfc'],
              estatusSolicitud: '',
            };
          }

        }
    });
  }

  cancelar(): void {

  }

  guardar(): void {
    const values = this.creditoForm.value;
    values['numeroCliente'] = this.numeroClienteInput.value;
    values['solicitudLinea'] = 0;
    values['tipoSolicitud'] = '01';
    values['estatusSolicitud'] = '01';

    values.montoFrecuenciaDisposicion = values.montoFrecuenciaDisposicion.replace('$', '');
    values.montoFrecuenciaDisposicion = values.montoFrecuenciaDisposicion.replace(this.rgxComa, '');

    values.montoLineaCredito = values.montoLineaCredito.replace('$', '');
    values.montoLineaCredito = values.montoLineaCredito.replace(this.rgxComa, '');

    values.montoFrecuenciaPago = values.montoFrecuenciaPago.replace('$', '');
    values.montoFrecuenciaPago = values.montoFrecuenciaPago.replace(this.rgxComa, '');

    this.creditoService.guardarSolicitud(values).subscribe(
      (resp: ResponseSP) => {
        console.log(resp);
        if ( '000' === resp.errorClave ) {
          this.toastrService.success('Registro guardado con éxito.', '');
          this.hideCredito = false;
          this.creditoForm.disable();
          this.disSaveBtn = true;
          this.idSolicitudLinea = parseInt(resp.solicitudLinea);
        }
    });
  }

  catalogoDivisas(): void {
    this.creditoService.catalogoDivisas().subscribe(
      (res: Catalogos[]) => {
        this.listDivisas = res;
    });
  }

}
