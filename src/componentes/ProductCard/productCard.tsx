import type { Produto } from "../../types/produto";
import "./productCard.scss";

interface ProductCardProps {
  produto: Produto;
  onSelect: (produto: Produto) => void;
}

export default function ProductCard({
  produto,
  onSelect,
}: ProductCardProps) {
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(produto.price);

  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={produto.photo}
        alt={produto.productName}
        loading="lazy"
      />

      <div className="product-card__content">
        <h3 className="product-card__name">
          {produto.descriptionShort}
        </h3>

        <strong className="product-card__price">
          {precoFormatado}
        </strong>

        <p className="product-card__shipping">
          Frete grátis
        </p>

        <button
          className="product-card__button"
          type="button"
          onClick={() => onSelect(produto)}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
}
