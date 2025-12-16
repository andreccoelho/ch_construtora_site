import styled from "styled-components";

export const SecaoNossosProjetos = styled.section`
    background: #141414;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 1rem 4rem 1rem;
`;

export const ConteudoProjetos = styled.div`
    width: 90rem;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 4rem;
    row-gap: 4rem;
    position: relative;
    margin-top: 6rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        row-gap: 3rem;
        width: auto;
        max-width: max-content;
        margin-top: 0;
    }
`;

export const Coluna = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const TituloSecao = styled.h2`
    margin: 0 0 3rem 0;
    color: #bdad77;
    text-align: center;
    font-family: "Alata", sans-serif;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;

    @media (max-width: 900px) {
        text-align: center;
        font-size: 2.2rem;
    }
`;

export const CardProjeto = styled.div`
    position: relative;
    display: inline-block;

    @media (max-width: 900px) {
        display: block;
        overflow: hidden;
    }
`;

export const ImagemProjeto = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.625rem;
`;

export const InfoCard = styled.div`
    position: absolute;
    background: #000;
    border-radius: 0.625rem;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    @media (max-width: 900px) {
        position: static;
        margin-top: 1.5rem;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
    }
`;

export const LinhaTituloIcone = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 900px) {
        justify-content: center;
    }
`;

export const TituloProjeto = styled.h3`
    margin: 0;
    color: #bdad77;
    text-align: center;
    font-family: "Alata", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`;

export const DescricaoProjeto = styled.p`
    margin: 0;
    color: #fff;
    text-align: right;
    font-family: "Alata", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    
    @media (max-width: 900px) {
        text-align: center;
    }
`;

export const IconeSetaWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const BotaoVerProjetos = styled.button`
    margin-top: 4rem;
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

// Variantes de posicionamento para cada projeto
export const InfoAlan = styled(InfoCard)`
    width: 33rem;
    height: 17.5rem;
    bottom: -3rem; /* 5rem para dentro da imagem (altura 33rem) deixa 3rem para fora */
    right: -3rem; /* 3rem para fora à direita */

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
        bottom: auto;
        right: auto;
    }
`;

export const WrapperImagemAlan = styled.div`
    width: 31rem;
    height: 33rem;

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
    }
`;

export const InfoCarla = styled(InfoCard)`
    width: 33rem;
    height: 17.5rem;
    bottom: -4.6rem; /* 12rem para dentro da imagem de 32.4rem ≈ metade, deixando parte para fora */
    left: -5rem; /* 5rem à mostra na lateral esquerda, restante para fora à direita */

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
        bottom: auto;
        left: auto;
    }
`;

export const WrapperImagemCarla = styled.div`
    width: 30.5rem;
    height: 32.4rem;

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
    }
`;

export const InfoAlessandra = styled(InfoCard)`
    width: 30.56rem;
    height: 17.3rem;
    top: -6rem; /* sobrepõe 6rem da parte superior */
    right: -4.63rem; /* deixa 4.63rem da imagem à mostra, card escapa para a esquerda */

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
        top: auto;
        right: auto;
    }
`;

export const WrapperImagemAlessandra = styled.div`
    width: 23.6rem;
    height: 29.6rem;

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
    }
`;

export const InfoFabio = styled(InfoCard)`
    width: 25.935rem;
    height: 13.5rem;
    top: -4rem; /* entra 4rem sobre a parte superior da imagem */
    right: -6.87rem; /* deixa 6.87rem à mostra na lateral esquerda, card vaza para a esquerda */

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
        top: auto;
        right: auto;
    }
`;

export const WrapperImagemFabio = styled.div`
    width: 22.125rem;
    height: 20.75rem;

    @media (max-width: 900px) {
        width: 100%;
        height: auto;
    }
`;

export const ImagemContainer = styled.div`
    position: relative;
    border-radius: 0.625rem;
    overflow: visible;

    @media (max-width: 900px) {
        overflow: hidden;
    }
`;

