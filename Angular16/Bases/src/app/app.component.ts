import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title:string = 'Bases';
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

  get DameTitle():string{
    return this.title;
  }
}
