// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const host = 'http://127.0.0.1/insert/'
export const environment = {
  production: false,
  api: {
    cliente: {
      documentacion: `${host}documentacion.php`,
      generalValidar: `${host}GeneralValidar.php`,
      generales: `${host}Generales.php`,
      domicilio:  `${host}Domicilio.php`,
      guardarDomicilio: `${host}Domicilio.php`,
      borrarDomicilio: `${host}DomicilioBorrar.php`,
      consultarDomicilio: `${host}DomiciliosConsulta.php`,
      personales: `${host}Personales.php`,
      comerciales: `${host}Comerciales.php`,
      bancarias: `${host}Bancarias.php`,
      economicas: `${host}Economica.php`,

      acciones: `${host}Acciones.php`,
      cuentasBancarias: `${host}CuentaBancaria.php`,
      grupoSocioeconomico: `${host}GrupoSocioeconomico.php`,
      grupoRiesgoComun: `${host}GrupoRiesgoComun.php`,
      partesRelacionadas: `${host}PartesRelacionadas.php`,
      personaMoral: `${host}ObtenerPerMoral.php`,
      personaFisica: `${host}ObtenerPerFisica.php`,
      cedulaCliente: `${host}CedulaCliente.php`,
    },
    catalogos: {
      catalogoActdet: `${host}CatalogoActdet.php`,
      catalogoActeco: `${host}CatalogoActeco.php`,
      catalogoBancos: `${host}CatalogoBancos.php`,
      catalogoCatpue: `${host}CatalogoCatpue.php`,
      catalogoCod_id: `${host}CatalogoCod_id.php`,
      catalogoEdociv: `${host}CatalogoEdociv.php`,
      catalogoIdentif: `${host}CatalogoIdentif.php`,
      catalogoPerjur: `${host}CatalogoPerjur.php`,
      catalogoProfes: `${host}CatalogoProfes.php`,
      catalogoSexo: `${host}CatalogoSexo.php`,
      catalogoStscte: `${host}CatalogoStscte.php`,
      catalogoTipded: `${host}CatalogoTipded.php`,
      catalogoTipdom: `${host}CatalogoTipdom.php`,
      catalogoTipgse: `${host}CatalogoTipgse.php`,
      catalogoTipman: `${host}CatalogoTipman.php`,
      catalogoTipred: `${host}CatalogoTipred.php`,
      catalogoTiprel: `${host}CatalogoTiprel.php`,
      catalogoTiprpe: `${host}CatalogoTiprpe.php`,
      catalogoTiprrc: `${host}CatalogoTiprrc.php`,
      catalogoTiptel: `${host}CatalogoTiptel.php`,
      catalogonaCION: `${host}CatalogonaCION.php`,

      catalogoSucursales: `${host}CatalogoSucursales.php`,
      catEstado: `${host}CatalogoEstado.php`,
      catMunicipio: `${host}CatalogoMunicipio.php`,
      catColonia: `${host}CatalogoColonia.php`,
      catalogoCodPostal: `${host}CatalogoCodPostal.php`,
      catPromotor: `${host}CatalogoPromotor.php`,
      catalogos: `${host}catalogos.php`,
    },
    archivos: `${host}documentacion/user_`,
    solicitudesCredito: {
      validaCliente: `${host}SolicitudValidar.php`,
      lineaCredito: `${host}SolicitudLineaCredito.php`,
      solicitudCredito: `${host}SolicitudCredito.php`,
      solicitudCreditoBorrar: `${host}SolicitudCreditoBorrar.php`
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
