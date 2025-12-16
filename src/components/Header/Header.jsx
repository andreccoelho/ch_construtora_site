import { Link, useLocation } from "react-router-dom";
import { Top } from "./Style";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const isHome = pathname === "/";
  const isSobre = pathname === "/sobre";
  const isObras = pathname.startsWith("/obras") || pathname.startsWith("/condominios");
  const isContato = isHome && location.state && location.state.scrollToContact;

  return (
    <Top>
      <img src="/imagens/logo.svg" alt="CH Construtora logo" />
      <nav>
        <Link to="/" className={isHome && !isContato ? "active" : ""}>
          Início
        </Link>
        <Link to="/sobre" className={isSobre ? "active" : ""}>
          Sobre
        </Link>
        <Link to="/obras" className={isObras ? "active" : ""}>
          Obras
        </Link>
        <Link
          to="/"
          state={{ scrollToContact: true }}
          className={isContato ? "active" : ""}
        >
          Contato
        </Link>
      </nav>
    </Top>
  );
};

export default Header;