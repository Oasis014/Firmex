export class Domicilio {

  NumeroCliente: number;
  TipoDomicilio: string;
  Calle: string;
  NumeroExterior: string;
  NumeroInterior: string;
  CodigoPostal: string;
  Colonia: string;
  Municipio: string;
  Estado: string;
  Pais: string;

  constructor() {
    this.NumeroCliente = 0;
    this.TipoDomicilio = '';
    this.Calle = '';
    this.NumeroExterior = '';
    this.NumeroInterior = '';
    this.CodigoPostal = '';
    this.Colonia = '';
    this.Municipio = '';
    this.Estado = '';
    this.Pais = '';
  }

  updateFromForm(obj: object): void {
    for ( const item in obj) {
      if ( 'undefined' !== typeof this[item] ) {
        this[item] = obj[item];
      }
    }
  }

  setClienteId(id: number): void {
    this.NumeroCliente = id;
  }

}
