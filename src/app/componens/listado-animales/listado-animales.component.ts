import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listado-animales',
  templateUrl: './listado-animales.component.html',
  styleUrls: ['./listado-animales.component.css']
})
export class ListadoAnimalesComponent implements OnInit {

  constructor(private ApiService:ApiService) { }
  arreglo:[]=[];
  ngOnInit(): void {
    this.ApiService.getUser().subscribe((res:any)=>{

      this.arreglo = res;
      console.log(this.arreglo)
  
  
       }  )
  }

}
