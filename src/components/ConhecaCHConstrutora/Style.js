import styled, { keyframes } from "styled-components";

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

export const SecaoConheca = styled.section`
    background: url("/imagens/fundo 1.png") #1a1a1a -37.04px -182px / 105.144% 152.865% no-repeat;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3rem 1rem 4.75rem 1rem;
`;

export const Conteudo = styled.div`
    width: 90rem;
    max-width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    column-gap: 5rem;
    align-items: stretch;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
    }
`;

export const ColunaImagem = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 0 1.25rem 1.25rem;
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInLeft : 'none'} 1s ease-out forwards;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 0 0 1rem 1rem;
    }
`;

export const ImagemWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 34rem;
    min-height: 30rem;
    isolation: isolate;

    /* moldura dourada deslocada atrás da foto */
    &::before {
        content: "";
        position: absolute;
        inset: 0;
        transform: translate(-1.25rem, 1.25rem);
        border: 1px solid rgba(189, 173, 119, 0.55);
        border-radius: 0.75rem;
        z-index: -1;
        pointer-events: none;
    }

    /* degradê sutil para integrar a foto ao fundo escuro */
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 0.75rem;
        background:
            linear-gradient(180deg, rgba(26, 26, 26, 0) 55%, rgba(26, 26, 26, 0.55) 100%),
            linear-gradient(90deg, rgba(26, 26, 26, 0.15) 0%, rgba(26, 26, 26, 0) 40%);
        box-shadow: inset 0 0 0 1px rgba(189, 173, 119, 0.18);
        pointer-events: none;
    }

    @media screen and (max-width: 768px) {
        max-width: 28rem;
        min-height: 0;
        aspect-ratio: 4 / 5;

        &::before {
            transform: translate(-1rem, 1rem);
        }
    }
`;

export const Imagem = styled.img`
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 65% 35%;
    border-radius: 0.75rem;
    box-shadow:
        0 24px 48px rgba(0, 0, 0, 0.55),
        0 8px 16px rgba(0, 0, 0, 0.35);
    filter: saturate(0.92) contrast(1.04);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

    ${ImagemWrapper}:hover & {
        transform: scale(1.015);
    }
`;

export const ColunaTexto = styled.div`
    color: #fff;

    max-width: 32rem;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Titulo = styled.h2`
    margin: 0;
    color: #BDAD77;
    width: 37.1875rem;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInRight : 'none'} 1s ease-out 0.2s forwards;

    @media (max-width: 768px) {
        width: auto;
        text-align: center;
        font-size: 2rem;
    }
`;

export const Descricao = styled.p`
    margin-top: 3.56rem;
    margin-bottom: 0;
    max-width: 32rem;
    color: #fff;
    font-weight: 300;
    text-align: left;
    font-size: 1.25rem;
    font-style: normal;
    line-height: normal;
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInRight : 'none'} 1s ease-out 0.4s forwards;

    @media (max-width: 768px) {
        margin-top: 1.5rem;
        font-size: 0.95rem;
        text-align: center;
    }
`;

export const MiniSecao = styled.div`
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 1.5rem;
    }
`;

export const Retangulo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    border-radius: 0.75rem;
    background: rgba(189, 173, 119, 0.05);
    border: 1px solid rgba(189, 173, 119, 0.2);
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 0.8s ease-out ${({ $delay }) => 0.6 + $delay * 0.15}s forwards;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: translateY(-3px);
        background: rgba(189, 173, 119, 0.08);
        border-color: rgba(189, 173, 119, 0.35);
        box-shadow: 0 6px 16px rgba(189, 173, 119, 0.15);
    }

    @media (max-width: 768px) {
        justify-content: center;
        padding: 1rem 1.25rem;
    }
`;

export const IconeWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    ${Retangulo}:hover & {
        transform: scale(1.08);
    }

    svg {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 2.75rem;
        height: 2.75rem;
    }
`;

export const TextoRetangulo = styled.span`
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

export const BotaoConhecaMais = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 3.25rem;
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 0.8s ease-out 1.2s forwards;

    @media (max-width: 768px) {
        margin-top: 2rem;
    }
`;
