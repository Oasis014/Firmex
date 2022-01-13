import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-activ-eco',
  templateUrl: './activ-eco.component.html',
  styleUrls: ['./activ-eco.component.scss']
})
export class ActivEcoComponent implements OnInit{

// Objetos Ocultos Cliente
public isCollapsed1 = true; public isCollapsed2 = true; public isCollapsed4 = false; public isCollapsed5 = true; public isCollapsed6 = true; public isCollapsed7 = false; public isCollapsed8 = true;
//Objetos Desabilitados Cliente
public disabled1 = true; public disabled2 = true; public disabled3 = true; public disabled4 = true; public disabled5 = true; public disabled6 = true; public disabled7 = false; public isCollapsedEco2 = true; public isCollapsedEco3 = false;
public disabledPer1 = true; public disabledPer2 = true; public disabledPer3 = true; public disabledPer4 = false; public isCollapsedPer1 = true; public isCollapsedPer2 = true; public isCollapsedPer3 = false;
public disabledCom1 = true; public disabledCom2 = true; public disabledCom3 = true; public disabledCom4 = false; public isCollapsedCom1 = true; public isCollapsedCom2 = true; public isCollapsedCom3 = false;
public disabledPro1 = true; public disabledPro2 = true; public disabledPro3 = true; public disabledPro4 = false; public isCollapsedPro1 = true; public isCollapsedPro2 = true; public isCollapsedPro3 = false;
public disabledBan1 = true; public disabledBan2 = true; public disabledBan3 = true; public disabledBan4 = true; public disabledBan5 = false; public isCollapsedBan1 = true; public isCollapsedBan2 = true; public isCollapsedBan3 = false;

//objetos any Service
catalogo1 = null as any; cliente = null as any;
arreglo = null as any; arreglob = null as any;
arreglo2 = null as any; arreglo2b = null as any;
arreglo3 = null as any; arreglo3b = null as any;
arreglo4 = null as any; arreglo4b = null as any;
arreglo5 = null as any; arreglo5b = null as any;
//Objetos any Catalogos
ctActdet = null as any; ctActeco = null as any; ctBancos = null as any; ctCatpue = null as any;
ctCodId = null as any; ctEdociv = null as any; ctIdentif = null as any; ctPerjur = null as any;
ctProfes = null as any; ctStscte  = null as any; ctTipded = null as any; ctTipdom = null as any;
ctTipgse = null as any; ctTipman = null as any; ctTipred = null as any; ctTiprel = null as any;
ctTiprpe = null as any; ctTiprrc = null as any;	 ctTiptel = null as any; ctnaCION = null as any;
ctSexo = null as any;

//Declaracion Var LocalStorage Proveedores.
Id: string = ''; Consecutivo: string = ''; NombreProvee: string = ''; LimiteCreditoProvee: string = ''; SaldoCuentaProvee: string = '';
//Declaracion Var LocalStorage Bancarias.
 InstitucionRefBan: string = ''; AntiguedadRefBan: string = ''; LimiteCreditoRefBan: string = ''; SaldoCuentaRefBan: string = '';
//Declaracion Var LocalStorage Personales.
 NombreRefPer: string = ''; TelefonoRefPer: string = ''; TipoRelacionRefPer: string = '';
//Declaracion Var LocalStorage Comerciales.
 NombreRefCom: string = ''; LimiteCreditoRefCom: string = ''; SaldoCuentaRefCom: string = '';
//Declaracion Var LocalStorage Economica.
 ActividadEconomica: string = ''; ActividadDetallada: string = ''; IngresoMensual: string = ''; OtroIngresoMensual: string = ''; GastosMensuales: string = ''; FlujoEfectivo: string = '';


//Arreglos de variables para obtener campos
proveedores = {
        Id: null, Consecutivo: null,
        NombreProvee: null, LimiteCreditoProvee: null, SaldoCuentaProvee: null
}
proveedoresMod = {
        Id: null, Consecutivo: null,
        NombreProvee: null, LimiteCreditoProvee: null, SaldoCuentaProvee: null
}
proveedores2 = {
        Id: null, Consecutivo: null
        }
bancarias = {
        Id: null, Consecutivo: null, InstitucionRefBan: null,
        AntiguedadRefBan: null, LimiteCreditoRefBan: null, SaldoCuentaRefBan: null
}
bancariasMod = {
        Id: null, Consecutivo: null, InstitucionRefBan: null,
        AntiguedadRefBan: null, LimiteCreditoRefBan: null, SaldoCuentaRefBan: null
}
bancarias2 = {
        Id: null, Consecutivo: null
}
personales = {
        Id: null, Consecutivo: null,
        NombreRefPer: null, TelefonoRefPer: null, TipoRelacionRefPer: null
}
personalesMod = {
        Id: null, Consecutivo: null,
        NombreRefPer: null, TelefonoRefPer: null, TipoRelacionRefPer: null
}
personales2 = {
        Id: null, Consecutivo: null
}
comerciales = {
        Id: null, Consecutivo: null, NombreRefCom: null,
        LimiteCreditoRefCom: null, SaldoCuentaRefCom: null
}
comercialesMod = {
        Id: null, Consecutivo: null, NombreRefCom: null,
        LimiteCreditoRefCom: null, SaldoCuentaRefCom: null
}
comerciales2 = {
        Id: null, Consecutivo: null
}
eco = {
        Id: null, ActividadEconomica: null,
        ActividadDetallada: null, IngresoMensual: null,
        OtroIngresoMensual: null, GastosMensuales: null, FlujoEfectivo: null
}
ecoMod = {
        Id: null, ActividadEconomica: null,
        ActividadDetallada: null, IngresoMensual: null,
        OtroIngresoMensual: null, GastosMensuales: null, FlujoEfectivo: null
}
eco2 = {
        Id: null, ActividadEconomica: null, ActividadDetallada: null
}


