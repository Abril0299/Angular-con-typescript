import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';


import { InicioComponent } from '../componens/inicio/inicio.component';
import { InformacionComponent } from '../componens/informacion/informacion.component';
import { FotosComponent } from '../componens/fotos/fotos.component';
import { ContactoComponent } from '../componens/contacto/contacto.component';



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
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
