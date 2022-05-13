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
      destCred: ['', [Validators.required]],
      origenRecu: ['', [Validators.required]],
      noDispoCre: ['', [Validators.required]],
      frecDispo: ['', [Validators.required]],
      monFreDispo: ['', [Validators.required]],
      noPagoCre: ['', [Validators.required]],
      frecCredi: ['', [Validators.required]],
      frecMonto: ['', [Validators.required]],
      moneda: ['', [Validators.required]],
      montoSol: ['', [Validators.required]],
    });
  }

  open() {
    this.router.navigate(['mod-linecredi'], { relativeTo: this.route.parent });
  }

  validarCliente(): void {
    this.creditoService.validarCliente(this.numeroClienteInput.value).subscribe((resp: ResponseSP) => {
        console.log(resp);
        if ( resp.data.length > 0 ) {

          this.disValidate = true;
          this.numeroClienteInput.disable();

          this.datosCliente = {
            sucursal: resp.data[0]['sucursalDesc'],
            promotor: resp.data[0]['clavePromotorDesc'],
            estatusCliente: resp.data[0]['estatusCliente'],
            nombreCompleto: resp.data[0]['nombreCompleto'],
            razonSocial: resp.data[0]['razonSocial'],
            rfc: resp.data[0]['rfc'],
            estatusSolicitud: '',
          };
          this.collapseCreditoForm = false;
        } else {
          this.collapseCreditoForm = true;
        }
    });
  }

  cancelar(): void {

  }

  guardar(): void {
    const values = this.creditoForm.value;
    console.log(values);
    this.creditoService.guardarSolicitud(values).subscribe(
      (resp: any) => {
        console.log(resp);
    });
  }

}
