import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
            <p>Contador: {{contador}}</p>
            <button (click)="incrementar(1)" >+1</button>
            <button (click)="resetear()" >Resetear</button>
            <button (click)="incrementar(-1)" >-1</button>
  `
})

export class ContadorComponet {
  public contador:number = 10;

  incrementar(value:number): void {
    this.contador += value;
  }

  resetear(): void {
    this.contador=10;
  }
}
