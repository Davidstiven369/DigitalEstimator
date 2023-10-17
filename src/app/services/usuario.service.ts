import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.models';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { empty } from 'rxjs';




export class UsuarioService {
  usuario: Usuario;
  token: string;
    constructor(public http: HttpClient, public router: Router) {
      this.cargarStorage();
    }
  
   
  
    estaLogueado() {
      return (this.token.length > 5) ? true : false;
  
    }
  
    cargarStorage() {
  
      if (localStorage.getItem('token')) {
        this.token = localStorage.getItem('token');
      } else {
        this.token = '';
      }
    }
  
   
  
   
  
   
  
    guardarStorage(token: string) {
  
     localStorage.setItem('token', token);
  
      this.token = token;
    }

    logout() {

      const url = URL_SERVICIOS + '/conexion';
      return this.http.put(url,null)
      .pipe(map(resp => {
          this.token = '';
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
  
          return true;
  
        }));
  
    }
  
   
  
   
  
    login(usuario: Usuario, recordar = false) {
  
      if (recordar) { localStorage.setItem('correo', usuario.correo);} else {
       localStorage.removeItem('correo');
  
      }

      const url = URL_SERVICIOS + '/usuario';
  
      return this.http.post(url, usuario)
  
        .pipe(map((resp: any) => {
  
         return true;
  
        }), catchError((err: any) => {
  
    this.router.navigate(['/login']);
           Swal.fire({
           title: 'Error en el login',
           text: 'Correo o contraseña inválidos',
           icon: 'error'
  
          });
          return empty();
  
        }));
  
    }
  
   
  
    crearUsuario(usuario: Usuario) {
  
   const url = URL_SERVICIOS + '/usuario';
  
      return this.http.post(url, usuario)
  
        .pipe(map((resp: any) => {
  
          Swal.fire({
            title: 'Usuario creado',
            text: usuario.correo,
            icon: 'success' });
            this.router.navigate(['/newProject']);
          return resp.usuario;
  
        }), catchError((err: any) => {
  
          Swal.fire({
            title: 'Error en el registro',
            text: 'El correo ya existe!!! ',
            icon: 'error'
           });
  
          return empty();
  
        }));
  
    }
  
  }