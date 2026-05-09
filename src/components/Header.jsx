// ================================
// COMPONENTE: Header (Navbar)
// Props: paginaAtiva, mudarPagina
// ================================
function Header(props) {
  const links = ["inicio", "produtos", "sobre", "contato"];

  return (
    <header style={estilosHeader.header}>
      {/* Logo */}
      <div
        onClick={() => props.mudarPagina("inicio")}
        style={estilosHeader.logo}
      >
        ☕ Grão Negro
      </div>

      {/* Links — .map() igual à apostila */}
      <nav style={estilosHeader.nav}>
        {links.map((link) => (
          <button
            key={link}
            onClick={() => props.mudarPagina(link)}
            style={{
              ...estilosHeader.navBtn,
              color: props.paginaAtiva === link ? "#C8952A" : "#F5EDD6",
              borderBottom:
                props.paginaAtiva === link
                  ? "2px solid #C8952A"
                  : "2px solid transparent",
            }}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
}

const estilosHeader = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "rgba(26,15,7,0.97)",
    borderBottom: "1px solid rgba(200,149,42,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.3rem",
    color: "#F5EDD6",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  nav: { display: "flex", gap: "24px" },
  navBtn: {
    background: "none",
    border: "none",
    fontSize: "14px",
    letterSpacing: "1px",
    padding: "4px 0",
    cursor: "pointer",
    fontFamily: "'Lato', sans-serif",
    transition: "color 0.3s",
  },
};

export default Header;
