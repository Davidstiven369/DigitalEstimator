import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import { Router } from '@angular/router';

import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.models';
//david>
import { ProyectoService } from '../../../services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto.models';
//david>





@Component({
  selector: 'app-dialogForm',
  templateUrl: './dialogForm.component.html',
  styleUrls: ['./dialogForm.component.css'],
 
  providers: [UsuarioService,ProyectoService]
  //david
})

@Injectable({  providedIn: "root"})
export class DialogFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    //solucionar 
    private proyectoService: ProyectoService,
    private usuarioService: UsuarioService,

    public dialogRef: MatDialogRef<DialogFormComponent>, 
    private formBuilder: FormBuilder) { 

      this.formulario = this.formBuilder.group({
        nombre: new FormControl('', [Validators.required]),
        empresa: new FormControl('', [Validators.required]),
        correo: new FormControl('', [Validators.required, Validators.email]),
        cargo: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        proyecto: new FormControl('', [Validators.required]),
      });
    }

  ngOnInit() {}

  generarCadenaAleatoria() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cadena = '';
    for (let i = 0; i < 10; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      cadena += caracteres[indice];
    }
    console.log(cadena);
    
    return cadena;
  }

 //david
  enviar() {
        const token = this.generarCadenaAleatoria();
         if (!this.formulario.invalid && token != null) {
          this.usuarioService.guardarStorage(token);
          console.log("data test", this.formulario.value);
          

          const proyecto = new Proyecto (this.formulario.value.proyecto,token);


          const usuario = new Usuario(this.formulario.value.nombre,this.formulario.value.empresa,
          this.formulario.value.correo,this.formulario.value.cargo,this.formulario.value.telefono);
          this.usuarioService.crearUsuario(usuario).subscribe();


          this.proyectoService.crearProyecto(proyecto).subscribe();
      
            this.dialogRef.close();
      
   }
            
    
  }

}
