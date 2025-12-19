import styled from "styled-components";

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
    gap: 10rem;
    align-items: center;

    @media (max-width: 768px) {
        gap: 5rem;
    }

    @media (max-width: 480px) {
        gap: 3rem;
    }
`;

export const CardCondominio = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.37rem;
    align-items: flex-start;
    max-width: 80%;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }

    @media (max-width: 480px) {
        row-gap: 1.5rem;
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

    @media (max-width: 600px) {
        min-height: 12rem;
    }
`;

export const NomeCondominioWrapper = styled.div`
    width: 100%;
    border-radius: 0 0 1.25rem 1.25rem;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 600px) {
        padding: 0.75rem 0.5rem;
    }
`;

export const NomeCondominio = styled.h3`
    margin: 0;
    color: #bdad77;
    text-align: center;
    font-size: 2.25rem;
    font-weight: 300;
    text-transform: uppercase;

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
    margin: 0 0 2rem 0;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 300;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.95rem;
        margin: 0 0 1.5rem 0;
    }
`;

export const BotaoVejaCasas = styled.button`
    width: 100%;
    height: 4.5625rem;
    border-radius: 0.9375rem;
    background: linear-gradient(180deg, #bdad77 0%, #575037 100%);
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    @media (max-width: 600px) {
        width: 100%;
    }
`;
