import { useState } from "react";

function CardProduto(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...estilosCard.card,
        border: hovered ? "1px solid #C8952A" : "1px solid rgba(200,149,42,0.25)",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={props.foto}
        alt={props.nome}
        style={estilosCard.imagem}
      />

      <div style={{ padding: "20px" }}>
        <h3 style={estilosCard.titulo}>{props.nome}</h3>
        <p style={estilosCard.descricao}>{props.descricao}</p>
        <span style={estilosCard.preco}>{props.preco}</span>
      </div>
    </div>
  );
}

const estilosCard = {
  card: {
    backgroundColor: "rgba(245,237,214,0.04)",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "default",
  },
  imagem: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    display: "block",
  },
  titulo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.2rem",
    color: "#F5EDD6",
    marginBottom: "8px",
  },
  descricao: {
    color: "rgba(245,237,214,0.5)",
    fontSize: "14px",
    lineHeight: 1.6,
    marginBottom: "16px",
  },
  preco: {
    color: "#C8952A",
    fontWeight: "bold",
    fontSize: "15px",
  },
};

export default CardProduto;
