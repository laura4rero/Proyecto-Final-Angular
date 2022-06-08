import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FooterComponent } from './footer/footer.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    FooterComponent,
    ComoFuncionaComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: ContentComponent },
      { path: 'como-funciona', component: ComoFuncionaComponent },
      { path: 'iniciar-sesion', component: IniciarSesionComponent },
      //{ path: 'register', component: "<p>Registrese</p>" },
      //{ path: 'login', component: "<p>Iniciar sesion</p>" },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
