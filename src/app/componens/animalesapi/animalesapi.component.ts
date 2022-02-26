import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Apis } from 'src/app/interface/apis';
import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-animalesapi',
  templateUrl: './animalesapi.component.html',
  styleUrls: ['./animalesapi.component.css']
})

export class AnimalesapiComponent implements OnInit {

  arreglo:[]=[];
  formulario1= this.Formulario.group({
    color:'',
    especie:'',
    nombre:''
  })
  
  constructor(private apiService:ApiService, private Formulario:FormBuilder) { }

  ngOnInit(): void {

    
    this.apiService.getUser().subscribe((res:any)=>{
      this.arreglo = res;
      console.log(this.arreglo)
     })
  }
  guardar(){

  }
}
