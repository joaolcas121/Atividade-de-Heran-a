import { Produto } from "./Produto.ts";

export class Pedido {
  itens: Produto[] = [];
  status: string = "recebido";
  total: number = 0;

  adicionarItem(p: Produto) {
    this.itens.push(p);
    console.log(p.nome + " adicionado");
  }

  removerItem(p: Produto) {
    this.itens = this.itens.filter(item => item !== p);
  }

  calcularTotal(): number {
    this.total = 0;
    this.itens.forEach(p => this.total += p.preco);
    return this.total;
  }

  aplicarDesconto(percentual: number) {
    this.total -= this.total * (percentual / 100);
  }

  mudarStatus(status: string) {
    this.status = status;
    console.log("Status:", status);
  }
}