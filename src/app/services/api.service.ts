import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../interface/api';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }

/*animalnuevo:any[]=[];*/

  getUser(){
    return this.http.get("http://localhost:8080/animales");
 }


  EnviarAnimal(animal:Api){
   return this.http.post("http://localhost:8080/animales",animal)
  }


}
