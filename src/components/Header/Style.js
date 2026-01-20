import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background: rgba(189, 173, 119, 0.1);
  border: 1px solid rgba(189, 173, 119, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    background: rgba(189, 173, 119, 0.15);
    border-color: rgba(189, 173, 119, 0.4);
    box-shadow: 0 4px 12px rgba(189, 173, 119, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  span {
    width: 100%;
    height: 0.125rem;
    border-radius: 999px;
    background: linear-gradient(90deg, #ffffff 0%, #bdad77 100%);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    &:nth-child(1) {
      width: 100%;
    }

    &:nth-child(2) {
      width: 85%;
    }

    &:nth-child(3) {
      width: 70%;
    }
  }

  &:hover span {
    background: linear-gradient(90deg, #bdad77 0%, #FFE99D 100%);
    box-shadow: 0 2px 4px rgba(189, 173, 119, 0.4);

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      width: 100%;
    }
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
    color: #fff;
    font-size: 1.125rem;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;
    opacity: 0;
    transform: translateX(20px);
    animation: slideIn 0.3s ease forwards;

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

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(189, 173, 119, 0.2);
  border-radius: 0.75rem;
  padding: 0.75rem 0;
  min-width: 12rem;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateX(-50%) translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  z-index: 100;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1.25rem;
  color: #fff !important;
  font-size: 1rem !important;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;

  &::after {
    display: none !important;
  }

  &:hover {
    background: rgba(189, 173, 119, 0.15);
    color: #bdad77 !important;
    padding-left: 1.5rem;
  }

  &.divider {
    border-top: 1px solid rgba(189, 173, 119, 0.2);
    margin-top: 0.5rem;
    padding-top: 1rem;
  }
`;

const MobileDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MobileDropdownToggle = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: auto;
  position: relative;
  transition: color 0.3s ease;
  opacity: 0;
  transform: translateX(20px);
  animation: slideIn 0.3s ease forwards;
  animation-delay: 0.2s;

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

  span {
    font-size: 0.7rem;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    margin-left: 0.5rem;
    display: inline-block;
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const MobileDropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: ${props => props.$isOpen ? '0.75rem' : '0'};
  padding: ${props => props.$isOpen ? '1rem' : '0 1rem'};
  padding-left: 1.5rem;
  background: ${props => props.$isOpen ? 'rgba(20, 20, 20, 0.5)' : 'transparent'};
  border-left: 2px solid ${props => props.$isOpen ? 'rgba(189, 173, 119, 0.3)' : 'transparent'};
  border-radius: 0 0.5rem 0.5rem 0;
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  a {
    font-size: 1rem !important;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    opacity: ${props => props.$isOpen ? 1 : 0};
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-10px)'};
    transition: all 0.3s ease;
    color: rgba(255, 255, 255, 0.85) !important;
    background: transparent;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #bdad77;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      color: #bdad77 !important;
      background: rgba(189, 173, 119, 0.1);
      padding-left: 1.25rem;

      &::before {
        opacity: 1;
      }
    }

    &::after {
      display: none !important;
    }

    &:nth-child(1) {
      transition-delay: ${props => props.$isOpen ? '0.1s' : '0s'};
    }

    &:nth-child(2) {
      transition-delay: ${props => props.$isOpen ? '0.15s' : '0s'};
    }

    &:nth-child(3) {
      transition-delay: ${props => props.$isOpen ? '0.2s' : '0s'};
    }

    &:nth-child(4) {
      transition-delay: ${props => props.$isOpen ? '0.25s' : '0s'};
      margin-top: 0.25rem;
      border-top: 1px solid rgba(189, 173, 119, 0.2);
      padding-top: 0.75rem;
    }
  }
`;

export { Top, MenuButton, MobileMenu, MobileMenuLinks, MobileBackdrop, DropdownWrapper, DropdownMenu, DropdownItem, MobileDropdownWrapper, MobileDropdownToggle, MobileDropdownMenu };