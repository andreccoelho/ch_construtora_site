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

const fadeInScale = keyframes`
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const SecaoCondominios = styled.section`
    background: #141414;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.5rem 1rem 6.5rem 1rem;

    @media (max-width: 768px) {
        padding: 4rem 1rem 4rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 3rem 1rem 3rem 1rem;
    }
`;

export const TituloSecao = styled.h2`
    margin: 0 0 6.5rem 0;
    color: #fff;
    text-align: center;
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 1s ease-out forwards;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin: 0 0 3rem 0;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin: 0 0 2rem 0;
    }
`;

export const ListaCards = styled.div`
    width: 90rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8rem;
    align-items: center;

    @media (max-width: 768px) {
        gap: 4rem;
    }

    @media (max-width: 480px) {
        gap: 3rem;
    }
`;

export const CardCondominio = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    align-items: center;
    max-width: 85%;
    padding: 2rem;
    border-radius: 1.5rem;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(189, 173, 119, 0.1);
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInScale : 'none'} 0.8s ease-out ${({ $delay }) => 0.3 + $delay * 0.2}s forwards;
    transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(189, 173, 119, 0.15), 0 3px 10px rgba(0, 0, 0, 0.2);
        border-color: rgba(189, 173, 119, 0.25);
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
        max-width: 95%;
        padding: 1.5rem;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(189, 173, 119, 0.12), 0 2px 8px rgba(0, 0, 0, 0.15);
        }
    }

    @media (max-width: 480px) {
        row-gap: 1.5rem;
        padding: 1rem;
    }
`;

export const ColunaEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
`;

export const ImagemCondominio = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 539 / 292;
    border-radius: 1.25rem 1.25rem 0 0;
    background: ${({imagem}) => `url(${imagem}) lightgray 50% / cover no-repeat`};
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
    }

    @media (max-width: 600px) {
        min-height: 12rem;
    }
`;

export const NomeCondominioWrapper = styled.div`
    width: 100%;
    border-radius: 0 0 1.25rem 1.25rem;
    background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.95) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    border-top: 2px solid rgba(189, 173, 119, 0.2);
    transition: all 0.3s ease;

    ${CardCondominio}:hover & {
        background: linear-gradient(135deg, rgba(189, 173, 119, 0.15) 0%, rgba(20,20,20,0.95) 100%);
        border-top-color: rgba(189, 173, 119, 0.5);
    }

    @media (max-width: 600px) {
        padding: 0.75rem 0.5rem;
    }
`;

export const NomeCondominio = styled.h3`
    margin: 0;
    color: #bdad77;
    text-align: center;
    font-size: 2.25rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;

    ${CardCondominio}:hover & {
        color: #FFE99D;
    }

    @media (max-width: 768px) {
        font-size: 1.75rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const ColunaDireita = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const DescricaoCondominio = styled.p`
    margin: 0 0 2.5rem 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.8;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6;
    }

    @media (max-width: 480px) {
        font-size: 0.95rem;
        margin: 0 0 1.5rem 0;
        text-align: left;
    }
`;

export const BotaoVejaCasas = styled.button`
    width: 100%;
    max-width: 20rem;
    color: #fff;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: 0.5rem;
    background: linear-gradient(135deg, #bdad77 0%, #8a7d54 100%);
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

    @media (max-width: 900px) {
        font-size: 0.875rem;
        padding: 0.875rem 1.5rem;
    }

    @media (max-width: 600px) {
        width: 100%;
        max-width: 100%;
    }
`;
