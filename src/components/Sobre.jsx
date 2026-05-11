function Sobre() {

  const stats = [
    { numero: "6+",   label: "Anos de experiência" },
    { numero: "12",   label: "Origens de grão" },
    { numero: "4",    label: "Baristas certificados" },
    { numero: "500+", label: "Clientes por semana" },
  ];

  const depoimentos = [
    { id: 1, nome: "Ana Lima",    texto: "Melhor café que já tomei em SP. O V60 é incrível!", estrelas: 5 },
    { id: 2, nome: "Carlos Melo", texto: "Ambiente aconchegante e baristas super atenciosos.",  estrelas: 5 },
    { id: 3, nome: "Julia Ramos", texto: "Cold brew perfeito para as manhãs quentes de SP.",    estrelas: 5 },
  ];

  return (
    <div style={estilosSobre.secao}>
      <h2 style={estilosSobre.titulo}>Nossa História</h2>

      <div style={estilosSobre.grid}>
        <img
          src="https://servircomrequinte.francobachot.com.br/wp-content/uploads/2025/02/CAFETERIAS-FB.jpg"
          alt="Interior da cafeteria Grão Negro"
          style={estilosSobre.foto}
        />

        <div>
          <h3 style={estilosSobre.tituloSecundario}>Como tudo começou</h3>
          <p style={estilosSobre.paragrafo}>
            A Doce Expresso nasceu em 2026 da paixão de dois baristas por café de
            qualidade. Queríamos trazer para São Paulo uma experiência que respeita
            cada etapa, do grão até a sua xícara.
          </p>
          <p style={{ ...estilosSobre.paragrafo, marginTop: "12px" }}>
            Trabalhamos diretamente com produtores de Minas Gerais e Bahia,
            garantindo qualidade e comércio justo em cada compra.
          </p>
        </div>
      </div>

      <div style={estilosSobre.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={estilosSobre.statCard}>
            <span style={estilosSobre.statNumero}>{stat.numero}</span>
            <span style={estilosSobre.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <h3 style={{ ...estilosSobre.titulo, fontSize: "1.8rem", marginTop: "56px" }}>
        O que dizem nossos clientes
      </h3>
      <div style={estilosSobre.grade}>
        {depoimentos.map((dep) => (
          <div key={dep.id} style={estilosSobre.cardDepoimento}>
            <div style={{ marginBottom: "12px" }}>
              {Array(dep.estrelas).fill("★").map((estrela, i) => (
                <span key={i} style={{ color: "#C8952A", fontSize: "18px" }}>
                  {estrela}
                </span>
              ))}
            </div>
            <p style={estilosSobre.depoimentoTexto}>"{dep.texto}"</p>
            <strong style={{ color: "#C8952A", fontSize: "14px" }}>
              — {dep.nome}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}

const estilosSobre = {
  secao: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "64px 24px",
  },
  titulo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
    color: "#F5EDD6",
    marginBottom: "8px",
    textAlign: "center",
  },
  tituloSecundario: {
    color: "#C8952A",
    marginBottom: "12px",
    fontSize: "1.3rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "48px",
    alignItems: "start",
    marginTop: "32px",
  },
  foto: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "1px solid rgba(200,149,42,0.25)",
  },
  paragrafo: {
    color: "rgba(245,237,214,0.6)",
    fontSize: "1rem",
    lineHeight: 1.7,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginTop: "40px",
  },
  statCard: {
    border: "1px solid rgba(200,149,42,0.25)",
    borderRadius: "8px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
  },
  statNumero: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "2rem",
    color: "#C8952A",
  },
  statLabel: {
    fontSize: "12px",
    color: "rgba(245,237,214,0.45)",
    textAlign: "center",
  },
  grade: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "24px",
  },
  cardDepoimento: {
    backgroundColor: "rgba(245,237,214,0.04)",
    border: "1px solid rgba(200,149,42,0.2)",
    borderRadius: "8px",
    padding: "24px",
  },
  depoimentoTexto: {
    color: "rgba(245,237,214,0.7)",
    fontSize: "15px",
    lineHeight: 1.6,
    fontStyle: "italic",
    marginBottom: "12px",
  },
};

export default Sobre;
