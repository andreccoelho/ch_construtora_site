import styled from "styled-components";

const Top = styled.header`
  padding: ${props => props.$scrolled ? '1em 7.5em' : '1.5em 7.5em'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  background: ${props => props.$scrolled ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px) saturate(180%)' : 'none'};
  -webkit-backdrop-filter: ${props => props.$scrolled ? 'blur(20px) saturate(180%)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;

  .logo {
    height: ${props => props.$scrolled ? '3.8em' : '4.5em'};
    padding: 0.5em 0.3em;
    transition: height 0.3s ease;
  }

  .desktop-nav {
    display: flex;
    gap: 2.88rem;
  }

  a {
    color: #fff;
    font-size: 1.2rem;
    font-style: normal;
    line-height: normal;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      width: 0;
      height: 2px;
      background: #bdad77;
      transition: width 0.3s ease, left 0.3s ease;
    }

    &.active {
      color: #bdad77;

      &::after {
        width: 100%;
        left: 0;
      }
    }

    &:hover {
      color: #bdad77;

      &::after {
        width: 100%;
        left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    padding: ${props => props.$scrolled ? '0.8rem 1.5rem' : '1rem 1.5rem'};

    .logo {
      height: ${props => props.$scrolled ? '3rem' : '3.5rem'};
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
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  span {
    width: 100%;
    height: 0.18rem;
    border-radius: 999px;
    background: #ffffff;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  &:hover span {
    background: #bdad77;
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
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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
    opacity: 0;
    transform: translateX(20px);
    animation: slideIn 0.3s ease forwards;

    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.25s; }

    @keyframes slideIn {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;

export { Top, MenuButton, MobileMenu, MobileMenuLinks, MobileBackdrop };