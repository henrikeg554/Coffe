// ================================
// IMPORTAÇÕES
// ================================
import { useState } from "react";
import CardProduto from "./CardProduto";

// ================================
// DADOS — array de produtos
// igual ao meusItens da apostila
// ================================
const produtos = [
  {
    id: 1,
    nome: "Espresso",
    preco: "R$ 8,00",
    descricao: "Encorpado e intenso, 30ml puro.",
    foto: "https://www.thespruceeats.com/thmb/TBMkEMkbq1RCeSWoq2XstMSw7Qg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-01-379503a96b6f4fcabda777e2d20e3a73.jpg",
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
    foto: "https://newkingscoffee.com/cdn/shop/articles/Cold_Brew_Iced_Coffee_Blog_Post_Image.jpg?v=1679411501",
  },
  {
    id: 4,
    nome: "Latte",
    preco: "R$ 14,00",
    descricao: "Espresso suave com muito leite cremoso.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Espresso_Bar%2C_Oxford.jpg/1280px-Latte_at_Doppio_Espresso_Bar%2C_Oxford.jpg",
  },
  {
    id: 5,
    nome: "Filtrado V60",
    preco: "R$ 18,00",
    descricao: "Método manual, grão de origem única.",
    foto: "https://perfectdailygrind.com/wp-content/uploads/2020/07/coffee-roastery-design.jpg",
  },
  {
    id: 6,
    nome: "Americano",
    preco: "R$ 10,00",
    descricao: "Espresso alongado com água quente.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Flat_white_coffee_with_pretty_feather_pattern.jpg/1200px-Flat_white_coffee_with_pretty_feather_pattern.jpg",
  },
];

// ================================
// COMPONENTE: ListaProdutos
// ================================
function ListaProdutos() {
  // useState para busca — apostila pág. 31
  const [busca, setBusca] = useState("");

  // .filter() para filtrar os produtos pela busca
  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={estilosLista.secao}>
      <h2 style={estilosLista.titulo}>Nosso Cardápio</h2>
      <p style={estilosLista.subtitulo}>Cada xícara, uma experiência única</p>

      {/* Input com onChange — apostila Form.js */}
      <input
        type="text"
        placeholder="🔍 Buscar bebida..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={estilosLista.inputBusca}
      />

      {/* Grade de cards — .map() igual à apostila pág. 46 */}
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

      {/* Condicional && — apostila pág. 40 */}
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
