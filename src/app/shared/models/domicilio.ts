export class Domicilio {

  Id: number;
  TipoDom: string;
  Calle: string;
  NoEx: string;
  NoIn: string;
  CodPos: string;
  Colonia: string;
  Municipio: string;
  Estado: string;
  Pais: string;

  constructor() {
    this.Id = 0;
    this.TipoDom = '';
    this.Calle = '';
    this.NoEx = '';
    this.NoIn = '';
    this.CodPos = '';
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

  setData(obj: any): void {
    this.TipoDom =  obj.tipoDom;
    this.Calle =  obj.calle;
    this.NoEx =  obj.noEx;
    this.NoIn =  obj.noIn;
    this.CodPos =  obj.codPos;
    this.Colonia =  obj.colonia;
    this.Municipio =  obj.municipio;
    this.Estado =  obj.estado;
    this.Pais =  obj.pais;
  }

  setId(id: number): void {
    this.Id = id;
  }

}
