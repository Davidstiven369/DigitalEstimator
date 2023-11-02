import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { DialogFormsizeComponent } from './dialogForm/dialogForm.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})

export class SizeComponent implements OnInit  {
  
  constructor(private router: Router, public dialog: MatDialog) {}
  
  ngOnInit() {}

 openDialog(): void {
    this.dialog.open(DialogFormsizeComponent, {
      width: 'auto',
      
  });
  }
  
  

  displayedColumns: string[] = ['ID', 'Epica', 'HU', 'Alcance', 'Tamano', 'Opciones'];
  dataSource = new MatTableDataSource<Data>(ELEMENT_DATA);

  editar = false;
  //ngOnInit() {
    
  //}
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeEdit(){
    this.editar = true;
  }

 
}

export interface Data {
  id: number;
  epica: string;
  hu: string;
  alcance: string;
  tamano: number;
}

const ELEMENT_DATA: Data[] = [
  {id: 1, epica: 'Crear Login', hu: "Crear formulario", alcance: 'H', tamano: 3}
];