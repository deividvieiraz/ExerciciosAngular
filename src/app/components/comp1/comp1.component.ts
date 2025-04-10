import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component {
  mes: number = 1;

  update() {
    this.mes = Number(
      (document.getElementById('mes') as HTMLInputElement).value
    );
  }

  itens: string[] = ['Maçã', 'Banana', 'Abacaxi'];
}
