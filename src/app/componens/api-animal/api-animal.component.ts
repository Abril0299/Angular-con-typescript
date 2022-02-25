import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Api } from 'src/app/interface/api';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-api-animal',
  templateUrl: './api-animal.component.html',
  styleUrls: ['./api-animal.component.css']
})
export class ApiAnimalComponent implements OnInit {
  arreglo:[]=[];

  formulario1= this.Formulario.group({
    nombre:'',
    color:'',
    especie:'',
   
  });

  constructor(private ApiService:ApiService, private Formulario:FormBuilder) { }


  ngOnInit(): void {}
   
  
  guardar() {
  let nuevoanimal : Api={
  nombre: this.formulario1.get('nombre')?.value,
  color:this.formulario1.get('color')?.value,
  especie:this.formulario1.get('especie')?.value,
 }

  this.ApiService.EnviarAnimal(nuevoanimal).subscribe((respuesta:any)=>{
  console.log(respuesta);
  this.limpiarForms();

 }

)
}

limpiarForms() {
  this.formulario1.reset();
}

}