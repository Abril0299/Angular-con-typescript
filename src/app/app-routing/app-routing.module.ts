import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';


import { InicioComponent } from '../componens/inicio/inicio.component';
import { InformacionComponent } from '../componens/informacion/informacion.component';
import { FotosComponent } from '../componens/fotos/fotos.component';
import { ContactoComponent } from '../componens/contacto/contacto.component';
import { ListaUsuariosComponent } from '../componens/lista-usuarios/lista-usuarios.component';
import { ApiAnimalComponent } from '../componens/api-animal/api-animal.component';
import { ListadoAnimalesComponent } from '../componens/listado-animales/listado-animales.component';


const routes : Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },

  {
    path:'informacion',
    component:InformacionComponent
  },

  {
    path:'contacto',
    component:ContactoComponent
  },

  {
    path:'fotos',
    component:FotosComponent
  },

  {
    path:'listado',
    component:ListaUsuariosComponent
  },

  {
    path:'animal',
    component:ApiAnimalComponent
  },

  {
    path:'listaAnimales',
    component:ListadoAnimalesComponent
  },
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
