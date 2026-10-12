import imagemParceiros from "../../assets/Mask Group.png";
import "./parceiros.scss";

export default function Parceiros() {
  return (
    <section className="parceiros" aria-label="Nossos parceiros">
      <div className="parceiros__container">
        {[1, 2].map((item) => (
          <article className="parceiros__card" key={item}>
            <img
              className="parceiros__imagem"
              src={imagemParceiros}
              alt=""
              loading="lazy"
            />

            <div className="parceiros__conteudo">
              <h2>Parceiros</h2>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>

              <button type="button">
                CONFIRA
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
