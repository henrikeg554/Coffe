import { useState } from "react";
import CardProduto from "./CardProduto";

const produtos = [
  {
    id: 1,
    nome: "Espresso",
    preco: "R$ 8,00",
    descricao: "Encorpado e intenso, 30ml puro.",
    foto: "https://images.tcdn.com.br/img/img_prod/1015945/cafe_em_graos_para_espresso_gourmet_especial_cerrado_mineiro_3_unidades_combo_promocional_119_2_2330e60baf6be7a9ee4d7b68768aa37e.jpg",
  },
  {
    id: 2,
    nome: "Cappuccino",
    preco: "R$ 13,00",
    descricao: "Espresso + leite vaporizado + espuma.",
    foto: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg",
  },
  {
    id: 3,
    nome: "Cold Brew",
    preco: "R$ 16,00",
    descricao: "Infusão fria de 24 horas, suave e gelado.",
    foto: "https://lifesimplified.gorenje.com/wp-content/uploads/2024/06/gorenje-blog-refreshing_cold_brew_coffee.jpg",
  },
  {
    id: 4,
    nome: "Latte",
    preco: "R$ 14,00",
    descricao: "Espresso suave com muito leite cremoso.",
    foto: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/314D11A6-4457-4C70-A1BE-A6C25F597C18/Derivates/B362DC69-6AAA-43E1-AF51-184463E8551B.jpg",
  },
  {
    id: 5,
    nome: "Filtrado V60",
    preco: "R$ 18,00",
    descricao: "Método manual, grão de origem única.",
    foto: "https://revistaespresso.com.br/wordpress/wp-content/uploads/2023/01/vc-barista-75-1024x547.png",
  },
  {
    id: 6,
    nome: "Americano",
    preco: "R$ 10,00",
    descricao: "Espresso alongado com água quente.",
    foto: "https://guadarrama.coffee/cdn/shop/articles/cafe-americano-en-la-taza.jpg?v=1726039331&width=1100",
  },
];


function ListaProdutos() {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={estilosLista.secao}>
      <h2 style={estilosLista.titulo}>Nosso Cardápio</h2>
      <p style={estilosLista.subtitulo}>Cada xícara, uma experiência única</p>

      <input
        type="text"
        placeholder="🔍 Buscar bebida..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={estilosLista.inputBusca}
      />

      <div style={estilosLista.grade}>
        {produtosFiltrados.map((produto) => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            foto={produto.foto}
          />
        ))}
      </div>

      {produtosFiltrados.length === 0 && (
        <p style={estilosLista.semResultado}>
          Nenhuma bebida encontrada para "{busca}" 😕
        </p>
      )}
    </div>
  );
}

const estilosLista = {
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
  subtitulo: {
    color: "rgba(245,237,214,0.5)",
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "1rem",
  },
  inputBusca: {
    width: "100%",
    maxWidth: "400px",
    display: "block",
    margin: "0 auto 8px",
    backgroundColor: "rgba(245,237,214,0.05)",
    border: "1px solid rgba(200,149,42,0.3)",
    borderRadius: "6px",
    padding: "12px 16px",
    color: "#F5EDD6",
    fontSize: "15px",
    outline: "none",
  },
  grade: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "24px",
  },
  semResultado: {
    textAlign: "center",
    color: "rgba(245,237,214,0.5)",
    marginTop: "32px",
  },
};

export default ListaProdutos;
