import { Produto } from "./Produto.ts";

export class Pizza extends Produto {
  tamanho: string;
  sabores: string[];
  bordaRecheada: boolean;

  constructor(nome: string, preco: number, tamanho: string, sabores: string[], bordaRecheada: boolean) {
    super(nome, preco);
    this.tamanho = tamanho;
    this.sabores = sabores;
    this.bordaRecheada = bordaRecheada;
  }
}