import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'http://127.0.0.1/insert/';
  private readonly api = environment.api.client;
  private readonly cats = environment.api.catalogos;

  constructor(private http: HttpClient) { }

  getDomicilio() {
    return this.http.get(this.api.getDomicilio);
  }

  getActiEco() {
    return this.http.get(`${this.url}ActividadEcoMostrar.php`);
  }

  getPersonales() {
    return this.http.get(`${this.url}PersonalesMostrar.php`);
  }

  getComerciales() {
    return this.http.get(`${this.url}ComercialesMostrar.php`);
  }

  getProveedores() {
    return this.http.get(`${this.url}ProveedoresMostrar.php`);
  }

  getBancarias() {
    return this.http.get(`${this.url}BancariasMostrar.php`);
  }

  getAcciones() {
    return this.http.get(`${this.url}AccionesMostrar.php`);
  }

  getCuenta() {
    return this.http.get(`${this.url}CuentasBanMostrar.php`);
  }

  getRelacional() {
    return this.http.get(`${this.url}ParteRelacionalMostrar.php`);
  }

  getSocioEco() {
    return this.http.get(`${this.url}GrupoSocieconomicoMostrar.php`);
  }

  getRiesgoComun() {
    return this.http.get(`${this.url}GrupoRiesgoComunMostrar.php`);
  }

  deleteDomicilio(domicilio: any) {
    return this.http.post(`${this.url}DomicilioBorrar.php`, JSON.stringify(domicilio));
  }

  mostrarTodos() {
    return this.http.get(this.api.mostrarTodos);
  }

  mostrardom() {
    return this.http.get(`${this.url}DomicilioMostrar.php`);
  }

  select() {
    return this.http.get(this.api.selecionarGenerales);
  }

  agregarS(selec: any) {
    return this.http.post(this.api.selecionarGenerales, JSON.stringify(selec));
  }

  retorno() {
    return this.http.get(`${this.url}Generales.php`);
  }

  retorno2() {
    return this.http.get(`${this.url}GeneralValidar.php`);
  }

  retorno3() {
    return this.http.get(this.api.domicilio);
  }

  retornodomb() {
    return this.http.get(`${this.url}DomicilioBorrar.php`);
  }

  domborrar(domborrar: any) {
    return this.http.post(`${this.url}DomicilioBorrar.php`, JSON.stringify(domborrar));
  }

  ecoborrar(arreglob: any) {
    return this.http.post(`${this.url}ActividadEcoBorrar.php`, JSON.stringify(arreglob));
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
    return this.http.get(`${this.url}DomiciliosConsulta.php`);
  }

  consultar(domcon: any) {
    return this.http.post(`${this.url}DomiciliosConsulta.php`, JSON.stringify(domcon));
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

  agregar(usuario: any) {
    return this.http.post(`${this.url}Generales.php`, JSON.stringify(usuario));
  }

  agregar2(clienteM: any) {
    return this.http.post(this.api.domicilio, JSON.stringify(clienteM));
  }

  agregar02(clienteMod: any) {
    return this.http.post(this.api.domicilio, JSON.stringify(clienteMod));
  }

  agregar3(usuario: any) {
    return this.http.post(`${this.url}CuentaBancaria.php`, JSON.stringify(usuario));
  }

  agregar4(arreglo: any) {
    return this.http.post(`${this.url}Economica.php`, JSON.stringify(arreglo));
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

  agregar9(usuario: any) {
    return this.http.post(`${this.url}GeneralValidar.php`, JSON.stringify(usuario));
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

  //Catalogo

  catActdet() {
    return this.http.get(this.cats.catalogoActdet);
  }

  catActeco() {
    return this.http.get(this.cats.catalogoActeco);
  }

  catBancos() {
    return this.http.get(this.cats.catalogoBancos);
  }

  catCatpue() {
    return this.http.get(this.cats.catalogoCatpue);
  }

  catCodId() {
    return this.http.get(this.cats.catalogoCodId);
  }

  catEdociv() {
    return this.http.get(this.cats.catalogoEdociv);
  }

  catIdentif() {
    return this.http.get(this.cats.catalogoIdentif);
  }

  catPerjur() {
    return this.http.get(this.cats.catalogoPerjur);
  }

  catProfes() {
    return this.http.get(this.cats.catalogoProfes);
  }

  catSexo() {
    return this.http.get(this.cats.catalogoSexo);
  }

  catStscte() {
    return this.http.get(this.cats.catalogoStscte);
  }

  catTipded() {
    return this.http.get(this.cats.catalogoTipded);
  }

  catTipdom() {
    return this.http.get(this.cats.catalogoTipdom);
  }

  catTipgse() {
    return this.http.get(this.cats.catalogoTipgse);
  }

  catTipman() {
    return this.http.get(this.cats.catalogoTipman);
  }

  catTipred() {
    return this.http.get(this.cats.catalogoTipred);
  }

  catTiprel() {
    return this.http.get(this.cats.catalogoTiprel);
  }

  catTiprpe() {
    return this.http.get(this.cats.catalogoTiprpe);
  }

  catTiprrc() {
    return this.http.get(this.cats.catalogoTiprrc);
  }

  catTiptel() {
    return this.http.get(this.cats.catalogoTiptel);
  }

  catnaCION() {
    return this.http.get(this.cats.catalogonaCION);
  }

}
