import styled from "styled-components";

export const SecaoNossoCompromisso = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #141414;
  background-image: url("/imagens/fundo 2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 1rem;
`;

export const Conteudo = styled.div`
  width: 90rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Titulo = styled.h2`
  margin: 0 0 1.5rem 0;
  color: #bdad77;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 102.327%;
  text-transform: uppercase;
`;

export const TextoCorpo = styled.p`
  margin: 0 0 1.5rem 0;
  color: #d2d2d2;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: initial;
  max-width: 75rem;
`;
