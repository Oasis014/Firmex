import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cuenta-bancaria',
  templateUrl: './cuenta-bancaria.component.html',
  styleUrls: ['./cuenta-bancaria.component.scss']
})
export class CuentaBanComponent implements OnInit{

// Objetos Ocultos Cliente
public isCollapsed1 = true; public isCollapsed2 = true; public isCollapsed4 = false; public isCollapsed5 = true; public isCollapsed6 = true; public isCollapsed7 = false; public isCollapsed8 = true;
//Objetos Desabilitados Cliente
public disabledAcc1 = true; public disabledAcc2 = true; public disabledAcc3 = true; public disabledAcc4 = true; public disabledAcc5 = true; public disabledAcc6 = true; public disabledAcc7 = true; public disabledAcc8 = true; public disabledAcc9 = true; public disabledAcc10 = false; public isCollapsedAcc1 = true;
public disabledCue1 = true; public disabledCue2 = true; public disabledCue3 = true; public disabledCue4 = true; public disabledCue5 = false; public isCollapsedCue1 = true;
public disabledRel1 = true; public disabledRel2 = true; public disabledRel3 = true; public disabledRel4 = true;  public disabledRel5 = false; public isCollapsedRel1 = true;
public disabledSoc1 = true; public disabledSoc2 = true; public disabledSoc3 = true; public disabledSoc4 = true; public disabledSoc5 = false; public isCollapsedSoc1 = true;
public disabledCom1 = true; public disabledCom2 = true; public disabledCom3 = true; public disabledCom4 = true; public disabledCom5 = false; public isCollapsedCom1 = true;

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

//Arreglos de variables para obtener campos
soc = {
        Id: null, Consecutivo: null,
        GrupoSocioeconomicoGpoSoc: null, NombreGpoSoc: null, RFCGpoSoc: null, DireccionGpoSoc: null
}
soc2 = {
        Id: null, Consecutivo: null
        }
com = {
        Id: null, Consecutivo: null, GrupoRiesgoComunRgoCom: null,
        NombreRgoCom: null, RFCRgoCom: null, DireccionRgoCom: null
}
com2 = {
        Id: null, Consecutivo: null
}
cuen = {
        Id: null, Consecutivo: null,
        NombreCuentaBancariaCtaBan: null, BancoCtaBan: null, NumeroCuentaCtaBan: null, ClaveInterbancariaCtaBan: null
}
cuen2 = {
        Id: null, Consecutivo: null
}
rel = {
        Id: null, Consecutivo: null, ParteRelacionadaParRel: null,
        NombreParRel: null, RFCParRel: null, DireccionParRel: null
}
rel2 = {
        Id: null, Consecutivo: null
}
acc = {
        Id: null, Consecutivo: null,
        FechaCompra1aAccion: null, ParteInicialSocial: null,
        FechaPago: null, ParteSocialActual: null, CostoAcciones: null,
        FormaPagoAcciones: null, RetirablesA: null,
        RetirablesB: null, TotalAcciones: null
}
acc2 = {
        Id: null, Consecutivo: null
}


  constructor(public toastr: ToastrService, private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) { }
    Insert(){ this.disabledAcc1 = !this.disabledAcc1; this.disabledAcc2 = !this.disabledAcc2; this.disabledAcc3 = !this.disabledAcc3; this.disabledAcc4 = !this.disabledAcc4; this.disabledAcc5 = !this.disabledAcc5; this.disabledAcc6 = !this.disabledAcc6; this.disabledAcc7 = !this.disabledAcc7; this.disabledAcc8 = !this.disabledAcc8; this.disabledAcc9 = !this.disabledAcc9; this.disabledAcc10 = !this.disabledAcc10; this.isCollapsedAcc1 = !this.isCollapsedAcc1; }
    Insert2(){ this.disabledCue1 = !this.disabledCue1; this.disabledCue2 = !this.disabledCue2; this.disabledCue3 = !this.disabledCue3; this.disabledCue4 = !this.disabledCue4; this.disabledCue5 = !this.disabledCue5; this.isCollapsedCue1 = !this.isCollapsedCue1; }
    Insert3(){ this.disabledRel1 = !this.disabledRel1; this.disabledRel2 = !this.disabledRel2; this.disabledRel3 = !this.disabledRel3; this.disabledRel4 = !this.disabledRel4; this.disabledRel5 = !this.disabledRel5; this.isCollapsedRel1 = !this.isCollapsedRel1; }
    Insert4(){ this.disabledSoc1 = !this.disabledSoc1; this.disabledSoc2 = !this.disabledSoc2; this.disabledSoc3 = !this.disabledSoc3; this.disabledSoc4 = !this.disabledSoc4; this.disabledSoc5 = !this.disabledSoc5; this.isCollapsedSoc1 = !this.isCollapsedSoc1; }
    Insert5(){ this.disabledCom1 = !this.disabledCom1; this.disabledCom2 = !this.disabledCom2; this.disabledCom3 = !this.disabledCom3; this.disabledCom4 = !this.disabledCom4; this.disabledCom5 = !this.disabledCom5; this.isCollapsedCom1 = !this.isCollapsedCom1; }

    obtenerAcciones() { this.clienteService.getAcciones().subscribe(result => this.arreglo = result);}
    Acciones(){ this.clienteService.agregar10(this.acc).subscribe(result => this.arreglo = result, datos =>{ }); }
    AccionesBorrar(acc: any){localStorage.setItem( "Listado", JSON.stringify(acc)), this.acc2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.accborrar(this.acc2).subscribe(result => this.arreglob = result, datos =>{ } );  }

    obtenerRelacional() { this.clienteService.getRelacional().subscribe(result => this.arreglo3 = result);}
    Relacional(){ this.clienteService.agregar12(this.rel).subscribe(result => this.arreglo3 = result, datos =>{ }); }
    RelacionalBorrar(rel: any){localStorage.setItem( "Listado", JSON.stringify(rel)), this.rel2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.relborrar(this.rel2).subscribe(result => this.arreglo3b = result, datos =>{ } );  }

    obtenerCuenta() { this.clienteService.getCuenta().subscribe(result => this.arreglo2 = result);}
    Cuenta(){ this.clienteService.agregar11(this.cuen).subscribe(result => this.arreglo2 = result, datos =>{ }); }
    CuentaBorrar(cuen: any){localStorage.setItem( "Listado", JSON.stringify(cuen)), this.cuen2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.cueborrar(this.cuen2).subscribe(result => this.arreglo2b = result, datos =>{ } );  }

    obtenerSocioEco() { this.clienteService.getSocioEco().subscribe(result => this.arreglo4 = result);}
    SocioEco(){ this.clienteService.agregar13(this.soc).subscribe(result => this.arreglo4 = result, datos =>{ }); }
    SocioEcoBorrar(soc: any){localStorage.setItem( "Listado", JSON.stringify(soc)), this.soc2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.socborrar(this.soc2).subscribe(result => this.arreglo4b = result, datos =>{ } );  }

    obtenerRiesgoComun() { this.clienteService.getRiesgoComun().subscribe(result => this.arreglo5 = result);}
    RiesgoComun(){ this.clienteService.agregar14(this.com).subscribe(result => this.arreglo5 = result, datos =>{ }); }
	RiesgoComunBorrar(com: any){localStorage.setItem( "Listado", JSON.stringify(com)), this.com2 = JSON.parse(localStorage.getItem("Listado")), this.clienteService.comuborrar(this.com2).subscribe(result => this.arreglo5b = result, datos =>{ } );  }

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


