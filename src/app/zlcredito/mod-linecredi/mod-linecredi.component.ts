import { Component, OnInit } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailMask from 'text-mask-addons/dist/emailMask';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { CreditoService } from '../services/credito.service';
import { Catalogos } from 'src/app/shared/models/catalogos';
import swal from 'sweetalert2';

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
    public toastrService: ToastrService,
    private route: ActivatedRoute,
    private creditoService: CreditoService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.lineaCreditoId = parseInt(this.route.snapshot.params.cred);
    console.log(`el cliente es ${id} y su numero de credito es: ${this.lineaCreditoId}`);
    this.userInfo.numeroCliente = id;
    this.getCustomerInfo(id);
    this.getLineInfo(id, this.lineaCreditoId);
    this.getCreditList();

    this.datosCreditoForm = this.formBuilder.group({
      tipoCredito: ['', [
        Validators.required,
        Validators.maxLength(2)
      ]],
      noCuenta: ['', [
        Validators.required,
        Validators.maxLength(250),
        Validators.pattern("^[0-9]*$")
      ]],
      montoSolicitado: ['', [
        Validators.required, Validators.maxLength(21)
      ]],
    });

    this.getCatalogoTipoCredito();

  }

  getCustomerInfo(id: number): void {
    this.creditoService.validarCliente(id).subscribe((res: any) => {
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
      this.lineaCredito = res.data[0];
    });
  }

  saveData(): void {
    let rgxComa = /,/gi;
    let values = this.datosCreditoForm.value;
    values.montoSolicitado = values.montoSolicitado.replace('$', '');
    values.montoSolicitado = values.montoSolicitado.replace(rgxComa, '');

    values['lineaCredito'] = parseInt(this.lineaCredito.lineaCredito);
    values['solicitudLinea'] = parseInt(this.lineaCredito.solicitudLinea);
    values['consecutivo'] = 0;

    this.creditoService.solicitudCredito(values).subscribe((res: any) => {
      if ( '000' === res.errorClave ) {
        this.toastrService.success('Solicitud de crédito guardada con éxito.', '');
        this.getCreditList();
      }
    });
  }

  getCreditList(): void {
    this.creditoService.getListCredit(this.lineaCreditoId).subscribe((res: any) => {
      this.listCreditos = res.data;
    });
  }

  confirmarBorrarElemento(consecutivo: string): void {
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
      if ( 'undefined' !== typeof(result['value']) && result['value'] == true ) {
        this.deleteCredit(parseInt(consecutivo));
      }
    })

  }

  deleteCredit(consecutivo: number): void {
    this.creditoService.borrarSolicitudCredito(this.lineaCreditoId, consecutivo).subscribe(
      (res: any) => {
        if ( '000' === res.errorClave ) {
          this.toastrService.success('Registro borrado exitosamente.', '');
        }
    });
  }

  getCatalogoTipoCredito(): void {
    this.creditoService.catalogoTipoCredito().subscribe(
      (res: Catalogos[]) => {
      this.listTipoCredito = res;
    });
  }

}
