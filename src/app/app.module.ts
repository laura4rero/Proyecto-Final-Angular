import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { RegistreseComponent } from './registrese/registrese.component';
import { TerminosDeUsoComponent } from './terminos-de-uso/terminos-de-uso.component';
import { PoliticasDePrivacidadComponent } from './politicas-de-privacidad/politicas-de-privacidad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DbserviceService } from './service/dbservice.service';
import { AccountComponent } from './account/account.component';
import { CuponesComponent } from './cupones/cupones.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent,
    FooterComponent,
    ComoFuncionaComponent,
    IniciarSesionComponent,
    RegistreseComponent,
    TerminosDeUsoComponent,
    PoliticasDePrivacidadComponent,
    ContactoComponent,
    AccountComponent,
    CuponesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule,
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
