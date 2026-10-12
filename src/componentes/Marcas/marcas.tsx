import logoEconverse from "../../assets/Group 401.png";
import "./marcas.scss";

export default function Marcas() {
  return (
    <section className="marcas" aria-labelledby="marcas-titulo">
      <h2 id="marcas-titulo">Navegue por marcas</h2>

      <div className="marcas__container">
        {Array.from({ length: 5 }, (_, index) => (
          <div className="marcas__circulo" key={index}>
            <img
              src={logoEconverse}
              alt="Econverse"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
