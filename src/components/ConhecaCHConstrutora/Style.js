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
    max-width: 100%;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        max-width: 28rem;
    }
`;

export const Imagem = styled.img`
    display: block;
    max-width: 33.125rem;
    height: auto;
    object-fit: cover;
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

    @media (max-width: 768px) {
        width: auto;
        text-align: center;
        font-size: 2rem;
    }
`;

export const Descricao = styled.p`
    margin-top: 3.56rem; /* distância título → descrição */
    margin-bottom: 0;
    max-width: 32rem;
    color: #fff;
    font-weight: 300;
    text-align: left;
    font-size: 1.25rem;
    font-style: normal;
    line-height: normal;

    @media (max-width: 768px) {
        margin-top: 1.5rem;
        font-size: 0.95rem;
        text-align: center;
    }
`;

export const MiniSecao = styled.div`
    margin-top: 2.5rem; /* descrição → minisseção */
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3.44rem; /* distância horizontal entre retângulos */
    row-gap: 3.56rem; /* distância vertical entre retângulos */

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 1.75rem;
    }
`;

export const Retangulo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    border-radius: 0.3125rem;
    border: 2px solid #bdad77;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 1rem 1.25rem;
    }
`;

export const IconeWrapper = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 2.25rem;
        height: 2.25rem;
    }
`;

export const TextoRetangulo = styled.span`
    color: #fff;

    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
`;

export const BotaoConhecaMais = styled.button`
    border: none;
    display: flex;
    width: 100%;
    justify-content: center;
    background: none;
    
    button {
        margin-top: 3.25rem; /* minisseção → botão */
        color: #fff;
        text-align: center;
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: uppercase;
        border-radius: 0.625rem;
        background: linear-gradient(180deg, #bdad77 0%, #575037 100%);
        width: 20.8125rem;
        height: 2.875rem;
        border: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s ease;
        }

        &:hover {
            transform: translateY(-2px);
            filter: brightness(1.1);
        }

        &:hover::before {
            left: 100%;
        }

        &:active {
            transform: translateY(0);
            filter: brightness(0.95);
        }
    }
`;
