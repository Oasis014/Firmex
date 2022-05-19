import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailMask from 'text-mask-addons/dist/emailMask';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CreditoService } from '../services/credito.service';

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

  constructor(
    public toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private creditoService: CreditoService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log(`el cliente es ${id}`);
    this.userInfo.numeroCliente = id;
    this.getCustomerInfo(id);

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

  }

  getCustomerInfo(id: number): void {
    this.creditoService.validarCliente(id).subscribe((res: any) => {
      console.log(res);
    });
  }

  saveData(): void {
    let rgxComa = /,/gi;
    let values = this.datosCreditoForm.value;
    console.log(values);
    values.montoSolicitado = values.montoSolicitado.replace('$', '');
    values.montoSolicitado = values.montoSolicitado.replace(rgxComa, '');

    values['lineaCredito'] = 999;       // IN `InLineaCredito` INTEGER,
    values['InSolicitudLinea'] = 999;   // IN `InSolicitudLinea` INTEGER,
    values['InConsecutivo'] = 999;      // IN `InConsecutivo` INTEGER,
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

}