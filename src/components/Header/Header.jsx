import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { STATUS, condominiosComCasas } from "../../data/casas";
import { Top, MenuButton, MobileMenu, MobileMenuLinks, MobileBackdrop, DropdownWrapper, DropdownMenu, DropdownItem, MobileDropdownWrapper, MobileDropdownToggle, MobileDropdownMenu } from "./Style";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const isHome = pathname === "/";
  const isSobre = pathname === "/sobre";
  const isObras = pathname.startsWith("/obras") || pathname.startsWith("/condominios");
  const isAVenda = pathname.startsWith("/a-venda");
  const isContato = isHome && location.state && location.state.scrollToContact;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const condominiosAVenda = condominiosComCasas(STATUS.A_VENDA);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownVendaOpen, setDropdownVendaOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileVendaOpen, setMobileVendaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
    setMobileVendaOpen(false);
  };

  return (
    <>
      <Top $scrolled={scrolled}>
        <img src="/imagens/logo.svg" alt="CH Construtora logo" className="logo" />

        <nav className="desktop-nav">
          <Link to="/" className={isHome && !isContato ? "active" : ""}>
            Início
          </Link>
          <Link to="/sobre" className={isSobre ? "active" : ""}>
            Sobre
          </Link>
          <DropdownWrapper
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/obras" className={isObras ? "active" : ""}>
              Projetos
            </Link>
            <DropdownMenu $isOpen={dropdownOpen}>
              <DropdownItem to="/condominios/sagrada-familia">
                Sagrada Família
              </DropdownItem>
              <DropdownItem to="/condominios/villa-blanca-i">
                Villa Blanca I
              </DropdownItem>
              <DropdownItem to="/condominios/villa-blanca-ii">
                Villa Blanca II
              </DropdownItem>
              <DropdownItem to="/obras" className="divider">
                Ver todos
              </DropdownItem>
            </DropdownMenu>
          </DropdownWrapper>
          <DropdownWrapper
            onMouseEnter={() => setDropdownVendaOpen(true)}
            onMouseLeave={() => setDropdownVendaOpen(false)}
          >
            <Link to="/a-venda" className={isAVenda ? "active" : ""}>
              À venda
            </Link>
            <DropdownMenu $isOpen={dropdownVendaOpen}>
              {condominiosAVenda.map((c) => (
                <DropdownItem key={c.slug} to={`/a-venda/${c.slug}`}>
                  {c.titulo}
                </DropdownItem>
              ))}
              <DropdownItem to="/a-venda" className="divider">
                Ver todas
              </DropdownItem>
            </DropdownMenu>
          </DropdownWrapper>
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
      </Top>

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
          <MobileDropdownWrapper>
            <MobileDropdownToggle
              className={isObras ? "active" : ""}
              $isOpen={mobileDropdownOpen}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Projetos
              <span>▼</span>
            </MobileDropdownToggle>
            <MobileDropdownMenu $isOpen={mobileDropdownOpen}>
              <Link to="/condominios/sagrada-familia" onClick={closeMenu}>
                Sagrada Família
              </Link>
              <Link to="/condominios/villa-blanca-i" onClick={closeMenu}>
                Villa Blanca I
              </Link>
              <Link to="/condominios/villa-blanca-ii" onClick={closeMenu}>
                Villa Blanca II
              </Link>
              <Link to="/obras" onClick={closeMenu}>
                Ver todos
              </Link>
            </MobileDropdownMenu>
          </MobileDropdownWrapper>
          <MobileDropdownWrapper>
            <MobileDropdownToggle
              className={isAVenda ? "active" : ""}
              $isOpen={mobileVendaOpen}
              onClick={() => setMobileVendaOpen(!mobileVendaOpen)}
            >
              À venda
              <span>▼</span>
            </MobileDropdownToggle>
            <MobileDropdownMenu $isOpen={mobileVendaOpen}>
              {condominiosAVenda.map((c) => (
                <Link key={c.slug} to={`/a-venda/${c.slug}`} onClick={closeMenu}>
                  {c.titulo}
                </Link>
              ))}
              <Link to="/a-venda" onClick={closeMenu}>
                Ver todas
              </Link>
            </MobileDropdownMenu>
          </MobileDropdownWrapper>
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
    </>
  );
};

export default Header;