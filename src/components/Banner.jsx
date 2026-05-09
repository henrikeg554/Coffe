// ================================
// COMPONENTE: Banner (Hero)
// Props: mudarPagina
// ================================
function Banner(props) {
  return (
    <div style={estilosBanner.banner}>
      <div style={estilosBanner.conteudo}>

        <p style={estilosBanner.subtitulo}>— Cafeteria Artesanal em São Paulo —</p>

        <h1 style={estilosBanner.titulo}>
          Onde o café<br />
          <span style={{ color: "#C8952A", fontStyle: "italic" }}>
            encontra a alma
          </span>
        </h1>

        <p style={estilosBanner.texto}>
          Grãos selecionados, torrados artesanalmente e preparados
          com carinho para cada xícara que servimos.
        </p>

        {/* Botões com onClick — evento da apostila */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => props.mudarPagina("produtos")}
            style={estilosBanner.botaoPrimario}
          >
            Ver Cardápio
          </button>

          <button
            onClick={() => props.mudarPagina("sobre")}
            style={estilosBanner.botaoSecundario}
          >
            Nossa História
          </button>
        </div>

      </div>
    </div>
  );
}

const estilosBanner = {
  banner: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
    backgroundImage:
      "linear-gradient(rgba(26,15,7,0.72), rgba(26,15,7,0.72)), url('https://liveandletsfly.com/wp-content/uploads/2023/10/coffee-sao-paulo-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  conteudo: { textAlign: "center", maxWidth: "640px" },
  subtitulo: {
    fontSize: "13px",
    letterSpacing: "3px",
    color: "#C8952A",
    marginBottom: "20px",
  },
  titulo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
    fontWeight: 700,
    color: "#F5EDD6",
    lineHeight: 1.1,
    marginBottom: "20px",
  },
  texto: {
    fontSize: "1.1rem",
    fontWeight: 300,
    color: "rgba(245,237,214,0.6)",
    lineHeight: 1.7,
    marginBottom: "36px",
  },
  botaoPrimario: {
    backgroundColor: "#C8952A",
    color: "#1A0F07",
    border: "none",
    padding: "14px 32px",
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "1px",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "'Lato', sans-serif",
  },
  botaoSecundario: {
    backgroundColor: "transparent",
    color: "#F5EDD6",
    border: "1px solid rgba(245,237,214,0.4)",
    padding: "14px 32px",
    fontSize: "14px",
    letterSpacing: "1px",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "'Lato', sans-serif",
  },
};

export default Banner;
