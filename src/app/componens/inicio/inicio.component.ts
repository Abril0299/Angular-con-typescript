import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.modelo';
import { Cancion } from 'src/app/interface/cancion.modelo';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  formulario = this.nuevoFormualario.group({
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
constructor(private nuevoFormualario:FormBuilder){}

usuarios:User[]=[];

guardar(){
    let nuevoUsuario : User = {
      nombre :this.formulario.get('nombre')?.value,
      pelicula :this.formulario.get('pelicula')?.value,
      color :this.formulario.get('color')?.value,
    }
    
    this.usuarios.push(nuevoUsuario);
    this.limpiarForms();
  
  }
  limpiarForms() {
    this.formulario.reset();
  }

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