  constructor(public toastr: ToastrService, private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) { }
    Insert(){ this.disabled1 = !this.disabled1; this.disabled2 = !this.disabled2; this.disabled3 = !this.disabled3; this.disabled4 = !this.disabled4; this.disabled5 = !this.disabled5; this.disabled6 = !this.disabled6; this.disabled7 = !this.disabled7; this.isCollapsed1 = !this.isCollapsed1; }
    Insert2(){ this.disabledPer1 = !this.disabledPer1; this.disabledPer2 = !this.disabledPer2; this.disabledPer3 = !this.disabledPer3; this.disabledPer4 = !this.disabledPer4; this.isCollapsedPer1 = !this.isCollapsedPer1; }
    Insert3(){ this.disabledCom1 = !this.disabledCom1; this.disabledCom2 = !this.disabledCom2; this.disabledCom3 = !this.disabledCom3; this.disabledCom4 = !this.disabledCom4; this.isCollapsedCom1 = !this.isCollapsedCom1; }
    Insert4(){ this.disabledPro1 = !this.disabledPro1; this.disabledPro2 = !this.disabledPro2; this.disabledPro3 = !this.disabledPro3; this.disabledPro4 = !this.disabledPro4; this.isCollapsedPro1 = !this.isCollapsedPro1; }
    Insert5(){ this.disabledBan1 = !this.disabledBan1; this.disabledBan2 = !this.disabledBan2; this.disabledBan3 = !this.disabledBan3; this.disabledBan4 = !this.disabledBan4; this.disabledBan5 = !this.disabledBan5; this.isCollapsedBan1 = !this.isCollapsedBan1; }

    obtenerActividadEco() { this.clienteService.getActiEco().subscribe(result => this.arreglo = result);}
    Economica(){ this.clienteService.agregar4(this.eco).subscribe(result => this.arreglo = result, datos =>{ }); }
    EconomicaMod(){ this.clienteService.agregar4(this.ecoMod).subscribe(result => this.arreglo = result, datos =>{ }); }
    EconomicaBorrar(eco: any){localStorage.setItem( "Listado", JSON.stringify(eco)), this.eco2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.ecoborrar(this.eco2).subscribe(result => this.arreglob = result, datos =>{ } );  }
    EconomicaConsultar(eco: any){
        localStorage.setItem( "Id", eco.Id ),this.Id = localStorage.getItem("Id"),
        localStorage.setItem( "ActividadEconomica", eco.ActividadEconomica ),this.ActividadEconomica = localStorage.getItem("ActividadEconomica"),
        localStorage.setItem( "ActividadDetallada", eco.ActividadDetallada ),this.ActividadDetallada = localStorage.getItem("ActividadDetallada"),
        localStorage.setItem( "IngresoMensual", eco.IngresoMensual ),this.IngresoMensual = localStorage.getItem("IngresoMensual"),
        localStorage.setItem( "OtroIngresoMensual", eco.OtroIngresoMensual ),this.OtroIngresoMensual = localStorage.getItem("OtroIngresoMensual"),
        localStorage.setItem( "GastosMensuales", eco.GastosMensuales ),this.GastosMensuales = localStorage.getItem("GastosMensuales"),
        localStorage.setItem( "FlujoEfectivo", eco.FlujoEfectivo ),this.FlujoEfectivo = localStorage.getItem("FlujoEfectivo"),
        this.clienteService.economicaconsultar(this.eco2).subscribe(result => this.arreglo = result, datos =>{  }) }

