import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
url = 'http://127.0.0.1/insert/';


  constructor(private http: HttpClient) { }

  getDomicilio() { return this.http.get(`${this.url}DomicilioMostrar.php`); }
  getActiEco() { return this.http.get(`${this.url}ActividadEcoMostrar.php`); }
  getPersonales() { return this.http.get(`${this.url}PersonalesMostrar.php`); }
  getComerciales() { return this.http.get(`${this.url}ComercialesMostrar.php`); }
  getProveedores() { return this.http.get(`${this.url}ProveedoresMostrar.php`); }
  getBancarias() { return this.http.get(`${this.url}BancariasMostrar.php`); }
  getAcciones() { return this.http.get(`${this.url}AccionesMostrar.php`); }
  getCuenta() { return this.http.get(`${this.url}CuentasBanMostrar.php`); }
  getRelacional() { return this.http.get(`${this.url}ParteRelacionalMostrar.php`); }
  getSocioEco() { return this.http.get(`${this.url}GrupoSocieconomicoMostrar.php`); }
  getRiesgoComun() { return this.http.get(`${this.url}GrupoRiesgoComunMostrar.php`); }

  deleteDomicilio(domicilio: any) { return this.http.post(`${this.url}DomicilioBorrar.php`, JSON.stringify(domicilio)); }

  mostrarTodos(){ return this.http.get(`${this.url}mostrarTodos.php`); }

  mostrardom(){ return this.http.get(`${this.url}DomicilioMostrar.php`); }

  select(){ return this.http.get(`${this.url}SelecGenerales.php`); }

  agregarS(selec: any){ return this.http.post(`${this.url}SelecGenerales.php`, JSON.stringify(selec)); }

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
           return this.http.get(`${this.url}DomicilioBorrar.php`);
         }
  domborrar(domborrar: any){
        return this.http.post(`${this.url}DomicilioBorrar.php`, JSON.stringify(domborrar));
      }
  ecoborrar(arreglob: any){
          return this.http.post(`${this.url}ActividadEcoBorrar.php`, JSON.stringify(arreglob));
        }
  perborrar(arreglo2b: any){
          return this.http.post(`${this.url}PersonalesBorrar.php`, JSON.stringify(arreglo2b));
        }
  comborrar(arreglo3b: any){
           return this.http.post(`${this.url}ComercialesBorrar.php`, JSON.stringify(arreglo3b));
        }
  proborrar(arreglo4b: any){
           return this.http.post(`${this.url}ProveedoresBorrar.php`, JSON.stringify(arreglo4b));
        }
  banborrar(arreglo5b: any){
           return this.http.post(`${this.url}BancariasBorrar.php`, JSON.stringify(arreglo5b));
        }
  accborrar(arreglob: any){
          return this.http.post(`${this.url}AccionesBorrar.php`, JSON.stringify(arreglob));
        }
  cueborrar(arreglob: any){
          return this.http.post(`${this.url}CuentasBanBorrar.php`, JSON.stringify(arreglob));
        }
  socborrar(arreglob: any){
          return this.http.post(`${this.url}GrupoSocieconomicoBorrar.php`, JSON.stringify(arreglob));
        }
  relborrar(arreglob: any){
          return this.http.post(`${this.url}ParteRelacionalBorrar.php`, JSON.stringify(arreglob));
        }
  comuborrar(arreglob: any){
          return this.http.post(`${this.url}GrupoRiesgoComunBorrar.php`, JSON.stringify(arreglob));
        }
  retornoCon(){
             return this.http.get(`${this.url}DomiciliosConsulta.php`);
           }
  consultar(domcon: any){
          return this.http.post(`${this.url}DomiciliosConsulta.php`, JSON.stringify(domcon));
  }

economicaconsultar(arreglob: any){
          return this.http.post(`${this.url}ActividadEcoMostrar.php`, JSON.stringify(arreglob));
  }
personalesconsultar(arreglo2b: any){
          return this.http.post(`${this.url}PersonalesMostrar.php`, JSON.stringify(arreglo2b));
  }
bancariasconsultar(arreglo5b: any){
          return this.http.post(`${this.url}BancariasMostrar.php`, JSON.stringify(arreglo5b));
  }
comercialesconsultar(arreglo3b: any){
          return this.http.post(`${this.url}ComercialesMostrar.php`, JSON.stringify(arreglo3b));
  }
