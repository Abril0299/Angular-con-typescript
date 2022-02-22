import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  select : string = ""
  facebook : string=''
  instagram : string=''
  whats : String=''
  constructor() { }

  ngOnInit(): void {
  }
  

}
