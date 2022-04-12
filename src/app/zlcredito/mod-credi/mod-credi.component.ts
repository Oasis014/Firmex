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
  selector: 'app-mod-credi',
  templateUrl: './mod-credi.component.html',
  styleUrls: ['./mod-credi.component.scss']
})
export class ModCrediComponent implements OnInit {

 

  constructor(
    public toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  

  
  isCollapsed8 = true;

  //Objetos Desabilitados Cliente
 
 
  isCollapsedPrueba1 = false;

  
  retorno = {
    noCliente: null,
    errorClave: null,
    errorSp: null,
    errorDescripcion: null
  }

  retorno2 = {
    errorClave: null,
    errorSp: null,
    errorDescripcion: null
  }

  retornoID = {
    Sucursal: null,
    RazonSocial: null,
    ClavePromotor: null,
    EstatusCliente: null
  }

  ngOnInit() {
   
  
  }

  
  open() {  this.router.navigate(['mod-linecredi'], { relativeTo: this.route.parent }); }

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