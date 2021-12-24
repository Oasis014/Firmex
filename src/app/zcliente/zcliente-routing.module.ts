import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ModClienteComponent } from './mod-cliente/mod-cliente.component';
import { ModMoralComponent } from './mod-moral/mod-moral.component';
//Pruebas
import { PhpFuncionaComponent } from './php-funciona/php-funciona.component';
import { PhpPruebaComponent } from './php-prueba/php-prueba.component';

const routes: Routes = [
  {
    path: '',
    children: [
    // Prueba
    	 {
                   path: 'php-funciona',
                   component: PhpFuncionaComponent,
                   data: {
                     title: 'prueba'
                     }
                   },
	 {
               path: 'php-prueba',
               component: PhpPruebaComponent,
               data: {
                 title: 'prueba'
                 }
               },
// Botones
	 {
               path: 'btnlist',
               component: BtnListComponent,
               data: {
                 title: 'lista'
                 }
               },

// Listados de Prospectos
{

                path: 'list-cliente',
                component: ListClienteComponent,
                data: {
                 title: 'listado de clientes'
                 }
                },
{

                path: 'list-clienteF',
                component: ListClienteFComponent,
                data: {
                 title: 'listado de clientes'
                 }
                },
{

                path: 'list-clienteM',
                component: ListClienteMComponent,
                data: {
                 title: 'listado de clientes'
                 }
                },

// Datos Persona Fisica
{
                path: 'qry-cliente',
                component: QryClienteComponent,
                data: {
                  title: 'cliente'
                }
              },
{
                path: 'qry-clienteM',
                component: QryClienteMComponent,
                data: {
                  title: 'cliente'
                }
              },

// Mantenimiento o Nuevo Persona Fisica
{
                    path: 'mod-cliente',
                    component: ModClienteComponent,
                    data: {
                      title: 'Cliente'
                      }
                    },
{
                    path: 'mod-moral',
                    component: ModMoralComponent,
                    data: {
                      title: 'Cliente'
                      }
                    },




    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
