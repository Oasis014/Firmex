export interface ResponseSP {
  noCliente?: string;
  errorClave: string;
  errorDescripcion: string;
  errorSp: string;
  data?: Array<any>;
  solicitudLinea?: string;
}
