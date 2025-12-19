import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Top, MenuButton, MobileMenu, MobileMenuLinks, MobileBackdrop } from "./Style";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const isHome = pathname === "/";
  const isSobre = pathname === "/sobre";
  const isObras = pathname.startsWith("/obras") || pathname.startsWith("/condominios");
  const isContato = isHome && location.state && location.state.scrollToContact;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Top $scrolled={scrolled}>
      <img src="/imagens/logo.svg" alt="CH Construtora logo" className="logo" />

      <nav className="desktop-nav">
        <Link to="/" className={isHome && !isContato ? "active" : ""}>
          Início
        </Link>
        <Link to="/sobre" className={isSobre ? "active" : ""}>
          Sobre
        </Link>
        <Link to="/obras" className={isObras ? "active" : ""}>
          Projetos
        </Link>
        <Link
          to="/"
          state={{ scrollToContact: true }}
          className={isContato ? "active" : ""}
        >
          Contato
        </Link>
      </nav>

      <MenuButton
        type="button"
        aria-label="Abrir menu de navegação"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </MenuButton>

      {menuOpen && <MobileBackdrop onClick={closeMenu} />}

      <MobileMenu open={menuOpen} aria-hidden={!menuOpen}>
        <MobileMenuLinks>
          <Link
            to="/"
            className={isHome && !isContato ? "active" : ""}
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className={isSobre ? "active" : ""}
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link
            to="/obras"
            className={isObras ? "active" : ""}
            onClick={closeMenu}
          >
            Projetos
          </Link>
          <Link
            to="/"
            state={{ scrollToContact: true }}
            className={isContato ? "active" : ""}
            onClick={closeMenu}
          >
            Contato
          </Link>
        </MobileMenuLinks>
      </MobileMenu>
    </Top>
  );
};

export default Header;