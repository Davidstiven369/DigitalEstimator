import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogFormComponent } from './dialogForm/dialogForm.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) {}
  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(DialogFormComponent, {
      width: 'auto',
      
    });
  }

  existingP(){
    this.router.navigate(['/existingProject']);
  }
}
