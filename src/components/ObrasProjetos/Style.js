import styled, { keyframes } from "styled-components";
import { Botao } from "../ui/Botao";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SecaoObrasProjetos = styled.section`
  background: #141414;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem 2.81rem 1rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem 2.5rem 1rem;
  }
`;

export const ConteudoColunas = styled.div`
  width: 90rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 0.8s ease-out forwards;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(189, 173, 119, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(189, 173, 119, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(189, 173, 119, 0.15);
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1.5rem;

    &:nth-child(1) {
      align-self: flex-start;
      align-items: flex-start;
      text-align: left;
    }

    &:nth-child(2) {
      align-self: flex-end;
      align-items: flex-end;
      text-align: right;
    }
  }
`;

export const LinhaIconeTexto = styled.div`
  display: flex;
  align-items: center;
  gap: 0.31rem;
`;

export const IconeWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: rgba(189, 173, 119, 0.05);
  border-radius: 0.75rem;
  border: 1px solid rgba(189, 173, 119, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  ${Coluna}:hover & {
    background: rgba(189, 173, 119, 0.1);
    border-color: rgba(189, 173, 119, 0.3);
    box-shadow: 0 4px 16px rgba(189, 173, 119, 0.2);
    transform: translateY(-2px);
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 2.75rem;
    height: 2.75rem;
  }
`;

export const TituloColuna = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #bdad77, transparent);
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;

    ${Coluna}:nth-child(1) & {
      text-align: left;

      &::after {
        left: 0;
        transform: translateX(0);
      }
    }

    ${Coluna}:nth-child(2) & {
      text-align: right;

      &::after {
        left: auto;
        right: 0;
        transform: translateX(0);
      }
    }
  }
`;

export const DescricaoColuna = styled.p`
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 25rem;
  font-weight: 300;
  font-size: 1.125rem;
  font-style: normal;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    max-width: 100%;

    ${Coluna}:nth-child(1) & {
      text-align: left;
    }

    ${Coluna}:nth-child(2) & {
      text-align: right;
    }
  }
`;

export const BotaoSaibaMais = styled(Botao).attrs({ $bloco: true })`
  margin-top: 3.19rem;
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 0.8s ease-out 0.5s forwards;
`;
