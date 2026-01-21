import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem 3rem 2rem;
  box-sizing: border-box;
  position: relative;
  border-top: 1px solid rgba(189, 173, 119, 0.15);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #bdad77, transparent);
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 2.5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem 2rem 1rem;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 220px;
    height: auto;
    filter: drop-shadow(0 2px 8px rgba(189, 173, 119, 0.2));
    transition: filter 0.3s ease;
  }

  img:hover {
    filter: drop-shadow(0 4px 12px rgba(189, 173, 119, 0.4));
  }

  @media (max-width: 480px) {
    img {
      max-width: 180px;
width: 100%;
    }
  }
`;

export const Separador = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(189, 173, 119, 0.3) 50%, transparent 100%);
  margin: 1rem 0;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const SocialIconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(189, 173, 119, 0.05);
  border: 1px solid rgba(189, 173, 119, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  svg {
    width: 2rem;
    height: 2rem;
    position: relative;
    z-index: 1;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(189, 173, 119, 0.2), rgba(138, 125, 84, 0.2));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    border-color: rgba(189, 173, 119, 0.5);
    box-shadow: 0 8px 20px rgba(189, 173, 119, 0.25);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(-3px) scale(1.05);
  }

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;

    svg {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;

export const LegalText = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.5;
  }
`;
