import { useEffect, useState } from "react";
import Header from "./componentes/Header/header";
import Banner from "./componentes/banner/banner";
import Categorias from "./componentes/categorias/categorias";
import ProductCarousel from "./componentes/ProductCarousel/productcarousel";
import ProductModal from "./componentes/ProductModal/productModal";
import { buscarProdutos } from "./servicos/produtos";
import type { Produto } from "./types/produto";
import Parceiros from "./componentes/Parceiros/parceiros";
import Marcas from "./componentes/Marcas/marcas";
import Newsletter from "./componentes/Newsletter/newsletter";
import Footer from "./componentes/Footer/footer";


function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  const [produtoSelecionado, setProdutoSelecionado] =
    useState<Produto | null>(null);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const resultado = await buscarProdutos();
        setProdutos(resultado);
      } catch (error) {
        console.error(error);
        setErro("Não foi possível carregar os produtos.");
      } finally {
        setCarregando(false);
      }
    }

    carregarProdutos();
  }, []);

  function selecionarProduto(produto: Produto) {
    setProdutoSelecionado(produto);
  }

  function fecharModal() {
    setProdutoSelecionado(null);
  }

  return (
    <>
      /* Cabeçalho */
      <Header />

      <main>

        <Banner />
        <Categorias />

        {carregando && <p>Carregando produtos...</p>}
        {erro && <p role="alert">{erro}</p>}

        <section id="ofertas">
          {!carregando && !erro && (
            <ProductCarousel
              produtos={produtos}
              onSelect={selecionarProduto}
              mostrarCategorias={true}
            />
          )}
        </section>

        <Parceiros />

        {!carregando && !erro && (
          <ProductCarousel
            produtos={produtos}
            onSelect={selecionarProduto}
            mostrarCategorias={false}
          />
        )}

        <Parceiros />

        <Marcas />

        {!carregando && !erro && (
          <ProductCarousel
            produtos={produtos}
            onSelect={selecionarProduto}
            mostrarCategorias={false}
          />
        )}
      </main>

      <Newsletter />
      <Footer />

      {produtoSelecionado && (
        <ProductModal
          produto={produtoSelecionado}
          onClose={fecharModal}
        />
      )}
    </>
  );
}

export default App;