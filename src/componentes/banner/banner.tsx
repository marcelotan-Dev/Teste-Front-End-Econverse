import "./banner.scss";
import bannerImage from "../../assets/imagem ecoverse.jpg";

export default function Banner() {
  return (
    <section className="banner">
      <img
        src={bannerImage}
        alt="Promoções Black Friday da Econverse"
        className="banner__image"
      />

      <div className="banner__overlay">
        <div className="banner__content">
          <h1>
            Venha conhecer nossas
            <br />
            promoções
          </h1>

          <p>
            <strong>50% Off</strong> nos produtos
          </p>

          <button type="button">Ver produto</button>
        </div>
      </div>
    </section>
  );
}