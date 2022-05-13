import { HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";
import { ResponseSP } from "src/app/shared/models/responseSP";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private apiCredito = environment.api.solicitudesCredito;

  constructor(
    private readonly httpService: HttpService
  ) {}

  validarCliente(id: number): Observable<any> {
    let params = {
      cliente: id
    };
    console.log();
    return this.httpService.get(this.apiCredito.validaCliente, params);
  }

  guardarSolicitud(data: any): Observable<any> {
    return this.httpService.post(this.apiCredito.guardaSolicitud, data);
  }

}