import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../../../services/usuario.service';




@Component({
  selector: 'app-dialogForm',
  templateUrl: './dialogForm.component.html',
  styleUrls: ['./dialogForm.component.css']
})
export class DialogFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    public usuarioService: UsuarioService,

    public dialogRef: MatDialogRef<DialogFormComponent>, 
    private formBuilder: FormBuilder,
    private router: Router) { 

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

  enviar() {
    const token = this.generarCadenaAleatoria();
    if (!this.formulario.invalid && token != null) {
      this.usuarioService.guardarStorage(token);
      this.usuarioService.crearUsuario(this.formulario.value);
      
      this.dialogRef.close();
      
    }
    console.log("data ", this.formulario.value);
    
  }

}
