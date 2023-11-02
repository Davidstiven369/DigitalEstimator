import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';





import { NewProjectComponent } from './components/newProject/newProject.component';
import { ExistingProjectComponent } from './components/existingProject/existingProject.component';
import { NoPagedFoundComponent } from './shared/pageNotFound/pageNotFound.component';


const routes: Routes = [

  
  { path: 'login', component: LoginComponent },
  { path: 'newProject', component: NewProjectComponent },
  { path: 'existingProject', component: ExistingProjectComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NoPagedFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
