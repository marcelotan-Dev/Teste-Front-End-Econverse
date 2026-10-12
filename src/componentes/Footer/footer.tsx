import logoEconverse from "../../assets/Grupo 9.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";

import "./footer.scss";

const gruposLinks = [
  {
    titulo: "Institucional",
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    titulo: "Ajuda",
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    titulo: "Termos",
    links: [
      "Termos e Condições",
      "Política de Privacidade",
      "Troca e Devolução",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__principal">
        <div className="footer__container">
          <div className="footer__empresa">
            <img
              src={logoEconverse}
              alt="Econverse"
              className="footer__logo"
            />

            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <div className="footer__redes">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={instagram} alt="" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src={facebook} alt="" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>

          <nav
            className="footer__links"
            aria-label="Informações institucionais"
          >
            {gruposLinks.map((grupo) => (
              <div className="footer__coluna" key={grupo.titulo}>
                <h3>{grupo.titulo}</h3>

                <ul>
                  {grupo.links.map((link) => (
                    <li key={link}>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="footer__inferior">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  );
}
