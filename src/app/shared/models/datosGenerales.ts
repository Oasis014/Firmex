export class DatosGenerales {
  Id: number;
  Sucursal: string;
  ApellidoPaterno: string;
  ApellidoMaterno: string;
  PrimerNombre: string;
  SegundoNombre: string;
  RazonSocial: string;
  ClavePromotor: string;
  EstatusCliente: string;
  FechaAlta: string;
  PersonalidadJuridica: string;
  RFC: string;
  Nacionalidad: string;
  EmailPersonal: string;
  EmailEmpresa: string;
  TelefonoDomicilio: string;
  ExtensionDomicilio: string;
  TelefonoOficina: string;
  ExtensionOficina: string;
  Celular: string;
  RedSocial1: string;
  RedSocial2: string;
  ParteRelacionada: string;
  GrupoConsejo: string;
  GrupoRiesgoComun: string;
  FechaNacimiento: string;
  Sexo: string;
  EstadoCivil: string;
  CURP: string;
  TipoIdentificacion: string;
  NumeroIdentificacion: string;
  ListaNegra: string;
  Profesion: string;
  NombreSociedad: string;
  FechaConstitucion: string;
  RepresentanteLegal: string;
  PresidenteConsejo: string;
  Consejero: string;

  constructor() {
    this.Id = 0;
    this.Sucursal = '';
    this.ApellidoPaterno = '';
    this.ApellidoMaterno = '';
    this.PrimerNombre = '';
    this.SegundoNombre = '';
    this.RazonSocial = '';
    this.ClavePromotor = '';
    this.EstatusCliente = '';
    this.FechaAlta = '';
    this.PersonalidadJuridica = "0";
    this.RFC = '';
    this.Nacionalidad = '';
    this.EmailPersonal = '';
    this.EmailEmpresa = '';
    this.TelefonoDomicilio = '';
    this.ExtensionDomicilio = '';
    this.TelefonoOficina = '';
    this.ExtensionOficina = '';
    this.Celular = '';
    this.RedSocial1 = '';
    this.RedSocial2 = '';
    this.ParteRelacionada = '';
    this.GrupoConsejo = '';
    this.GrupoRiesgoComun = '';
    this.FechaNacimiento = '';
    this.Sexo = '';
    this.EstadoCivil = '';
    this.CURP = '';
    this.TipoIdentificacion = '';
    this.NumeroIdentificacion = '';
    this.ListaNegra = '';
    this.Profesion = '';
    this.NombreSociedad = '';
    this.FechaConstitucion = '';
    this.RepresentanteLegal = '';
    this.PresidenteConsejo = '';
    this.Consejero = '';
  }

  updateFromForm(obj: object): void {
    for ( const item in obj) {
      if ( 'undefined' !== typeof this[item] ) {
        this[item] = obj[item];
      }
    }
  }

  setForm1(obj: any): void {
    /*let params = {
      'Sucursal'             : values.sucursal,
      'ApellidoPaterno'      : '',
      'ApellidoMaterno'      : '',
      'PrimerNombre'         : '',
      'SegundoNombre'        : '',
      'RazonSocial'          : values.razonSocial,
      'PersonalidadJuridica' : '0',
      'RFC'                  : values.rfc,
    }*/
    this.Sucursal = obj.sucursal;
    this.RazonSocial = obj.razonSocial;
    this.RFC = obj.rfc;
    this.FechaConstitucion = obj.fechaConstitucion;
    this.ClavePromotor = obj.promotor;
  }

  setDatosGenerales(obj: any): void {
    this.NombreSociedad = obj.nombreSociedad;
    this.RepresentanteLegal = obj.representanteLegal;
    this.PresidenteConsejo = obj.presidenteConsejo;
    this.Consejero = obj.consejero;
    this.EmailPersonal = obj.emailPersonal;
    this.EmailEmpresa = obj.emailEmpresa;
    this.ParteRelacionada = obj.parteRelacionada;
    this.GrupoConsejo = obj.grupoVinculoConsejo;
    this.GrupoRiesgoComun = obj.grupoRiesgoComun;
    this.TelefonoOficina = obj.telefonoOficina;
    this.ExtensionOficina = obj.extensionOficina;
    this.Celular = obj.celular;
    this.RedSocial1 = obj.redSocial1;
    this.RedSocial2 = obj.redSocial2;
  }

  setId(id: number): void {
    this.Id = id;
  }

}
