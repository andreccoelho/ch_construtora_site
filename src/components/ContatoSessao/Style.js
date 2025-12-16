import styled from "styled-components";

export const DivisorContato = styled.section`
  background: #000000;
  width: 100%;
  min-height: 12.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const TextoDivisor = styled.p`
  margin: 0;
  color: #bdad77;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    max-width: 22rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SecaoContatoWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #141414;
  background-image: url("/imagens/fundo 2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 1rem 4rem 1rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem 3rem 1rem;
  }
`;

export const SecaoContato = styled.div`
  width: 90rem;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 4rem;
  row-gap: 3rem;
  position: relative;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
`;

export const ColunaEsquerda = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const TituloContato = styled.h2`
  margin: 0 0 2.5rem 0;
  color: #bdad77;
  font-family: "Alata", sans-serif;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const LinhaEnderecoDestaque = styled.p`
  margin: 0 0 0.5rem 0;
  color: #decb8d;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const LinhaEndereco = styled.p`
  margin: 0;
  color: #d2d2d2;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const BlocoEndereco = styled.div`
  margin-bottom: 4.69rem;
`;

export const TituloHorario = styled.p`
  margin: 0 0 0.5rem 0;
  color: #decb8d;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const TextoHorario = styled.p`
  margin: 0;
  color: #d2d2d2;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const BlocoHorario = styled.div`
  margin-top: 0;
  margin-bottom: 7.5rem;
`;

export const BotaoOrcamento = styled.button`
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

export const ColunaDireita = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CampoInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #141414;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  border: none;
  outline: none;
  border-radius: 0.625rem;
  box-shadow: 0 4px 18.7px 1px rgba(0, 0, 0, 0.17);
  text-transform: uppercase;
  margin-bottom: 1.63rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CampoTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #141414;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  border: none;
  outline: none;
  border-radius: 0.625rem;
  box-shadow: 0 4px 18.7px 1px rgba(0, 0, 0, 0.17);
  text-transform: uppercase;
  resize: none;
  min-height: 8rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    min-height: 6rem;
    margin-bottom: 3rem;
  }
`;

export const BotaoEnviar = styled.button`
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
