import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ContentComponent } from './content/content.component';
import { RegistreseComponent } from './registrese/registrese.component';
import { TerminosDeUsoComponent } from './terminos-de-uso/terminos-de-uso.component';
import { PoliticasDePrivacidadComponent } from './politicas-de-privacidad/politicas-de-privacidad.component';

const routes: Routes = 
[
  { path: 'home', component: ContentComponent },
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrese', component: RegistreseComponent },
  { path: 'terminos-de-uso', component: TerminosDeUsoComponent },
  { path: 'politicas-de-privacidad', component: PoliticasDePrivacidadComponent },
  
  
  
  //{ path: 'register', component: "<p>Registrese</p>" },
  //{ path: 'login', component: "<p>Iniciar sesion</p>" },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
