import { useState } from "react";
import type { Produto } from "../../types/produto";
import ProductCard from "../ProductCard/productCard";
import "./productCarousel.scss";

interface ProductCarouselProps {
  produtos: Produto[];
  onSelect: (produto: Produto) => void;
  mostrarCategorias?: boolean;
}

const categorias = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

export default function ProductCarousel({
  produtos,
  onSelect,
  mostrarCategorias = true,
}: ProductCarouselProps) {
  const [indice, setIndice] = useState(0);
  const [categoriaAtiva, setCategoriaAtiva] = useState("CELULAR");

  const quantidadeVisivel = 4;
  const total = produtos.length;

  const produtosVisiveis = Array.from(
    { length: Math.min(quantidadeVisivel, total) },
    (_, posicao) => produtos[(indice + posicao) % total]
  );

  function proximo() {
    setIndice((atual) => (atual + 1) % total);
  }

  function anterior() {
    setIndice((atual) => (atual - 1 + total) % total);
  }

  return (
    <section className="product-carousel" id="ofertas">
      <div className="product-carousel__heading">
        <span className="product-carousel__line" />
        <h2>Produtos relacionados</h2>
        <span className="product-carousel__line" />
      </div>

      {mostrarCategorias ? (
        <div
          className="product-carousel__categories"
          aria-label="Categorias de produtos"
        >
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={
                categoriaAtiva === categoria
                  ? "product-carousel__category product-carousel__category--active"
                  : "product-carousel__category"
              }
              onClick={() => setCategoriaAtiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      ) : (
        <p className="product-carousel__see-all">Ver todos</p>
      )}

      {total > 0 ? (
        <div className="product-carousel__wrapper">
          <button
            type="button"
            className="product-carousel__arrow"
            aria-label="Produtos anteriores"
            onClick={anterior}
          >
            &#10094;
          </button>

          <div className="product-carousel__grid">
            {produtosVisiveis.map((produto, posicao) => (
              <ProductCard
                key={`${produto.productName}-${(indice + posicao) % total}`}
                produto={produto}
                onSelect={onSelect}
              />
            ))}
          </div>

          <button
            type="button"
            className="product-carousel__arrow"
            aria-label="Próximos produtos"
            onClick={proximo}
          >
            &#10095;
          </button>
        </div>
      ) : (
        <p>Nenhum produto disponível.</p>
      )}
    </section>
  );
}
