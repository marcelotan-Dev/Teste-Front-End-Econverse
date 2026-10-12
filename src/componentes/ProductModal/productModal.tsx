import { useEffect, useState } from "react";
import type { Produto } from "../../types/produto";
import "./productModal.scss";

interface ProductModalProps {
  produto: Produto;
  onClose: () => void;
}

export default function ProductModal({
  produto,
  onClose,
}: ProductModalProps) {
  const [quantidade, setQuantidade] = useState(1);

  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(produto.price);

  useEffect(() => {
    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", fecharComEscape);

    return () => {
      document.removeEventListener("keydown", fecharComEscape);
    };
  }, [onClose]);

  return (
    <div
      className="product-modal__overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-name"
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <div className="product-modal__image-area">
          <img
            src={produto.photo}
            alt={produto.productName}
          />
        </div>

        <div className="product-modal__information">
          <h2 id="modal-product-name">
            {produto.productName}
          </h2>

          <strong className="product-modal__price">
            {precoFormatado}
          </strong>

          <p className="product-modal__description">
            {produto.descriptionShort}
          </p>

          <a
            className="product-modal__details"
            href="#ofertas"
            onClick={(event) => event.preventDefault()}
          >
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                disabled={quantidade === 1}
                onClick={() =>
                  setQuantidade((atual) => Math.max(1, atual - 1))
                }
              >
                −
              </button>

              <span aria-live="polite">
                {String(quantidade).padStart(2, "0")}
              </span>

              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantidade((atual) => atual + 1)}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="product-modal__buy"
              onClick={() => {
                console.log("Produto:", produto.productName);
                console.log("Quantidade:", quantidade);
              }}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
