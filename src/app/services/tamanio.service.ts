import { Injectable, NgModule } from '@angular/core';
import { Tamanio } from '../models/tamanio.models';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { empty } from 'rxjs';


@Injectable({  providedIn: "root"})
export class TamanioService {
  tamanio: Tamanio;
 
    constructor(public http: HttpClient, public router: Router) {
      
    }
  
 
    crearTamanio(tamanio: Tamanio) {
  
   const url = URL_SERVICIOS + '/tamanio';
        console.log("data tamanio", tamanio);
  
      return this.http.post(url,tamanio)
  
        .pipe(map((resp: any) => {
          console.log("respuesta", resp);
  
          Swal.fire({
            title: 'Tamanio creado',
           text: tamanio.alcance,
            icon: 'success' });
            this.router.navigate(['/newProject']);
          return resp.tamanio;
  
        }), catchError((err: any) => {
  
          Swal.fire({
            title: 'Error en el registro',
            text: 'El tamanio ya existe!!! ',
            icon: 'error'
           });
  
          return empty();
  
        }));
  
    }
  
  }