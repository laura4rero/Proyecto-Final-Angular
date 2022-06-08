import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';


const routes: Routes = 
[
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
