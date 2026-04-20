import { Pizza } from "./Pizza.ts";
import { Bebida } from "./Bebida.ts";
import { Sobremesa } from "./Sobremesa.ts";
import { Pedido } from "./Pedido.ts";

console.log("\nPedido iniciado\n");

const pizza = new Pizza("Pizza Grande", 50, "Grande", ["Calabresa", "Queijo"], true);
const refri = new Bebida("Coca-Cola", 10, 2, true);
const doce = new Sobremesa("Brownie", 15, 2);

const pedido = new Pedido();

pedido.adicionarItem(pizza);
pedido.adicionarItem(refri);
pedido.adicionarItem(doce);

console.log("Total:", pedido.calcularTotal());

pedido.aplicarDesconto(10);
console.log("Total com desconto:", pedido.total);

pedido.mudarStatus("preparando");
pedido.mudarStatus("saiu");
pedido.mudarStatus("entregue");