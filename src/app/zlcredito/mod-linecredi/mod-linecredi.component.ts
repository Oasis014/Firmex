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

  // Objetos Ocultos Cliente
  isCollapsed = false;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;
  isCollapsed7 = true;
  isCollapsed8 = true;

  //Objetos Desabilitados Cliente
  disabledGen1 = false;
  disabledGen2 = false;
  disabledGen3 = false;
  disabledGen4 = false;
  disabledGen5 = false;
  disabledGen6 = false;
  disabledGen7 = false;
  disabledGen8 = false;
  disabledGen9 = false;
  disabledGen10 = false;
  disabledGen11 = false;
  disabledGen12 = false;
  disabledGen13 = false;
  disabledGen14 = false;
  disabledGen15 = true;
  disabledGen16 = true;
  disabledGen17 = false;
  disabledGen18 = false;
  disabledGen19 = false;
  disabledGen20 = false;
  disabledGen21 = false;
  disabled1 = true;
  disabled2 = true;
  disabled3 = true;
  disabled4 = true;
  disabled5 = true;
  disabled6 = true;
  disabled7 = true;
  disabled8 = true;
  disabled9 = true;
  disabled10 = false;
  disabled11 = true;
  disabled12 = false;
  disabled13 = false;
  disabled14 = false;
  isCollapsedPrueba2 = true;
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