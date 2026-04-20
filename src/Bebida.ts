import { Produto } from "./Produto.ts";

export class Bebida extends Produto {
  volume: number;
  gelada: boolean;

  constructor(nome: string, preco: number, volume: number, gelada: boolean) {
    super(nome, preco);
    this.volume = volume;
    this.gelada = gelada;
  }
}