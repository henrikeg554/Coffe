import { useState } from "react";
import "./App.css";

import Header        from "./components/Header";
import Banner        from "./components/Banner";
import ListaProdutos from "./components/ListaProdutos";
import Sobre         from "./components/Sobre";
import Footer        from "./components/Footer";

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState("inicio");

  function mudarPagina(pagina) {
    setPaginaAtiva(pagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderizarPagina() {
    if (paginaAtiva === "inicio")   return <Banner mudarPagina={mudarPagina} />;
    if (paginaAtiva === "produtos") return <ListaProdutos />;
    if (paginaAtiva === "sobre")    return <Sobre />;
    if (paginaAtiva === "contato")  return <Footer />;
  }

  return (
    <div className="App">
      <Header paginaAtiva={paginaAtiva} mudarPagina={mudarPagina} />

      <main>
        {renderizarPagina()}
      </main>

      {paginaAtiva !== "contato" && <Footer />}
    </div>
  );
}

export default App;
