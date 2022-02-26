import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apis } from '../interface/apis';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

 

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get("http://localhost:8080/animales");
  }
}
