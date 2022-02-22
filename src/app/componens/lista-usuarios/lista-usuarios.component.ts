import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interface/user.modelo';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listado:User[]=[];

  
  primero:User = {} as User
  ultimo:User = {} as User
  
  
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
     this.listado= this.UserService.getAll()
     this.ultimo = this.UserService.ultimo()
     this.primero = this.UserService.primero()

  }

  

 


}
