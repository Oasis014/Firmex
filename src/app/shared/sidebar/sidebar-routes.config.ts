// Menu oacis
import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
//*******************************************************23/octubre/2021*********************************************************************************************************************************************
    {
        path: 'javascript:;', title: 'Cliente', icon: 'fa fa-address-book', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zcliente/list-cliente', title: 'Alta de Cliente', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Reporte del Cliente', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Reporte de Consulta al Buro', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
        },

        {
            path: '', title: 'Solicitudes', icon: 'fa fa-money', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                { path: '/zlcredito/list-revol', title: 'Linea de Credito', icon: 'zmdi zmdi-dot-circle-alt', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                  {  path: '/zlcredito/list-revol', title: 'Captura', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                  {  path: '/zlcredito/list-revol', title: 'Terminada', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                  {  path: '/zlcredito/list-revol', title: 'Aperturada', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
                  {  path: '/zlcredito/list-revol', title: 'Cancelada', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []}
                ] },
                { path: 'javascript:;', title: 'Credito', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '/zlcredito/list-revol', title: 'Activación del Cliente', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            ]
        },

     {
            path: '', title: 'Línea de Crédito', icon: 'fa fa-money', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                { path: '/zlcredito/list-revol', title: 'Revolvente', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: 'javascript:;', title: 'Terminos y Condiciones', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: 'javascript:;', title: 'Contrato', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            ]
        },

    {
        path: '', title: 'Analisis Crédito', icon: 'fa fa-clock-o', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zanacredi/list-tradi', title: 'Tradicional', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Parametrico', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
        },



    {
        path: '', title: 'Operación de Crédito', icon: 'zmdi zmdi-balance-wallet', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zcarcre/list-credi', title: 'Disposiciones', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcarcre/list-cobra', title: 'Cobranza', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Estado de Cuenta', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

        ]
    },


{
        path: '', title: 'Info. Financiera', icon: 'fa fa-check-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: 'javascript:;', title: 'Balanza', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Auxiliares', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Balance General', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Estado de Resultados', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Movimientos de capital', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Flujo de efectivo', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },


{
        path: '', title: 'Rep. Gerenciales', icon: 'fa fa-asl-interpreting', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/dashboard/ecommerce-v1', title: 'Indicadores financieros', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Indicadores operativos', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Bitácora de operación', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

{
        path: '', title: 'Administración', icon: 'fa fa-desktop', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: 'javascript:;', title: 'Def. de producto', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Catalogos', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Def. Operativo contable', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Roles', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Usuarios', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

        ]
    },



];
