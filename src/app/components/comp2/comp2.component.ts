import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
})
export class Comp2Component {
  idade: number = 0;

  update() {
    this.idade = Number(
      (document.getElementById('idade') as HTMLInputElement).value
    );
  }

  tarefas: string[] = ['Esudar Angular', 'Fazer Exercícios', 'Revisar Código'];

  remover(tarefa: string) {
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
  }
}
