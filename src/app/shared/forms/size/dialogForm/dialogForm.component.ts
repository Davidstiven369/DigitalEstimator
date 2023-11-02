

import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import { Router } from '@angular/router';

import { TamanioService } from 'src/app/services/tamanio.service';
import { Tamanio } from 'src/app/models/tamanio.models';










@Component({
  selector: 'app-dialogForm',
  templateUrl: './dialogForm.component.html',
  styleUrls: ['./dialogForm.component.css'],
 
  providers: [TamanioService]
  //david
})










@Injectable({  providedIn: "root"})
export class DialogFormsizeComponent implements OnInit {

  
 

  
  

  formulario: FormGroup;

  constructor(
    //solucionar 
    private tamanioService: TamanioService,
    

    public dialogRef: MatDialogRef<DialogFormsizeComponent>, 
    private formBuilder: FormBuilder) { 

      this.formulario = this.formBuilder.group({
        epica: new FormControl('', [Validators.required]),
        hu: new FormControl('', [Validators.required]),
        alcance: new FormControl('', [Validators.required,]),
        grado: new FormControl('', [Validators.required]),
       
      });
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

 //david
  enviar() {
        
          console.log("data test", this.formulario.value);
          

          


          const tamanio = new Tamanio( this.formulario.value.epica,this.formulario.value.hu,
          this.formulario.value.alcance,this.formulario.value.grado);
          

          this.tamanioService.crearTamanio(tamanio).subscribe();
      
            this.dialogRef.close();
      
     }
            
    
      }


  