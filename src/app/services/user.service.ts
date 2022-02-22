import { Injectable } from '@angular/core';
import { User } from '../interface/user.modelo';


@Injectable({
  providedIn: 'root'
})
export class UserService {

usuarios:User[]=[]


tamano:number=0;



  constructor() { }

  getAll(){
    return this.usuarios;
  }

  addUser(user:User){
    this.usuarios.push(user);
  }

  ultimo(){
    this.tamano=this.usuarios.length-1;
    return this.usuarios[this.tamano]
  }

  primero(){
    return this.usuarios[0];

  }


}


