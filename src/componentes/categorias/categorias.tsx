
import "./categorias.scss";

import tecnologia from "../../assets/icones/tecnologia.svg";
import supermercado from "../../assets/icones/supermercado.svg";
import bebidas from "../../assets/icones/bebidas.svg";
import ferramentas from "../../assets/icones/ferramentas.svg";
import saude from "../../assets/icones/saude.svg";
import esportes from "../../assets/icones/esportes.svg";
import moda from "../../assets/icones/moda.svg";

const categorias = [
  { nome: "Tecnologia", imagem: tecnologia },
  { nome: "Supermercado", imagem: supermercado },
  { nome: "Bebidas", imagem: bebidas },
  { nome: "Ferramentas", imagem: ferramentas },
  { nome: "Saúde", imagem: saude },
  { nome: "Esportes e Fitness", imagem: esportes },
  { nome: "Moda", imagem: moda },
];

export default function Categorias() {
  return (
    <section
      className="categorias"
      id="categorias"
      aria-label="Categorias de produtos"
    >
      <div className="categorias__container">
        {categorias.map((categoria) => (
          <div className="categorias__item" key={categoria.nome}>
            <img
              src={categoria.imagem}
              alt={categoria.nome}
              className="categorias__imagem"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
