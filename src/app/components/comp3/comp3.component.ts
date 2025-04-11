import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})
export class Comp3Component {
    status:string = "pendente"

    update() {
        this.status = (document.getElementById("status") as HTMLInputElement).value
    }

    usuarios:Usuario[] = [{nome: "Ana", idade: 18}, {nome: "Carlos", idade: 25}]
}

interface Usuario {
  nome:string;
  idade:number;
}
