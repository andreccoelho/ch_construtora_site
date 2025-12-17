import styled from "styled-components";

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
    gap: 2.5rem;
  }
`;

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: "Alata", sans-serif;
  //text-transform: uppercase;
`;

export const LinhaIconeTexto = styled.div`
  display: flex;
  align-items: center;
  gap: 0.31rem;
`;

export const IconeWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  aspect-ratio: 1 / 1;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TituloColuna = styled.h2`
  color: #fff;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const DescricaoColuna = styled.p`
  margin-top: 1.19rem;
  color: #fff;
  font-family: "Alata", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  //text-transform: uppercase;
  text-align: center;
  max-width: 25rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const BotaoSaibaMais = styled.button`
  margin-top: 3.19rem;
  color: #fff;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 0.625rem;
  background: linear-gradient(180deg, #BDAD77 0%, #575037 100%);
  width: 20.8125rem;
  height: 2.875rem;
  border: none;
  cursor: pointer;
`;
