import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = 
[
  { path: 'home', component: ContentComponent },
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  //{ path: 'register', component: "<p>Registrese</p>" },
  //{ path: 'login', component: "<p>Iniciar sesion</p>" },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
