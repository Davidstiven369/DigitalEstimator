import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newProject',
  templateUrl: './newProject.component.html',
  styleUrls: ['./newProject.component.css']
})

export class NewProjectComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  token: string;
  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {}
  
  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.threeFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fiveFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  copiarCodigo(token){
    console.log(token);
    
    navigator.clipboard.writeText(token);
    this._snackBar.open('Copiaste el código', 'cerrar', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}

