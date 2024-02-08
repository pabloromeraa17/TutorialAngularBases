import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string []= ["Antonio Recio", "Enrique Pastor", "Amador Rivas", "Fermin Trujillo", "Coque Calatrava"];
  public heroeBorrado:string="";

  borrarUltimoHeroe():void{
    this.heroeBorrado = String(this.heroNames.pop());
  }
}
