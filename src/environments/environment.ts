// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const host = `http://firmex-back.local/`;

export const environment = {
  production: false,
  api: {
    client: {
      getDomicilio: `${host}DomicilioMostrar.php`,
      deleteDomicilio: `${host}DomicilioBorrar.php`,
      mostrarTodos: `${host}mostrarTodos.php`,
      mostrarDomicilio: `${host}DomicilioMostrar.php`,
      selecionarGenerales: `${host}SelecGenerales.php`,
      domicilio: `${host}Domicilio.php`,
    },
    catalogos: {
      catalogoActdet: `${host}CatalogoActdet.php`,
      catalogoActeco: `${host}CatalogoActeco.php`,
      catalogoBancos: `${host}CatalogoBancos.php`,
      catalogoCatpue: `${host}CatalogoCatpue.php`,
      catalogoCodId: `${host}CatalogoCod_id.php`,
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
      catalogoDocumentType: `${host}CatalogonaCION.php`,
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
