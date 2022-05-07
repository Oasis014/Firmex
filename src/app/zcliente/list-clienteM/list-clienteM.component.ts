import { Component, ViewChild, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';
import { ClienteService } from '../cliente.service';
import { PipeClienteComponent } from '../list-cliente/filter-pipe';
@Component({
    selector: 'app-listclienteM',
    templateUrl: './list-clienteM.component.html',
    styleUrls: ['./list-clienteM.component.scss']
})

export class ListClienteMComponent  {
    Bandera = {
        ban: null
    };
    filterPost = '';
    public isCollapsed1 = true;
    public ban = 1;
    //listado moral
    list = [
        {
            NumeroCLiente: null,
            NombreSociedad: null,
            FechaConstitucion: null,
            RepresentanteLegal: null,
            PresidenteConsejo: null,
            Consejero: null,
            Secretario: null
        }
    ] as any;
    urlCedula = `${environment.api.cliente.cedulaCliente}?idCliente=`;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private clienteService: ClienteService
    ) { }

    ngOnInit() {
        this.obtenerListado();
    }

    obtenerListado() {
        this.clienteService.getListMoral().subscribe(
            (result: any) => {
                console.log(result);
                this.list = result;
            }
        );
    }

    fila() {
        if ( this.ban == 1 ) {
            this.isCollapsed1 = !this.isCollapsed1;
            this.ban ++;
        }
    }

    onReadOnly() {

     }

    Total() {
        this.router.navigate(['list-cliente'], {
            relativeTo: this.route.parent
        });
    }

    Fisica() {
        this.router.navigate(['list-clienteF'], {
            relativeTo: this.route.parent
        });
    }

    open() {
        this.Bandera.ban = 1;
        localStorage.setItem("bandera", this.Bandera.ban);
        this.router.navigate(['mod-moral'], { relativeTo: this.route.parent });
    }

}
