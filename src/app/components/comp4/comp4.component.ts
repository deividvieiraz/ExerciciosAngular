import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comp4.component.html',
  styleUrl: './comp4.component.css'
})
export class Comp4Component {
  numero:number = 1

  n1: number = 0;
  n2: number = 0;
  operacao: string = "";
  resultado: number | null = null;
  erroDivisao: boolean = false;

  email: string = '';
  senha: string = '';
  mensagem: 'obrigatorio' | 'invalido' | 'sucesso' | '' = '';

  validarLogin(): void {
    if (!this.email || !this.senha) {
      this.mensagem = 'obrigatorio';
    } else if (!this.email.includes('@') || this.senha.length < 6) {
      this.mensagem = 'invalido';
    } else if (this.email === 'user@teste.com' && this.senha === '123456') {
      this.mensagem = 'sucesso';
    } else {
      this.mensagem = 'invalido';
    }
  }

  produtos: Produto[] = [{ nome: "Notebook", preco: 3000, promocao: true }, { nome: "Mouse", preco: 50, promocao: false }]

  update() {
    this.operacao = (document.getElementById("operacao") as HTMLInputElement).value
  }

  calcular(): void {
    this.erroDivisao = false;

    switch (this.operacao) {
      case 'so':
        this.resultado = this.n1 + this.n2;
        break;
      case 'su':
        this.resultado = this.n1 - this.n2;
        break;
      case 'di':
        if (this.n2 === 0) {
          this.erroDivisao = true;
          this.resultado = null;
        } else {
          this.resultado = this.n1 / this.n2;
        }
        this.resultado = this.n2 !== 0 ? this.n1 / this.n2 : null;
        break;
      case 'mu':
        this.resultado = this.n1 * this.n2;
        break;
      default:
        this.resultado = null;
    }
  }
}

interface Produto {
  nome: string;
  preco: number;
  promocao: boolean;
}

