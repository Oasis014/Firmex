import { HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpService } from "src/app/core/services/http.service";
import { ResponseApi } from "src/app/shared/models/responseApi";
import { ResponseSP } from "src/app/shared/models/responseSP";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private apiCredito = environment.api.solicitudesCredito;
  private apiCatalogos = environment.api.catalogos;

  constructor(
    private readonly httpService: HttpService
  ) {}

  validarCliente(id: number): Observable<any> {
    let params = {
      cliente: id
    };
    return this.httpService.get(this.apiCredito.validaCliente, params);
  }

  getListLineaCredito(): Observable<any> {
    return this.httpService.get(this.apiCredito.lineaCredito);
  }

  getLineaCredito(cliente: number, linea: number): Observable<any> {
    const params = {
      cliente,
      linea
    };
    return this.httpService.get(this.apiCredito.lineaCredito, params);
  }

  getListCredit(linea: number): Observable<any> {
    const params = {
      linea
    };
    return this.httpService.get(this.apiCredito.solicitudCredito, params);
  }

  guardarSolicitud(data: any): Observable<any> {
    return this.httpService.post(this.apiCredito.lineaCredito, data);
  }

  solicitudCredito(data: any): Observable<any> {
    return this.httpService.post(this.apiCredito.solicitudCredito, data);
  }

  borrarSolicitudCredito(solicitudLinea: number, consecutivo: number): Observable<any> {
    const params = {
      solicitudLinea,
      consecutivo
    };
    return this.httpService.delete(this.apiCredito.solicitudCredito, params);
  }

  catalogoDivisas(): Observable<any> {
    return this.httpService.get(this.apiCatalogos.catalogos, {catid: 'divisa'})
      .pipe(map((data: ResponseApi) => { return data.data; }) );
  }

  catalogoTipoCredito(): Observable<any> {
    return this.httpService.get(this.apiCatalogos.catalogos, {catid: 'tipcre'})
      .pipe(map((data: ResponseApi) => { return data.data; }) );
  }

}