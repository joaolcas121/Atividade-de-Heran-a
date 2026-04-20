import { Produto } from "./Produto.ts";

export class Sobremesa extends Produto {
  porcoes: number;

  constructor(nome: string, preco: number, porcoes: number) {
    super(nome, preco);
    this.porcoes = porcoes;
  }
}