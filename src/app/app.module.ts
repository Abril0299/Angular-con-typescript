import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componens/footer/footer.component';
import { InicioComponent } from './componens/inicio/inicio.component';
import { InformacionComponent } from './componens/informacion/informacion.component';
import { ContactoComponent } from './componens/contacto/contacto.component';
import { FotosComponent } from './componens/fotos/fotos.component';
import { HeaderComponent } from './componens/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './componens/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent,
    InicioComponent,
    InformacionComponent,
    ContactoComponent,
    FotosComponent,
    HeaderComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
