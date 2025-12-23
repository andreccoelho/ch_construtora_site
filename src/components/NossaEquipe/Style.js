import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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

export const SecaoNossaEquipe = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #141414;
  padding: 4rem 1rem 4rem 1rem;
`;

export const Conteudo = styled.div`
  width: 90rem;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const LinhaConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const ColunaTexto = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Titulo = styled.h2`
  margin: 0;
  color: #bdad77;
  leading-trim: both;
  text-edge: cap;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 102.327%;
  text-transform: uppercase;
  text-align: left;
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  animation: ${({ $isVisible }) => $isVisible ? fadeInLeft : 'none'} 1s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    text-align: center;
  }
`;

export const Descricao = styled.p`
  margin-top: 2rem;
  margin-bottom: 0;
  color: #d2d2d2;
  max-width: 34.75rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 137.993%;
  text-align: left;
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  animation: ${({ $isVisible }) => $isVisible ? fadeInLeft : 'none'} 1s ease-out 0.2s forwards;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const ColunaImagens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const LinhaImagensSuperiores = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1rem;
`;

export const ImagemPequena = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #1f1f1f;
`;

export const ImagemPrincipalWrapper = styled.div`
  width: 100%;
  max-width: 28.5625rem;
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  animation: ${({ $isVisible }) => $isVisible ? fadeInRight : 'none'} 1s ease-out 0.4s forwards;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const ImagemPrincipal = styled.div`
  width: 100%;
  max-width: 28.5625rem;
  height: auto;
  min-height: 18rem;
  aspect-ratio: 457 / 486;
  background: url("/imagens/equipe.jpeg") lightgray -438px -334px / 256.018% 176.955% no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0.625rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
