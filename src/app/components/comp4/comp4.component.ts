import { Component } from '@angular/core';

@Component({
  selector: 'app-comp4',
  standalone: true,
  imports: [],
  templateUrl: './comp4.component.html',
  styleUrl: './comp4.component.css'
})
export class Comp4Component {
    numero:number = 1
    operacao:string = ""

    isAnyInputEmpty() {
      let nome = (document.getElementById("nome") as HTMLInputElement).value
      let senha = (document.getElementById("senha") as HTMLInputElement).value
      return nome.length === 0 || senha.length === 0
    }

    produtos:Produto[] = [{nome: "Notebook", preco: 3000, promocao: true}, {nome: "Mouse", preco: 50, promocao: false}]

    update() {
      this.operacao = (document.getElementById("operacao") as HTMLInputElement).value
    }
}


interface Produto {
  nome:string;
  preco:number;
  promocao:boolean;
}