    obtenerComerciales() { this.clienteService.getComerciales().subscribe(result => this.arreglo3 = result);}
    Comerciales(){ this.clienteService.agregar5(this.comerciales).subscribe(result => this.arreglo3 = result, datos =>{ }); }
    ComercialesMod(){ this.clienteService.agregar5(this.comercialesMod).subscribe(result => this.arreglo3 = result, datos =>{ }); }
    ComercialesBorrar(comerciales: any){localStorage.setItem( "Listado", JSON.stringify(comerciales)), this.comerciales2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.comborrar(this.comerciales2).subscribe(result => this.arreglo3b = result, datos =>{ } );  }
    ComercialesConsultar(comerciales: any){
        localStorage.setItem( "Id", comerciales.Id ),this.Id = localStorage.getItem("Id"),
        localStorage.setItem( "Consecutivo", comerciales.Consecutivo ),this.Consecutivo = localStorage.getItem("Consecutivo"),
        localStorage.setItem( "NombreRefCom", comerciales.NombreRefCom ),this.NombreRefCom = localStorage.getItem("NombreRefCom"),
        localStorage.setItem( "LimiteCreditoRefCom", comerciales.LimiteCreditoRefCom ),this.LimiteCreditoRefCom = localStorage.getItem("LimiteCreditoRefCom"),
        localStorage.setItem( "SaldoCuentaRefCom", comerciales.SaldoCuentaRefCom ),this.SaldoCuentaRefCom = localStorage.getItem("SaldoCuentaRefCom"),
        this.clienteService.comercialesconsultar(this.comerciales2).subscribe(result => this.arreglo3 = result, datos =>{  }) }

    obtenerPersonales() { this.clienteService.getPersonales().subscribe(result => this.arreglo2 = result);}
    Personales(){ this.clienteService.agregar6(this.personales).subscribe(result => this.arreglo2 = result, datos =>{ }); }
    PersonalesMod(){ this.clienteService.agregar6(this.personalesMod).subscribe(result => this.arreglo2 = result, datos =>{ }); }
    PersonalesBorrar(personales: any){localStorage.setItem( "Listado", JSON.stringify(personales)), this.personales2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.perborrar(this.personales2).subscribe(result => this.arreglo2b = result, datos =>{ } );  }
    PersonalesConsultar(personales: any){
        localStorage.setItem( "Id", personales.Id ),this.Id = localStorage.getItem("Id"),
        localStorage.setItem( "Consecutivo", personales.Consecutivo ),this.Consecutivo = localStorage.getItem("Consecutivo"),
        localStorage.setItem( "NombreRefPer", personales.NombreRefPer ),this.NombreRefPer = localStorage.getItem("NombreRefPer"),
        localStorage.setItem( "TelefonoRefPer", personales.TelefonoRefPer ),this.TelefonoRefPer = localStorage.getItem("TelefonoRefPer"),
        localStorage.setItem( "TipoRelacionRefPer", personales.TipoRelacionRefPer ),this.TipoRelacionRefPer = localStorage.getItem("TipoRelacionRefPer"),
        this.clienteService.personalesconsultar(this.personales2).subscribe(result => this.arreglo2 = result, datos =>{  }) }

    obtenerProveedores() { this.clienteService.getProveedores().subscribe(result => this.arreglo4 = result);}
    Proveedores(){ this.clienteService.agregar8(this.proveedores).subscribe(result => this.arreglo4 = result, datos =>{ }); }
    ProveedoresMod(){ this.clienteService.agregar8(this.proveedoresMod).subscribe(result => this.arreglo4 = result, datos =>{ }); }
    ProveedoresBorrar(proveedores: any){localStorage.setItem( "Listado", JSON.stringify(proveedores)), this.proveedores2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.proborrar(this.proveedores).subscribe(result => this.arreglo4b = result, datos =>{ } );  }
    ProveedoresConsultar(proveedores: any){
        localStorage.setItem( "Id", proveedores.Id ),this.Id = localStorage.getItem("Id"),
        localStorage.setItem( "Consecutivo", proveedores.Consecutivo ),this.Consecutivo = localStorage.getItem("Consecutivo"),
        localStorage.setItem( "NombreProvee", proveedores.NombreProvee ),this.NombreProvee = localStorage.getItem("NombreProvee"),
        localStorage.setItem( "LimiteCreditoProvee", proveedores.LimiteCreditoProvee ),this.LimiteCreditoProvee = localStorage.getItem("LimiteCreditoProvee"),
        localStorage.setItem( "SaldoCuentaProvee", proveedores.SaldoCuentaProvee ),this.SaldoCuentaProvee = localStorage.getItem("SaldoCuentaProvee"),
        this.clienteService.proveedoresconsultar(this.proveedores2).subscribe(result => this.arreglo4 = result, datos =>{  }) }


