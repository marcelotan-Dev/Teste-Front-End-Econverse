import type { Produto, RespostaProdutos } from "../types/produto";

export async function buscarProdutos(): Promise<Produto[]> {
  const resposta = await fetch("/dados/produtos.json");

  if (!resposta.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  const dados: RespostaProdutos = await resposta.json();

  if (!dados.success || !Array.isArray(dados.products)) {
    throw new Error("Formato do JSON inválido.");
  }

  return dados.products;
}
