export interface Produto {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface RespostaProdutos {
  success: boolean;
  products: Produto[];
}
