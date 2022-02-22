import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.modelo';
import { Cancion } from 'src/app/interface/cancion.modelo';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {
  formulario1 = this.nuevoFormualario.group({
    nombre:'',
    color:'',
    pelicula:''
   
});

formulario2 = this.nuevoFormualario.group({
  titulo:'',
  artista:''
 
});


ngOnInit(): void {
}

//PRACTICA SERVICE
constructor(private nuevoFormualario:FormBuilder,private UserService:UserService){}


//PRACTICA SERVICE


guardar(){
    let nuevoUsuario : User = {
      nombre :this.formulario1.get('nombre')?.value,
      pelicula :this.formulario1.get('pelicula')?.value,
      color :this.formulario1.get('color')?.value,
    }

    //PRACTICA SERVICE
    this.UserService.addUser(nuevoUsuario);
    this.limpiarForms();
  
  }
  limpiarForms() {
    this.formulario1.reset();
  }


  //Formulario2
  canciones:Cancion[]=[];
  guardar2(){
    let nuevoUsuario2 : Cancion = {
      titulo :this.formulario2.get('titulo')?.value,
      artista :this.formulario2.get('artista')?.value,
    }
    
    this.canciones.push(nuevoUsuario2);
    this.limpiarForms2();
  
  }

  limpiarForms2() {
    this.formulario2.reset();
  }

   
  mensaje = "Vuelve pronto ♥ ";
}





