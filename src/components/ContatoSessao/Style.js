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
   
  font-size: 1.5rem;
  font-style: normal;
   font-weight: 300;
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
    padding: 2.5rem 1.5rem;
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
    row-gap: 2rem;
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

  font-size: 3rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const LinhaEnderecoDestaque = styled.p`
  margin: 0 0 0.5rem 0;
  color: #decb8d;

  font-size: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const LinhaEndereco = styled.p`
  margin: 0;
  color: #d2d2d2;
   
  font-size: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const BlocoEndereco = styled.div`
  margin-bottom: 4.69rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

export const TituloHorario = styled.p`
  margin: 0 0 0.5rem 0;
  color: #decb8d;

  font-size: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const TextoHorario = styled.p`
  margin: 0;
  color: #d2d2d2;
   
  font-size: 1.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const BlocoHorario = styled.div`
  margin-top: 0;
  margin-bottom: 7.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

export const BotaoOrcamento = styled.a`
  display: inline-block;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, #bdad77 0%, #8a7d54 100%);
  width: 20.8125rem;
  max-width: 90%;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(189, 173, 119, 0.2);
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
    transition: left 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    padding: 2px;
    background: linear-gradient(135deg, #bdad77, #575037);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(189, 173, 119, 0.35);
    color: #fff;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    width: 100%;
    max-width: 18rem;
    padding: 0.875rem 1.5rem;
  }
`;

export const ColunaDireita = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

export const CampoInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #141414;
  color: rgba(255, 255, 255, 0.8);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 300;
  border: none;
  outline: none;
  border-radius: 0.625rem;
  box-shadow: 0 4px 18.7px 1px rgba(0, 0, 0, 0.17);
  margin-bottom: 1.25rem;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.875rem 1.25rem;
    margin-bottom: 1rem;
    max-width: 100%;
  }
`;

export const CampoTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #141414;
  color: rgba(255, 255, 255, 0.8);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 300;
  border: none;
  outline: none;
  border-radius: 0.625rem;
  box-shadow: 0 4px 18.7px 1px rgba(0, 0, 0, 0.17);
  resize: none;
  min-height: 8rem;
  margin-bottom: 2rem;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.875rem 1.25rem;
    min-height: 6rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
`;

export const BotaoEnviar = styled.button`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, #bdad77 0%, #8a7d54 100%);
  width: 20.8125rem;
  max-width: 100%;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(189, 173, 119, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
    transition: left 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    padding: 2px;
    background: linear-gradient(135deg, #bdad77, #575037);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(189, 173, 119, 0.35);
  }

  &:hover::before {
    left: 100%;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
`;
