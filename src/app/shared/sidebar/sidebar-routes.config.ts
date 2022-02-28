// Menu oacis
import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
//*******************************************************23/octubre/2021*********************************************************************************************************************************************
    {
        path: 'javascript:;', title: 'Cliente', icon: 'fa fa-address-book', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zcliente/list-cliente', title: 'Alta de Cliente', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Reporte del Cliente', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Reporte de Consulta al Buro', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
        },

        {
            path: '', title: 'Solicitudes', icon: 'fa fa-money', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                { path: '/zlcredito/list-credi', title: 'Linea de Credito', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [ ] },
                { path: 'javascript:;', title: 'Credito', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '/zlcredito/list-revol', title: 'Activación del Cliente', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            ]
        },

     {
            path: '', title: 'Línea de Crédito', icon: 'fa fa-money', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                { path: '/zcliente/btnlist', title: 'Revolvente', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '/zcliente/btnlist', title: 'Terminos y Condiciones', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '/zcliente/btnlist', title: 'Contrato', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            ]
        },

    {
        path: '', title: 'Analisis Crédito', icon: 'fa fa-clock-o', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zcliente/btnlist', title: 'Tradicional', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Parametrico', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
        },



    {
        path: '', title: 'Operación de Crédito', icon: 'zmdi zmdi-balance-wallet', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zcliente/btnlist', title: 'Disposiciones', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Cobranza', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Estado de Cuenta', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

        ]
    },


{
        path: '', title: 'Info. Financiera', icon: 'fa fa-check-circle', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zcliente/btnlist', title: 'Balanza', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Auxiliares', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Balance General', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Estado de Resultados', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Movimientos de capital', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Flujo de efectivo', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },


{
        path: '', title: 'Rep. Gerenciales', icon: 'fa fa-asl-interpreting', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zcliente/btnlist', title: 'Indicadores financieros', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Indicadores operativos', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Bitácora de operación', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },

{
        path: '', title: 'Administración', icon: 'fa fa-desktop', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/zcliente/btnlist', title: 'Def. de producto', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Catalogos', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Def. Operativo contable', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Roles', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/zcliente/btnlist', title: 'Usuarios', icon: 'zmdi zmdi-dot-circle-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

        ]
    },



];
