import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <img src="/imagens/logo.svg" alt="CH Construtora logo" />
    <nav>
      <Link to="/">Início</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/obras">Obras</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  </Top>
)

export default Header;