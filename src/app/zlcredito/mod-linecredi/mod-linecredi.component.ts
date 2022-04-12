import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
// Importacione de funcion de mascaras 
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormControl } from '@angular/forms';
import emailMask from 'text-mask-addons/dist/emailMask';
// Fin de importaciones
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mod-linecredi',
  templateUrl: './mod-linecredi.component.html',
  styleUrls: ['./mod-linecredi.component.scss']
})
export class ModLineCrediComponent implements OnInit {
  constructor(
    public toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  isCollapsedPrueba2 = true;
  isCollapsedPrueba1 = false;
  
  retorno = {
    noCliente: null,
    errorClave: null,
    errorSp: null,
    errorDescripcion: null
  }

  ngOnInit() { }  
  open() {  this.router.navigate(['mod-credi'], { relativeTo: this.route.parent }); }

//Objetos de Mascaras
  mask: Array<string | RegExp>;
  efectivo = [ {
    mask: createNumberMask({allowDecimal: true}),
  },
  ];

  email = [{
    mask: emailMask,
  }];

  number = [{
    mask: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  }];

  number2 = [{
    mask: [ /\d/, /\d/, /\d/, /\d/ ],
  }];
  
//Fin Objetos de Mascaras
}