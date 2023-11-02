import { Injectable, NgModule } from '@angular/core';
import { Proyecto } from '../models/proyecto.models';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { empty } from 'rxjs';


@Injectable({  providedIn: "root"})
export class ProyectoService {
  proyecto: Proyecto;
  token: string;
    constructor(public http: HttpClient, public router: Router) {
      
    }
  
 
    crearProyecto(proyecto: Proyecto) {
  
   const url = URL_SERVICIOS + '/proyecto';
        console.log("data proyecto", proyecto);
  
      return this.http.post(url,proyecto)
  
        .pipe(map((resp: any) => {
          console.log("respuesta", resp);
  
          Swal.fire({
            title: 'Proyecto creado',
            text: proyecto.nombre_proyecto,
            icon: 'success' });
            this.router.navigate(['/newProject']);
          return resp.proyecto;
  
        }), catchError((err: any) => {
  
          Swal.fire({
            title: 'Error en el registro',
            text: 'El proyecto ya existe!!! ',
            icon: 'error'
           });
  
          return empty();
  
        }));
  
    }
  
  }