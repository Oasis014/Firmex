import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-php-funciona',
  templateUrl: './php-funciona.component.html',
  styleUrls: ['./php-funciona.component.scss']
})
export class PhpFuncionaComponent implements OnInit {
cliente = null as any;
dato = {
    Id: null,
    Calle: null,
    NoEx: null,
    NoIn: null,
    CodPos: null,
    Colonia: null,
    Municipio: null,
    Estado: null,
    Pais: null,
    TipoDom: null
  }

open() {this.router.navigate(['list-cliente'], { relativeTo: this.route.parent }); }

  constructor(public toastr: ToastrService, private router: Router,
                                        private route: ActivatedRoute, private clienteService: ClienteService) { }

  Agregar(){
      this.clienteService.agregar2(this.dato).subscribe(datos =>{
      });
    }

  typeSuccess() {
        this.toastr.success('Modificado con Exito', 'Guardado');
    }

      ngOnInit() {
      }
}
