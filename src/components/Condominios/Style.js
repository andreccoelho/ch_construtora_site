import styled from "styled-components";

export const SecaoCondominios = styled.section`
  background: #141414;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.5rem 1rem 6.5rem 1rem;
`;

export const TituloSecao = styled.h2`
  margin: 0 0 6.5rem 0;
  color: #fff;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const ListaCards = styled.div`
  width: 90rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

export const CardCondominio = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2.37rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 2.37rem;
  }
`;

export const ColunaEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

export const ImagemCondominio = styled.div`
  width: 33.6875rem;
  height: 18.25rem;
  aspect-ratio: 539 / 292;
  border-radius: 1.25rem 1.25rem 0 0;
  background: ${({ imagem }) => `url(${imagem}) lightgray 50% / cover no-repeat`};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const NomeCondominioWrapper = styled.div`
  width: 33.6875rem;
  border-radius: 0 0 1.25rem 1.25rem;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const NomeCondominio = styled.h3`
  margin: 0;
  color: #bdad77;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 2.25rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const ColunaDireita = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DescricaoCondominio = styled.p`
  margin: 0 0 2rem 0;
  color: #fff;
  font-family: "Alata", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const BotaoVejaCasas = styled.button`
  width: 31.875rem;
  height: 4.5625rem;
  border-radius: 0.9375rem;
  background: linear-gradient(180deg, #bdad77 0%, #575037 100%);
  color: #fff;
  font-family: "Alata", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
