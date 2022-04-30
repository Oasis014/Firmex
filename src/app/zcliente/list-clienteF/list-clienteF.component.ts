import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ClienteService } from '../cliente.service';
import { PipeClienteComponent } from '../list-cliente/filter-pipe';


@Component({
    selector: 'app-listclienteF',
    templateUrl: './list-clienteF.component.html',
    styleUrls: ['./list-clienteF.component.scss']
})

export class ListClienteFComponent {


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private clienteService: ClienteService
    ) { }

    public isCollapsed1 = true;
    public ban = 1;

    fila(){  if (this.ban == 1){
        this.isCollapsed1 =! this.isCollapsed1;
        this.ban ++;
    }}

    Bandera = {
        ban: null
    };
    filterPost = '';
    //listado moral
    list = [{
        NumeroCLiente: null,
        FechaNacimiento: null,
        Sexo: null,
        EstadoCivil: null,
        CURP: null,
        TipoIdentificacion: null,
        NumeroIdentificacion: null,
        ListaNegra: null,
        Profesion: null
    }] as any;


    ngOnInit() {
        this.obtenerListado();
    }

    obtenerListado() {
        this.clienteService.getListFisica().subscribe(
            (result: any) => {
                this.list = result
        });
    }

    onReadOnly() {

    }


    Total() {
        this.router.navigate(['list-cliente'], { relativeTo: this.route.parent });
    }

    Moral() {
        this.router.navigate(['list-clienteM'], { relativeTo: this.route.parent });
    }

    open() {
        this.Bandera.ban = 2;
        localStorage.setItem("bandera", this.Bandera.ban);
        this.router.navigate(['mod-moral'], { relativeTo: this.route.parent });
    }
}
