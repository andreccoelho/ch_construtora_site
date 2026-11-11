import styled, { keyframes } from "styled-components"
import { Botao } from "../ui/Botao";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BannerEstilizado = styled.div`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), url(${"/imagens/fundo_predio.png"}) lightgray 50% / cover no-repeat;
    background-size: cover;
    background-position: center;
    animation: subtleZoom 20s ease-in-out infinite alternate;

    @keyframes subtleZoom {
        0% {
            background-size: 100%;
        }
        100% {
            background-size: 105%;
        }
    }

    @media (max-width: 768px) {
        animation: none;
    }
`

const Filtro = styled.div`
    background: rgba(0, 0, 0, 0.79);
`

const BannerTexto = styled.div`
    color: #FFF;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        padding-top: 15rem;
        text-transform: uppercase;
        font-size: 4rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin: 0;
        max-width: 65rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
        animation: ${fadeInUp} 1s ease-out;
    }

    @media (max-width: 768px) {
        h1 {
            padding-top: 6rem;
            font-size: 2.2rem;
            max-width: 24rem;
        }
    }
`

const PalavraDestaque = styled.span`
    color: #BDAD77;
     
    font-size: 4rem;
    font-style: normal;
     font-weight: 400;
    line-height: normal;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`

const TextoSecundario = styled.p`
    margin-top: 2rem;
    color: #D2D2D2;
    text-align: center;
    max-width: 64rem;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    max-width: 1300px;
    animation: ${fadeInUp} 1s ease-out 0.2s both;

    @media (max-width: 768px) {
        font-size: 0.95rem;
        max-width: 22rem;
        margin-top: 1rem;
    }
`

const BotaoContato = styled(Botao)`
    margin-top: 2.99rem;
    margin-bottom: 7rem;

    @media (max-width: 768px) {
        margin-top: 2.5rem;
        margin-bottom: 4rem;
    }
`;

const BotaoScroll = styled.button`
    margin-top: 5rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    animation: ${fadeInUp} 1s ease-out 0.4s forwards, bounce 2s ease-in-out 1.5s infinite;

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }

    img, svg {
        filter: drop-shadow(0 2px 8px rgba(189, 173, 119, 0.4));
        transition: filter 0.3s ease;
    }

    &:hover img, &:hover svg {
        filter: drop-shadow(0 4px 12px rgba(189, 173, 119, 0.6));
    }

    @media (max-width: 768px) {
        margin-top: 2rem;
        width: 3rem;
        height: 3rem;

        svg {
            width: 48px;
            height: 48px;
        }
    }
`

const TextoRole = styled.p`
    margin-top: 1.5rem;
    color: #BDAD77;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    padding-bottom: 7rem;
    animation: ${fadeInUp} 1s ease-out 0.6s both;

    @media (max-width: 768px) {
        margin-top: 0.75rem;
        font-size: 0.875rem;
        padding-bottom: 3rem;
    }
`

export {BannerEstilizado, Filtro, BannerTexto, PalavraDestaque, TextoSecundario, BotaoScroll, TextoRole, BotaoContato}