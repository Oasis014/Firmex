import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-php-prueba',
  templateUrl: './php-prueba.component.html',
  styleUrls: ['./php-prueba.component.scss']
})
export class PhpPruebaComponent implements OnInit {
usuario = null as any;
  user = {
    id_usuario: null,
    nombre: null,
    apellido: null,
    correo: null,
    numero: null,
    clave: null
  }
  constructor(private router: Router,private route: ActivatedRoute,private usuariosService: ClienteService ){ }
  ngOnInit() {
  }
  Agregar(){
    this.usuariosService.agregar(this.user).subscribe(datos =>{ });
  }
open() {this.router.navigate(['list-cliente'], { relativeTo: this.route.parent }); }
}