    obtenerBancarias() { this.clienteService.getBancarias().subscribe(result => this.arreglo5 = result);}
    Bancarias(){ this.clienteService.agregar7(this.bancarias).subscribe(result => this.arreglo5 = result, datos =>{ }); }
	BancariasMod(){ this.clienteService.agregar7(this.bancariasMod).subscribe(result => this.arreglo5 = result, datos =>{ }); }
	BancariasBorrar(bancarias: any){localStorage.setItem( "Listado", JSON.stringify(bancarias)), this.bancarias2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.banborrar(this.bancarias).subscribe(result => this.arreglo5b = result, datos =>{ } );  }
    BancariasConsultar(bancarias: any){
        localStorage.setItem( "Id", bancarias.Id ),this.Id = localStorage.getItem("Id"),
        localStorage.setItem( "Consecutivo", bancarias.Consecutivo ),this.Consecutivo = localStorage.getItem("Consecutivo"),
        localStorage.setItem( "InstitucionRefBan", bancarias.InstitucionRefBan ),this.InstitucionRefBan = localStorage.getItem("InstitucionRefBan"),
        localStorage.setItem( "AntiguedadRefBan", bancarias.AntiguedadRefBan ),this.AntiguedadRefBan = localStorage.getItem("AntiguedadRefBan"),
        localStorage.setItem( "LimiteCreditoRefBan", bancarias.LimiteCreditoRefBan ),this.LimiteCreditoRefBan = localStorage.getItem("LimiteCreditoRefBan"),
        localStorage.setItem( "SaldoCuentaRefBan", bancarias.SaldoCuentaRefBan ),this.SaldoCuentaRefBan = localStorage.getItem("SaldoCuentaRefBan"),
        this.clienteService.bancariasconsultar(this.bancarias2).subscribe(result => this.arreglo5 = result, datos =>{  }) }

	ngOnInit() { this.CatDet(); this.CatEco(); this.CatBncs(); this.CatPue(); this.CodId(); this.EdoCiv(); this.Identif(); this.Perjur();
                 this.Profes(); this.StsCte(); this.Tipded(); this.TipDom(); this.Tipgse(); this.Tipman(); this.Tipred(); this.TipRel();
                 this.Tiprpe(); this.Tiprrc(); this.Tiptel(); this.cnaCION(); this.ctSx(); }
//Funcion para obtener registros catalogos

  CatDet(){ this.clienteService.catActdet().subscribe( result => {this.ctActdet = result}); }

  CatEco(){ this.clienteService.catActeco().subscribe( result => {this.ctActeco = result}); }

  CatBncs(){ this.clienteService.catBancos().subscribe( result => {this.ctBancos = result}); }

  CatPue(){ this.clienteService.catCatpue().subscribe( result => {this.ctCatpue = result}); }

  CodId(){ this.clienteService.catCodId().subscribe( result => {this.ctCodId = result}); }

  EdoCiv(){ this.clienteService.catEdociv().subscribe( result => {this.ctEdociv = result}); }

  Identif(){ this.clienteService.catIdentif().subscribe( result => {this.ctIdentif = result}); }

  Perjur(){ this.clienteService.catPerjur().subscribe( result => {this.ctPerjur = result}); }

  Profes(){ this.clienteService.catProfes().subscribe( result => {this.ctProfes = result}); }

  ctSx(){ this.clienteService.catSexo().subscribe( result => {this.ctSexo = result}); }

  StsCte(){ this.clienteService.catStscte().subscribe( result => {this.ctStscte = result}); }

  Tipded(){ this.clienteService.catTipded().subscribe( result => {this.ctTipded = result}); }

  TipDom(){ this.clienteService.catTipdom().subscribe( result => {this.ctTipdom = result}); }

  Tipgse(){ this.clienteService.catTipgse().subscribe( result => {this.ctTipgse = result}); }

  Tipman(){ this.clienteService.catTipman().subscribe( result =>{this.ctTipman = result}); }

  Tipred(){ this.clienteService.catTipred().subscribe( result =>{this.ctTipred = result}); }

  TipRel(){ this.clienteService.catTiprel().subscribe( result =>{this.ctTiprel = result}); }

  Tiprpe(){ this.clienteService.catTiprpe().subscribe( result =>{this.ctTiprpe = result}); }

  Tiprrc(){ this.clienteService.catTiprrc().subscribe( result =>{this.ctTiprrc = result}); }

  Tiptel(){ this.clienteService.catTiptel().subscribe( result =>{this.ctTiptel = result}); }

  cnaCION(){ this.clienteService.catnaCION().subscribe( result =>{this.ctnaCION = result}); }


}


