import { useState } from "react";
import type { FormEvent } from "react";
import "./newsletter.scss";

export default function Newsletter() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !aceitouTermos) {
      setMensagem("Preencha os campos e aceite os termos.");
      return;
    }

    // O teste não fornece uma API de inscrição.
    // Por enquanto, validamos os dados localmente.
    setMensagem("Formulário validado. Inscrição demonstrativa.");
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__texto">
          <h2>Inscreva-se na nossa newsletter</h2>

          <p>
            Assine nossa newsletter e receba as novidades
            e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form
          className="newsletter__formulario"
          onSubmit={enviarFormulario}
        >
          <div className="newsletter__campos">
            <input
              type="text"
              placeholder="Digite seu nome"
              aria-label="Seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              aria-label="Seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">INSCREVER</button>
          </div>

          <label className="newsletter__termos">
            <input
              type="checkbox"
              checked={aceitouTermos}
              onChange={(event) =>
                setAceitouTermos(event.target.checked)
              }
              required
            />
            Aceito os termos e condições
          </label>

          {mensagem && (
            <p className="newsletter__mensagem" role="status">
              {mensagem}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