proveedoresconsultar(arreglo4b: any){
          return this.http.post(`${this.url}ProveedoresMostrar.php`, JSON.stringify(arreglo4b));
  }
  agregar(usuario: any){ return this.http.post(`${this.url}Generales.php`, JSON.stringify(usuario)); }
  agregar2(clienteM: any){ return this.http.post(`${this.url}Domicilio.php`, JSON.stringify(clienteM)); }
  agregar02(clienteMod: any){ return this.http.post(`${this.url}Domicilio.php`, JSON.stringify(clienteMod)); }
  agregar3(usuario: any){ return this.http.post(`${this.url}CuentaBancaria.php`, JSON.stringify(usuario)); }
  agregar4(arreglo: any){ return this.http.post(`${this.url}Economica.php`, JSON.stringify(arreglo)); }
  agregar5(usuario: any){ return this.http.post(`${this.url}Comerciales.php`, JSON.stringify(usuario)); }
  agregar6(usuario: any){ return this.http.post(`${this.url}Personales.php`, JSON.stringify(usuario)); }
  agregar7(usuario: any){ return this.http.post(`${this.url}Bancarias.php`, JSON.stringify(usuario)); }
  agregar8(usuario: any){ return this.http.post(`${this.url}Proveedores.php`, JSON.stringify(usuario)); }
  agregar9(usuario: any){ return this.http.post(`${this.url}GeneralValidar.php`, JSON.stringify(usuario)); }

  agregar10(usuario: any){ return this.http.post(`${this.url}Acciones.php`, JSON.stringify(usuario)); }
  agregar11(usuario: any){ return this.http.post(`${this.url}CuentasBan.php`, JSON.stringify(usuario)); }
  agregar12(usuario: any){ return this.http.post(`${this.url}ParteRelacional.php`, JSON.stringify(usuario)); }
  agregar13(usuario: any){ return this.http.post(`${this.url}GrupoSocieconomico.php`, JSON.stringify(usuario)); }
  agregar14(usuario: any){ return this.http.post(`${this.url}GrupoRiesgoComun.php`, JSON.stringify(usuario)); }




         //Catalogo

         catActdet(){
            return this.http.get(`${this.url}CatalogoActdet.php`);
          }

          catActeco(){
            return this.http.get(`${this.url}CatalogoActeco.php`);
          }

          catBancos(){
            return this.http.get(`${this.url}CatalogoBancos.php`);
          }

          catCatpue(){
            return this.http.get(`${this.url}CatalogoCatpue.php`);
          }

          catCodId(){
            return this.http.get(`${this.url}CatalogoCod_id.php`);
          }

          catEdociv(){
            return this.http.get(`${this.url}CatalogoEdociv.php`);
          }

          catIdentif(){
            return this.http.get(`${this.url}CatalogoIdentif.php`);
          }

          catPerjur(){
            return this.http.get(`${this.url}CatalogoPerjur.php`);
          }

          catProfes(){
            return this.http.get(`${this.url}CatalogoProfes.php`);
          }

          catSexo(){
            return this.http.get(`${this.url}CatalogoSexo.php`);
          }

          catStscte(){
            return this.http.get(`${this.url}CatalogoStscte.php`);
          }

          catTipded(){
            return this.http.get(`${this.url}CatalogoTipded.php`);
          }

          catTipdom(){
            return this.http.get(`${this.url}CatalogoTipdom.php`);
          }

          catTipgse(){
            return this.http.get(`${this.url}CatalogoTipgse.php`);
          }

          catTipman(){
            return this.http.get(`${this.url}CatalogoTipman.php`);
          }

          catTipred(){
            return this.http.get(`${this.url}CatalogoTipred.php`);
          }

          catTiprel(){
            return this.http.get(`${this.url}CatalogoTiprel.php`);
          }

          catTiprpe(){
            return this.http.get(`${this.url}CatalogoTiprpe.php`);
          }

          catTiprrc(){
            return this.http.get(`${this.url}CatalogoTiprrc.php`);
          }

          catTiptel(){
            return this.http.get(`${this.url}CatalogoTiptel.php`);
          }

          catnaCION(){
            return this.http.get(`${this.url}CatalogonaCION.php`);
          }
}
