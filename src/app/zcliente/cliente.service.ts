import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = 'http://firmex-back.local/';

  private readonly api = environment.api.client;

  constructor(private http: HttpClient) { }

  getDomicilio() {
      return this.http.get(this.api.getDomicilio);
    }

  deleteDomicilio(domicilio: any) {
      return this.http.post(this.api.deleteDomicilio, JSON.stringify(domicilio));
    }

  mostrarTodos(){
    return this.http.get(this.api.mostrarTodos);
  }

  mostrardom(){
    return this.http.get(this.api.mostrarDomicilio);
  }

  select(){
    return this.http.get(this.api.selecionarGenerales);
  }

  agregarS(selec: any){
    return this.http.post(`${this.url}SelecGenerales.php`, JSON.stringify(selec));
  }

  retorno(){
    return this.http.get(`${this.url}Generales.php`);
  }
  retorno2(){
    return this.http.get(`${this.url}GeneralValidar.php`);
  }

  retorno3(){
    return this.http.get(`${this.url}Domicilio.php`);
  }
  retornodomb(){
    return this.http.get(this.api.deleteDomicilio);
  }

  domborrar(domborrar: any){
    return this.http.post(this.api.deleteDomicilio, JSON.stringify(domborrar));
  }

  retornoCon(){
    return this.http.get(`${this.url}DomiciliosConsulta.php`);
  }

  consultar(domcon: any){
    return this.http.post(`${this.url}DomiciliosConsulta.php`, JSON.stringify(domcon));
  }

  agregar(usuario: any){
    return this.http.post(`${this.url}Generales.php`, JSON.stringify(usuario));
  }

  agregar2(clienteM: any){
    return this.http.post(`${this.url}Domicilio.php`, JSON.stringify(clienteM));
  }

  agregar02(clienteMod: any) {
    return this.http.post(`${this.url}Domicilio.php`, JSON.stringify(clienteMod));
  }

  agregar3(usuario: any){
    return this.http.post(`${this.url}CuentaBancaria.php`, JSON.stringify(usuario));
  }

  agregar4(usuario: any){
    return this.http.post(`${this.url}Economica.php`, JSON.stringify(usuario));
  }

  agregar5(usuario: any){
    return this.http.post(`${this.url}Comerciales.php`, JSON.stringify(usuario));
  }

  agregar6(usuario: any){
    return this.http.post(`${this.url}Personales.php`, JSON.stringify(usuario));
  }

  agregar7(usuario: any){
    return this.http.post(`${this.url}Bancarias.php`, JSON.stringify(usuario));
  }

  agregar8(usuario: any){
    return this.http.post(`${this.url}Proveedores.php`, JSON.stringify(usuario));
  }

  agregar9(usuario: any){
    return this.http.post(`${this.url}GeneralValidar.php`, JSON.stringify(usuario));
  }

  agregartel(telclien: any){
    return this.http.post(`${this.url}Telefono.php`, JSON.stringify(telclien));
  }

  retornotel(){
    return this.http.get(`${this.url}Telefono.php`);
  }

  borrartel(telclien: any){
    return this.http.post(`${this.url}TelefonoBorrar.php`, JSON.stringify(telclien));
  }

  retornotelb(){
    return this.http.get(`${this.url}TelefonoBorrar.php`);
  }

  agregarred(redclien: any){
    return this.http.post(`${this.url}RedesSociales.php`, JSON.stringify(redclien));
  }

  retornored(){
    return this.http.get(`${this.url}RedesSociales.php`);
  }

  borrarred(redclienb: any){
    return this.http.post(`${this.url}RedesSocialesBorrar.php`, JSON.stringify(redclienb));
  }

  retornoredb(){
    return this.http.get(`${this.url}RedesSocialesBorrar.php`);
  }


  //Catalogo

  catTiptel(){
    return this.http.get(`${this.url}CatalogoTiptel.php`);
  }

  catTiprrc(){
    return this.http.get(`${this.url}CatalogoTiprrc.php`);
  }

  catTiprpe(){
    return this.http.get(`${this.url}CatalogoTiprpe.php`);
  }

  catTiprel(){
    return this.http.get(`${this.url}CatalogoTiprel.php`);
  }

  catTipred(){
    return this.http.get(`${this.url}CatalogoTipred.php`);
  }

  catTipman(){
    return this.http.get(`${this.url}CatalogoTipman.php`);
  }

  catTipgse(){
    return this.http.get(`${this.url}CatalogoTipgse.php`);
  }

  catTipdom(){
    return this.http.get(`${this.url}CatalogoTipdom.php`);
  }

  catTipded(){
    return this.http.get(`${this.url}CatalogoTipded.php`);
  }

  catStscte(){
    return this.http.get(`${this.url}CatalogoStscte.php`);
  }

  catSexo(){
    return this.http.get(`${this.url}CatalogoSexo.php`);
  }

  catProfes(){
    return this.http.get(`${this.url}CatalogoProfes.php`);
  }

  catPerjur(){
    return this.http.get(`${this.url}CatalogoPerjur.php`);
  }

  catnaCION(){
    return this.http.get(`${this.url}CatalogonaCION.php`);
  }

  catIdentif(){
    return this.http.get(`${this.url}CatalogoIdentif.php`);
  }

  catEdociv(){
    return this.http.get(`${this.url}CatalogoEdociv.php`);
  }

  catCodId(){
    return this.http.get(`${this.url}CatalogoCod_id.php`);
  }

  catCatpue(){
    return this.http.get(`${this.url}CatalogoCatpue.php`);
  }

  catBancos(){
    return this.http.get(`${this.url}CatalogoBancos.php`);
  }

  catActeco(){
    return this.http.get(`${this.url}CatalogoActeco.php`);
  }

  catActdet(){
    return this.http.get(`${this.url}CatalogoActdet.php`);
  }
}
