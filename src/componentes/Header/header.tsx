
import { useState } from "react";
import "./header.scss";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <div className="header__benefits">
        <span>♢ Compra 100% segura</span>
        <span>🚚 Frete grátis acima de R$ 200</span>
        <span>▤ Parcele suas compras</span>
      </div>

      <div className="header__main">
        <a href="/" className="header__logo" aria-label="Econverse - Início">
          <span className="header__logo-circle">eco</span>nverse
        </a>

        <form
          className="header__search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" aria-label="Buscar">
            <span aria-hidden="true">⌕</span>
          </button>
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Meus pedidos">▣</button>
          <button type="button" aria-label="Favoritos">♡</button>
          <button type="button" aria-label="Minha conta">◎</button>
          <button type="button" aria-label="Carrinho">🛒</button>
        </div>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        <a href="#categorias">Todas categorias</a>
        <a href="#categorias">Supermercado</a>
        <a href="#categorias">Livros</a>
        <a href="#categorias">Moda</a>
        <a href="#categorias">Lançamentos</a>
        <a href="#ofertas" className="header__highlight">
          Ofertas do dia
        </a>
        <a href="#newsletter">♕ Assinatura</a>
      </nav>
    </header>
  );
}
