import styled from "styled-components";

export const SecaoPorQueEscolher = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #141414;
  background-image: url("/imagens/chfundo2.png"), url("/imagens/chfundo1.png");
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: 43.75rem 25.1875rem, cover;
  background-blend-mode: multiply, normal;
  min-height: 36.875rem;
  padding: 4rem 1rem 8.88rem 1rem;
  font-family: "Alata", sans-serif;
  text-transform: uppercase;
  box-sizing: border-box;
`;

export const Conteudo = styled.div`
  width: 90rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
`;

export const TituloPrincipal = styled.h2`
  margin: 0 0 4rem 0;
  color: #bdad77;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.63rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  width: 22.9375rem;
  max-width: 100%;
  height: 11.5rem;
  border: 2px solid #bdad77;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 20rem;
    max-width: 90vw;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const Numero = styled.span`
  color: #bdad77;
  margin-right: 0.5rem;
`;

export const TextoHeader = styled.span`
  color: #ffffff;
`;

export const CardDescricao = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;
