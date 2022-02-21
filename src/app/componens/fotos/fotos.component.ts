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


  nombre = '';
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
    
  }
  mensaje = "Vuelve pronto ♥ ";
}


