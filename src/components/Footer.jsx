import { useState } from "react";

function Footer() {

  const [form, setForm]       = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function atualizarCampo(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  function handleEnviar(e) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      alert("Preencha todos os campos!");
      return;
    }
    setEnviado(true);
  }

  return (
    <footer style={estilosFooter.footer}>

      <div style={estilosFooter.contatoSecao}>
        <h2 style={estilosFooter.titulo}>Fale Conosco</h2>
        <p style={estilosFooter.subtitulo}>
          📍 Avenida Aurora Cristal, 1508 — Consolação · Seg–Sáb das 7h às 20h
        </p>

        {enviado ? (
          <div style={estilosFooter.sucesso}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
            <h3 style={{ color: "#C8952A", fontSize: "1.5rem", marginBottom: "8px" }}>
              Mensagem enviada!
            </h3>

            <p style={{ color: "rgba(245,237,214,0.6)" }}>
              Em breve entraremos em contato, {form.nome}!
            </p>
            <button
              onClick={() => {
                setEnviado(false);
                setForm({ nome: "", email: "", mensagem: "" });
              }}
              style={estilosFooter.botao}
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleEnviar} style={estilosFooter.form}>
            <label style={estilosFooter.label}>Seu nome</label>
            <input
              type="text"
              value={form.nome}
              onChange={(e) => atualizarCampo("nome", e.target.value)}
              placeholder="Ex: João Silva"
              style={estilosFooter.input}
            />

            <label style={estilosFooter.label}>E-mail</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => atualizarCampo("email", e.target.value)}
              placeholder="seu@email.com"
              style={estilosFooter.input}
            />

            <label style={estilosFooter.label}>Mensagem</label>
            <textarea
              value={form.mensagem}
              onChange={(e) => atualizarCampo("mensagem", e.target.value)}
              placeholder="Escreva sua mensagem aqui..."
              rows={4}
              style={{ ...estilosFooter.input, resize: "vertical" }}
            />

            <input
              type="submit"
              value="Enviar Mensagem ✉️"
              style={{ ...estilosFooter.botao, cursor: "pointer", border: "none" }}
            />
          </form>
        )}
      </div>

      <div style={estilosFooter.rodape}>
        <p>☕ Doce Expresso — São Paulo, Brasil</p>
        <p style={{ color: "rgba(245,237,214,0.3)", fontSize: "13px", marginTop: "6px" }}>
          © 2026 · Feito por Guilherme Henrike com café forte e mente focada.
        </p>
      </div>

    </footer>
  );
}

const estilosFooter = {
  footer: {
    borderTop: "1px solid rgba(200,149,42,0.15)",
  },
  contatoSecao: {
    maxWidth: "520px",
    margin: "0 auto",
    padding: "64px 24px 40px",
  },
  titulo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
    color: "#F5EDD6",
    marginBottom: "8px",
    textAlign: "center",
  },
  subtitulo: {
    color: "rgba(245,237,214,0.5)",
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "13px",
    letterSpacing: "1px",
    color: "rgba(245,237,214,0.5)",
    marginTop: "8px",
  },
  input: {
    backgroundColor: "rgba(245,237,214,0.05)",
    border: "1px solid rgba(200,149,42,0.3)",
    borderRadius: "6px",
    padding: "12px 16px",
    color: "#F5EDD6",
    fontSize: "15px",
    outline: "none",
    fontFamily: "'Lato', sans-serif",
  },
  botao: {
    backgroundColor: "#C8952A",
    color: "#1A0F07",
    padding: "14px",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "1px",
    borderRadius: "4px",
    marginTop: "8px",
    fontFamily: "'Lato', sans-serif",
    textAlign: "center",
  },
  sucesso: {
    textAlign: "center",
    padding: "48px 24px",
    border: "1px solid rgba(200,149,42,0.3)",
    borderRadius: "12px",
  },
  rodape: {
    textAlign: "center",
    padding: "24px",
    borderTop: "1px solid rgba(200,149,42,0.1)",
    color: "rgba(245,237,214,0.4)",
    fontSize: "14px",
  },
};

export default Footer;
