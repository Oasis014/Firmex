import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Domicilio } from '../shared/models/domicilio';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly url = 'http://127.0.0.1/insert/';
  private readonly catalogosUrl = environment.api.catalogos;
  private readonly clienteUrl = environment.api.cliente;


  constructor(
    private http: HttpClient,
    private readonly httpService: HttpService
  ) { }

  /** DATOS GENERALES */
  agregar9(usuario: any) {
    return this.httpService.post(this.clienteUrl.generalValidar, usuario);
  }

  agregar(usuario: any) {
    return this.http.post(this.clienteUrl.generales, JSON.stringify(usuario));
  }

  /* Servicios Domicilio */
  agregarDomicilio(domicilio: Domicilio): Observable<any> {
    return this.http.post(this.clienteUrl.guardarDomicilio, domicilio);
  }

  // domicilios de un cliente
  getDomicilio(params: {userId: number}): Observable<any> {
    return this.httpService.get(this.clienteUrl.domicilio, params);
  }

  // un domicilio de cliente
  consultar(params: {userId: number, domId: string}): Observable<any> {
    return this.httpService.get(this.clienteUrl.domicilio, params);
  }

  domborrar(params: any): Observable<any> {
      return this.httpService.delete(this.clienteUrl.domicilio, params);
    }

  /* Servicios Domicilio */


  /** seccion: ACTIVIDAD Y REFRENCIA ... Actividad Economica */
  agregar4(arreglo: any): Observable<any> {
    return this.http.post(`${this.url}Economica.php`, JSON.stringify(arreglo));
  }

  borrarActividadEconomica(arreglob: any) {
    return this.httpService.delete(this.clienteUrl.economicas, arreglob);
  }

  getActiEco(userId: number|string) {
    return this.httpService.get(`${this.url}Economica.php`, {'userId': userId});
  }

  /** seccion: ACTIVIDAD Y REFRENCIA ... Referencias Personales */
  guardaReferenciaPersonal(referencia: any): Observable<any> {
    return this.httpService.post(this.clienteUrl.personales, referencia);
  }

  actualizaReferenciaPersonal(referencia: any): Observable<any> {
    return this.httpService.put(this.clienteUrl.personales, referencia);
  }

  getPersonales(id: number|string): Observable<any> {
    return this.httpService.get(this.clienteUrl.personales, {'userId': id});
  }

  borrarReferenciaPersonal(params: {NumeroCliente: number, Consecutivo: number}): Observable<any> {
    return this.httpService.delete(this.clienteUrl.personales, params);
  }

  /** seccion: ACTIVIDAD Y REFRENCIA ... Referencias Comerciales  */
  guardaReferenciaComercial(usuario: any): Observable<any> {
    return this.httpService.post(this.clienteUrl.comerciales, usuario);
  }

  actualizaReferenciaComercial(usuario: any): Observable<any> {
    return this.httpService.put(this.clienteUrl.comerciales, usuario);
  }

  getComerciales(id: number|string): Observable<any> {
    return this.httpService.get(this.clienteUrl.comerciales, {'userId': id});
  }

  borrarReferenciaComercial(params: {NumeroCliente: number, Consecutivo: number}): Observable<any> {
    return this.httpService.delete(this.clienteUrl.comerciales, params);
  }

  /** seccion: ACTIVIDAD Y REFRENCIA ... Referencias BAncarias */
  guardaReferenciaBancaria(usuario: any): Observable<any> {
    return this.httpService.post(this.clienteUrl.bancarias, usuario);
  }

  actualizaReferenciaBancaria(usuario: any): Observable<any> {
    return this.httpService.put(this.clienteUrl.bancarias, usuario);
  }

  getBancarias(id: number|string): Observable<any> {
    return this.httpService.get(this.clienteUrl.bancarias, {'userId': id});
  }

  borrarReferenciaBancaria(params: {NumeroCliente: number, Consecutivo: number}): Observable<any> {
    return this.httpService.delete(this.clienteUrl.bancarias, params);
  }


  /** seccion: CUENTAS BANCARIAS ... ACCIONES */
  agregarAccion(accion: any): Observable<any> {
    return this.httpService.post(this.clienteUrl.acciones, accion);
  }

  actualizarAccion(accion: any): Observable<any> {
    return this.httpService.put(this.clienteUrl.acciones, accion);
  }

  getAcciones(id: number|string) {
    return this.httpService.get(this.clienteUrl.acciones, { userId: id });
  }

  borrarAccion(params: {NumeroCliente: number, Consecutivo: number}): Observable<any> {
    return this.httpService.delete(this.clienteUrl.acciones, params);
  }

  /** seccion: CUENTAS BANCARIAS ... CUENTAS BANCARIAS */
  agregarCuentaBancaria(cuenta: any): Observable<any> {
    return this.httpService.post(this.clienteUrl.cuentasBancarias, cuenta);
  }

  actualizarCuentaBancaria(accion: any): Observable<any> {
    return this.httpService.put(this.clienteUrl.cuentasBancarias, accion);
  }

  getCuenta(id: number|string): Observable<any> {
    return this.httpService.get(this.clienteUrl.cuentasBancarias, { userId: id});
  }

  borrarCuentaBancaria(params: {NumeroCliente: number, Consecutivo: number}): Observable<any> {
    return this.httpService.delete(this.clienteUrl.cuentasBancarias, params);
  }

  /** seccion: CUENTAS BANCARIAS ... PARTES RELACIONADAS */
  agregarParteRelacionada(parte: any): Observable<any> {
    return this.httpService.post(this.clienteUrl.partesRelacionadas, parte);
  }

  actualizarParteRelacionada(accion: any): Observable<any> {
    return this.httpService.put(this.clienteUrl.partesRelacionadas, accion);
  }

  getRelacional(id: number|string): Observable<any> {
    return this.httpService.get(this.clienteUrl.partesRelacionadas, {userId: id});
  }

  borrarParteRelacionada(params: {NumeroCliente: number, Consecutivo: number}): Observable<any> {
    return this.httpService.delete(this.clienteUrl.partesRelacionadas, params);
  }

  /** seccion: CUENTAS BANCARIAS ... GRUPO SOCIECONOMICO */
  agregarGrupoSocioeconomico(grupo: any): Observable<any> {
    return this.httpService.post(this.clienteUrl.grupoSocioeconomico, grupo);
  }

  actualizarGrupoSocioeconomico(accion: any): Observable<any> {
    return this.httpService.put(this.clienteUrl.grupoSocioeconomico, accion);
  }

  getSocioEco(id: number|string): Observable<any> {
    return this.httpService.get(this.clienteUrl.grupoSocioeconomico, {userId: id});
  }

  borrarGrupoSocioeconomico(params: {NumeroCliente: number, Consecutivo: number}): Observable<any> {
    return this.httpService.delete(this.clienteUrl.grupoSocioeconomico, params);
  }

  /** seccion: CUENTAS BANCARIAS ... GRUPO RIESGO COMUN */
  agregarGrupoRiesgoComun(grupo: any) {
    return this.httpService.post(this.clienteUrl.grupoRiesgoComun, grupo);
  }

  actualizarGrupoRiesgoComun(accion: any): Observable<any> {
    return this.httpService.put(this.clienteUrl.grupoRiesgoComun, accion);
  }

  getRiesgoComun(id: number|string): Observable<any> {
    return this.httpService.get(this.clienteUrl.grupoRiesgoComun, {userId: id});
  }

  borrarGrupoRiesgoComun(params: {NumeroCliente: number, Consecutivo: number}): Observable<any> {
    return this.httpService.delete(this.clienteUrl.grupoRiesgoComun, params);
  }


  /** DOCUMENTOS */
  guardarDocumento(file: File, data: object): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(data));
    return this.httpService.postFile(this.clienteUrl.documentacion, formData);
  }

  obtenerDocumentos(id: number): Observable<any> {
    let params = {
      id: id
    };
    return this.httpService.get(this.clienteUrl.documentacion, params);
  }

  borrarDocumento(params: any): Observable<any> {
    return this.httpService.delete(this.clienteUrl.documentacion, params);
  }






  catSucursales(): Observable<any> {
    return this.httpService.get(this.catalogosUrl.catalogoSucursales);
  }

  catPromotor(): Observable<any> {
    return this.httpService.get(this.catalogosUrl.catPromotor);
  }

  catEstado(): Observable<any> {
    return this.httpService.get(this.catalogosUrl.catEstado);
  }

  catMunicipio(estadoId: number|string): Observable<any> {
    let params = {
      estadoId: estadoId,
    };
    return this.httpService.get(this.catalogosUrl.catMunicipio, params);
  }

  catCol(estadoId: number|string, municipioId: number|string): Observable<any> {
    let params = {
      estadoId: estadoId,
      municipioId: municipioId
    };
    return this.httpService.get(this.catalogosUrl.catColonia, params);
  }

  catCP(estadoId: number|string, municipioId: number|string): Observable<any> {
    let params = {
      estadoId: estadoId,
      municipioId: municipioId
    };
    return this.httpService.get(this.catalogosUrl.catalogoCodPostal, params);
  }






  /*****************************************************************************
   * ***************************************************************************
   * ***************************************************************************
   */

  getListCliente() {
    return this.http.get(`${this.url}ObtenerPerCliente.php`);
  }

  getListFisica() {
    return this.http.get(`${this.url}ObtenerPerFisica.php`);
  }

  getDatosGeneralesFisica(id: number): Observable<any> {
    let params = {
      'userId': id
    };
    return this.httpService.get(this.clienteUrl.personaFisica, params);
  }

  getListMoral() {
    return this.http.get(`${this.url}ObtenerPerMoral.php`);
  }

  getDatosGeneralesMoral(id: number): Observable<any> {
    let params = {
      'userId': id
    };
    return this.httpService.get(this.clienteUrl.personaMoral, params);
  }




  getProveedores() {
    return this.http.get(`${this.url}ProveedoresMostrar.php`);
  }

  deleteDomicilio(domicilio: any) {
    return this.http.post(`${this.url}DomicilioBorrar.php`, JSON.stringify(domicilio));
  }

  mostrarTodos() {
    return this.http.get(`${this.url}mostrarTodos.php`);
  }


  select() {
    return this.http.get(`${this.url}SelecGenerales.php`);
  }

  agregarS(selec: any) {
    return this.http.post(`${this.url}SelecGenerales.php`, JSON.stringify(selec));
  }

  retorno(): Observable<any> {
    return this.http.get(`${this.url}Generales.php`);
  }

  retorno2(): Observable<any> {
    return this.http.get(`${this.url}GeneralValidar.php`);
  }

  retorno3() {
    return this.http.get(`${this.url}Domicilio.php`);
  }

  retornodomb() {
    return this.http.get(this.clienteUrl.borrarDomicilio);
  }

  perborrar(arreglo2b: any) {
    return this.http.post(`${this.url}PersonalesBorrar.php`, JSON.stringify(arreglo2b));
  }

  comborrar(arreglo3b: any) {
    return this.http.post(`${this.url}ComercialesBorrar.php`, JSON.stringify(arreglo3b));
  }

  proborrar(arreglo4b: any) {
    return this.http.post(`${this.url}ProveedoresBorrar.php`, JSON.stringify(arreglo4b));
  }

  banborrar(arreglo5b: any) {
    return this.http.post(`${this.url}BancariasBorrar.php`, JSON.stringify(arreglo5b));
  }

  accborrar(arreglob: any) {
    return this.http.post(`${this.url}AccionesBorrar.php`, JSON.stringify(arreglob));
  }

  cueborrar(arreglob: any) {
    return this.http.post(`${this.url}CuentasBanBorrar.php`, JSON.stringify(arreglob));
  }

  socborrar(arreglob: any) {
    return this.http.post(`${this.url}GrupoSocieconomicoBorrar.php`, JSON.stringify(arreglob));
  }

  relborrar(arreglob: any) {
    return this.http.post(`${this.url}ParteRelacionalBorrar.php`, JSON.stringify(arreglob));
  }

  comuborrar(arreglob: any) {
    return this.http.post(`${this.url}GrupoRiesgoComunBorrar.php`, JSON.stringify(arreglob));
  }

  retornoCon() {
    return this.http.get(this.clienteUrl.consultarDomicilio);
  }


  economicaconsultar(arreglob: any) {
    return this.http.post(`${this.url}ActividadEcoMostrar.php`, JSON.stringify(arreglob));
  }

  personalesconsultar(arreglo2b: any) {
    return this.http.post(`${this.url}PersonalesMostrar.php`, JSON.stringify(arreglo2b));
  }

  bancariasconsultar(arreglo5b: any) {
    return this.http.post(`${this.url}BancariasMostrar.php`, JSON.stringify(arreglo5b));
  }

  comercialesconsultar(arreglo3b: any) {
    return this.http.post(`${this.url}ComercialesMostrar.php`, JSON.stringify(arreglo3b));
  }

  proveedoresconsultar(arreglo4b: any) {
    return this.http.post(`${this.url}ProveedoresMostrar.php`, JSON.stringify(arreglo4b));
  }

  accioneconsultar(arreglo: any) {
    return this.http.post(`${this.url}AccionesMostrar.php`, JSON.stringify(arreglo));
  }

  cuentasbanconsultar(arreglo: any) {
    return this.http.post(`${this.url}CuentasBanMostrar.php`, JSON.stringify(arreglo));
  }

  relacionadasconsultar(arreglo: any) {
    return this.http.post(`${this.url}ParteRelacionalMostrar.php`, JSON.stringify(arreglo));
  }

  socioeconomicoconsultar(arreglo: any) {
    return this.http.post(`${this.url}GrupoSocieconomicoMostrar.php`, JSON.stringify(arreglo));
  }

  riesgocomunconsultar(arreglo: any) {
    return this.http.post(`${this.url}GrupoRiesgoComunMostrar.php`, JSON.stringify(arreglo));
  }


  agregar02(clienteMod: any) {
    return this.http.post(`${this.url}Domicilio.php`, JSON.stringify(clienteMod));
  }

  agregar3(usuario: any) {
    return this.http.post(`${this.url}CuentaBancaria.php`, JSON.stringify(usuario));
  }



  agregar5(usuario: any) {
    return this.http.post(`${this.url}Comerciales.php`, JSON.stringify(usuario));
  }

  agregar6(usuario: any) {
    return this.http.post(`${this.url}Personales.php`, JSON.stringify(usuario));
  }

  agregar7(usuario: any) {
    return this.http.post(`${this.url}Bancarias.php`, JSON.stringify(usuario));
  }

  agregar8(usuario: any) {
    return this.http.post(`${this.url}Proveedores.php`, JSON.stringify(usuario));
  }


  agregar10(usuario: any) {
    return this.http.post(`${this.url}Acciones.php`, JSON.stringify(usuario));
  }

  agregar11(usuario: any) {
    return this.http.post(`${this.url}CuentasBan.php`, JSON.stringify(usuario));
  }

  agregar12(usuario: any) {
    return this.http.post(`${this.url}ParteRelacional.php`, JSON.stringify(usuario));
  }

  agregar13(usuario: any) {
    return this.http.post(`${this.url}GrupoSocieconomico.php`, JSON.stringify(usuario));
  }

  agregar14(usuario: any) {
    return this.http.post(`${this.url}GrupoRiesgoComun.php`, JSON.stringify(usuario));
  }

  mostrarmoral(listado: any) {
    return this.http.post(`${this.url}MostrarMoral.php`, JSON.stringify(listado));
  }


  //Catalogo

  catActdet() {
    return this.http.get(this.catalogosUrl.catalogoActdet);
  }

  catActeco() {
    return this.http.get(this.catalogosUrl.catalogoActeco);
  }

  catBancos() {
    return this.http.get(this.catalogosUrl.catalogoBancos);
  }

  catCatpue() {
    return this.http.get(this.catalogosUrl.catalogoCatpue);
  }

  catCodId() {
    return this.http.get(this.catalogosUrl.catalogoCod_id);
  }

  catEdociv() {
    return this.http.get(this.catalogosUrl.catalogoEdociv);
  }

  catIdentif() {
    return this.http.get(this.catalogosUrl.catalogoIdentif);
  }

  catPerjur() {
    return this.http.get(this.catalogosUrl.catalogoPerjur);
  }

  catProfes() {
    return this.http.get(this.catalogosUrl.catalogoProfes);
  }

  catSexo() {
    return this.http.get(this.catalogosUrl.catalogoSexo);
  }

  catStscte() {
    return this.http.get(this.catalogosUrl.catalogoStscte);
  }

  catTipded() {
    return this.http.get(this.catalogosUrl.catalogoTipded);
  }

  catTipdom() {
    return this.http.get(this.catalogosUrl.catalogoTipdom);
  }

  catTipgse() {
    return this.http.get(this.catalogosUrl.catalogoTipgse);
  }

  catTipman() {
    return this.http.get(this.catalogosUrl.catalogoTipman);
  }

  catTipred() {
    return this.http.get(this.catalogosUrl.catalogoTipred);
  }

  catTiprel() {
    return this.http.get(this.catalogosUrl.catalogoTiprel);
  }

  catTiprpe() {
    return this.http.get(this.catalogosUrl.catalogoTiprpe);
  }

  catTiprrc() {
    return this.http.get(this.catalogosUrl.catalogoTiprrc);
  }

  catTiptel() {
    return this.http.get(this.catalogosUrl.catalogoTiptel);
  }

  catnaCION() {
    return this.http.get(this.catalogosUrl.catalogonaCION);
  }

  catDocumentos(): Observable<any> {
    let params = {
      catid: 'tipdoc'
    };
    return this.httpService.get(this.catalogosUrl.catalogos, params);
  }

}
