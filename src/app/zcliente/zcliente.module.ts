import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { ClienteRoutingModule } from './zcliente-routing.module';
import { GeneralModule } from '../general/general.module';
// Botones
import { BtnListComponent } from './btnlist/btnlist.component';
// Listados
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { ListClienteFComponent } from './list-clienteF/list-clienteF.component';
import { ListClienteMComponent } from './list-clienteM/list-clienteM.component';
// Mantenimiento Cliente Persona Fisica
import { QryClienteComponent } from './qry-cliente/qry-cliente.component';
import { QryClienteMComponent } from './qry-clienteM/qry-clienteM.component';
// Edición o Nuevo Prospecto Cliente Persona Fisica
import { ModClienteComponent } from './mod-moral/mod-cliente.component';
import { ModMoralComponent } from './mod-moral/mod-moral.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
/*import { ActivEcoComponent } from './mod-moral/activ-eco.component';*/
/*import { CuentaBanComponent } from './mod-moral/cuenta-bancaria.component';*/
//Pruebas
import { PhpFuncionaComponent } from './php-funciona/php-funciona.component';
import { PhpPruebaComponent } from './php-prueba/php-prueba.component';
import { PipeClienteComponent } from './list-cliente/filter-pipe';

@NgModule({
  declarations: [
    //Prueba
    PipeClienteComponent,
    PhpPruebaComponent,
    PhpFuncionaComponent,
    // Botones
    BtnListComponent,
    // Listados
    ListClienteComponent,
    ListClienteFComponent,
    ListClienteMComponent,
    // Datos Persona Fisica
    QryClienteComponent,
    QryClienteMComponent,
    // Mantenimiento o Nuevo Persona Fisica
    ModClienteComponent,
    ModMoralComponent,
    EditarClienteComponent,
    /*ActivEcoComponent,*/
    /*CuentaBanComponent*/


],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    GeneralModule,
    HttpClientModule
  ]
})
export class ClienteModule { }
