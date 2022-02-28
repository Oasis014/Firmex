export class DatosGenerales {
  NumeroCliente: number;
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

  constructor(obj?: object) {
    this.NumeroCliente = 0;
    this.Sucursal = '';
    this.ApellidoPaterno = '';
    this.ApellidoMaterno = '';
    this.PrimerNombre = '';
    this.SegundoNombre = '';
    this.RazonSocial = '';
    this.ClavePromotor = '';
    this.EstatusCliente = '';
    this.FechaAlta = '';
    this.PersonalidadJuridica = "01";
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

    if ( 'undefined' !== typeof(obj) ) {
      for ( const item in obj) {
        if ( 'undefined' !== typeof this[item] ) {
          this[item] = obj[item];
        }
      }
    }
  }

  updateFromForm(obj: object): void {
    for ( const item in obj) {
      if ( 'undefined' !== typeof this[item] ) {
        this[item] = obj[item];
      }
    }
  }

  setFormMoral(obj: any): void {
    this.Sucursal = obj.sucursal;
    this.RazonSocial = obj.razonSocial;
    this.RFC = obj.rfc;
    this.FechaConstitucion = obj.fechaConstitucion;
    this.ClavePromotor = obj.promotor;
  }

  setFormFisica(obj: any): void {
    this.NumeroCliente = obj.numeroCliente;
    this.EstatusCliente = obj.estatusCliente;
    this.Sucursal = obj.sucursal;
    this.PrimerNombre = obj.primerNombre;
    this.SegundoNombre = obj.segundoNombre;
    this.ApellidoPaterno = obj.apellidoPaterno;
    this.ApellidoMaterno = obj.apellidoMaterno;
    this.ClavePromotor = obj.promotor;
    this.FechaNacimiento = obj.fechaNacimiento;
    this.RFC = obj.rfc;
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

  setDatosGeneralesFisica(obj: any): any {

  }

  setFisica(): void {
    this.PersonalidadJuridica = "02";
    this.FechaConstitucion = '1970-01-01';
    const date = new Date();
    this.FechaAlta = date.toISOString().substring(0, 10);
    this.EstatusCliente = "0";
  }

  setMoral(): void {
    this.PersonalidadJuridica = "03";
    this.FechaNacimiento = '1970-01-01';
    const date = new Date();
    this.FechaAlta = date.toISOString().substring(0, 10);
    this.EstatusCliente = "0";
  }

  setId(id: number): void {
    this.NumeroCliente = id;
  }

}
