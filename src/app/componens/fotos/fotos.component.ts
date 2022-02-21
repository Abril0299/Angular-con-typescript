import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  formulario = this.formBuilder.group({
    nombre: '',
    apellido: '',
    email:'',
    comentario:'',
  });

  nombre='';
  apellido='';
  email='';
  status = false;

  constructor(private formBuilder: FormBuilder,) { 
  }

  ngOnInit(): void {
  }

  onsubmit() {
    console.log(this.formulario.value);
    console.log('Datos guardados con exito !');
    this.status = true
    this.nombre = this.formulario.get('nombre')?.value
    this.apellido = this.formulario.get('apellido')?.value
    this.email = this.formulario.get('email')?.value
    
this.limpiarForm();

  }

  limpiarForm(){
    this.formulario.reset()
  }
  mensaje = "Vuelve pronto ♥ ";
}


