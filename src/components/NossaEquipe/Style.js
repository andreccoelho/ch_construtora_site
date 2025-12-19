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
  display: flex;
  flex-direction: row;
  row-gap: 2.5rem;
  margin: 0 auto;
`;

export const LinhaConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
    row-gap: 2.5rem;
    align-items: center;
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
   
  font-size: 4rem;
  font-style: normal;
   font-weight: 400;
  line-height: 102.327%;
  text-transform: uppercase;
    text-align: left;

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
  //text-transform: uppercase;
    text-align: left;

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
    align-items: flex-end;  

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
`;
