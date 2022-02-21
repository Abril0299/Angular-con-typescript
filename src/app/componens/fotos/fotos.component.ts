import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor() { }
  

    formulario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido:new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    comentario: new FormControl('',Validators.required),

  })

  ngOnInit(): void {
  }

  onsubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.formulario.value);
    
  }
  mensaje = "Vuelve pronto ♥ ";
}


