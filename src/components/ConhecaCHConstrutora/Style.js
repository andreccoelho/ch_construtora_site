import styled from "styled-components";

export const SecaoConheca = styled.section`
  background: url("/imagens/fundo 1.png") #1a1a1a -37.04px -182px / 105.144% 152.865% no-repeat;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem 4.75rem 1rem; /* bottom padding = distância botão → fim da seção */
`;

export const Conteudo = styled.div`
  width: 90rem;
  max-width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  column-gap: 4rem; /* distância entre colunas (imagem ↔ texto) */
  align-items: flex-start;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const ColunaImagem = styled.div`
  display: flex;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ImagemWrapper = styled.div`
  width: 100%;
  max-width: 32rem;
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const Imagem = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ColunaTexto = styled.div`
  color: #fff;
  font-family: "Alata", sans-serif;
`;

export const Titulo = styled.h2`
  margin: 0;
  color: #fff;
  font-family: "Alata", sans-serif;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const Descricao = styled.p`
  margin-top: 3.56rem; /* distância título → descrição */
  margin-bottom: 0;
  max-width: 32rem;
  color: #fff;
  font-family: "Alata", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const MiniSecao = styled.div`
  margin-top: 2.5rem; /* descrição → minisseção */
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 3.44rem; /* distância horizontal entre retângulos */
  row-gap: 3.56rem; /* distância vertical entre retângulos */
`;

export const Retangulo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: 0.3125rem;
  border: 2px solid #bdad77;
`;

export const IconeWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextoRetangulo = styled.span`
  color: #fff;
  font-family: "Alata", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const BotaoConhecaMais = styled.button`
  margin-top: 3.25rem; /* minisseção → botão */
  color: #fff;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 0.625rem;
  background: linear-gradient(180deg, #bdad77 0%, #575037 100%);
  width: 20.8125rem;
  height: 2.875rem;
  border: none;
  cursor: pointer;
`;
