import styled from "styled-components";

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
  grid-template-columns: minmax(0, 0.4fr) minmax(0, 0.6fr);
  column-gap: 4rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
`;

export const ColunaTexto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h2`
  margin: 0;
  color: #bdad77;
  leading-trim: both;
  text-edge: cap;
  font-family: "Alata", sans-serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 102.327%;
  text-transform: uppercase;
`;

export const Descricao = styled.p`
  margin-top: 2rem;
  margin-bottom: 0;
  color: #d2d2d2;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 137.993%;
  text-transform: uppercase;
`;

export const ColunaImagens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
`;

export const ImagemPrincipal = styled.div`
  width: 28.5625rem;
  height: 30.375rem;
  aspect-ratio: 457 / 486;
  background: url("/imagens/equipe.jpeg") lightgray -438px -334px / 256.018% 176.955% no-repeat;
`;
