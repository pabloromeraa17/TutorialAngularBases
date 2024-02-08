import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <!-- <h1>Componente CounterComponent</h1> -->
    <!-- <h2>Nuestra aplicacion se llama {{DameTitle}}</h2> -->

    <h3>{{ counter }}</h3>

    <input (click)="incrementar()" type="button" value="+1" >
    <input (click)="reset()" type="button" value="Reset">
    <input (click)="decrementar()" type="button" value="-1">
  `,
  styles: ``
})
export class CounterComponent {
  // private title:string = 'Bases';
  counter:number = 10;

  incrementar():void {
    this.counter = this.counter + 1 ;
  }

  decrementar():void {
    this.counter = this.counter - 1 ;
  }

  reset():void{
    this.counter = 10;
  }

  // get DameTitle():string{
  //   return this.title;
  // }
}
