import styled from "styled-components";

const Top = styled.header`
  padding: 1.5em 7.5em;
  position: absolute;
  top: 0.69rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 20;

  img {
    height: 3.5em;
    padding: 0.5em 0.3em;
  }

  .desktop-nav {
    display: flex;
    gap: 2.88rem;
  }

  a {
    color: #fff;
    font-family: Alata;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    text-decoration: none;

    &.active {
      color: #bdad77;
      text-decoration-line: underline;
    }

    &:hover {
      color: #bdad77;
      text-decoration-line: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;

    img {
      height: 3rem;
      padding: 0;
    }

    .desktop-nav {
      display: none;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;

  span {
    width: 100%;
    height: 0.18rem;
    border-radius: 999px;
    background: #ffffff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 19;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(65vw, 18.75rem);
  background: rgba(0, 0, 0, 0.94);
  backdrop-filter: blur(4px);
  padding: 5rem 2rem 2rem 2rem;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.5);
  transform: translateX(${(props) => (props.open ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 20;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  a {
    font-size: 1.125rem;
  }
`;

export { Top, MenuButton, MobileMenu, MobileMenuLinks, MobileBackdrop };