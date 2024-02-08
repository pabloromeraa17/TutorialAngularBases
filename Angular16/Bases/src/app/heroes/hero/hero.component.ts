import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private _nombre: string = "ironman";

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public get nombreMayusculas():string{
    return this._nombre.toUpperCase();
  }
  public edad:number = 45;

  public dimeDescripcion():string{
    return this._nombre + " - " + this.edad;
  }

  cambiarNombre():void{
    // this._nombre = "superman"
    let nuevoNombre:string | null = prompt("Dime el nuevo nombre");
    this._nombre=nuevoNombre+"";
  }

  cambiarEdad():void{
    // this.edad = 25;
    let nuevaEdad:number | null = Number(prompt("Dime la nueva edad"));
    this.edad = nuevaEdad;
  }

  reset():void{
    this._nombre="ironman";
    this.edad = 45;
  }
  

  // public nombre:string = "ironman";
  // public nombre:string = "ironman";
}
