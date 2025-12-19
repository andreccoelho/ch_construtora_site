import styled from "styled-components"

const BannerEstilizado = styled.div`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), url(${"/imagens/fundo_predio.png"}) lightgray 50% / cover no-repeat;
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
    }

    @media (max-width: 768px) {
        h1 {
            padding-top: 5.5rem;
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
    //text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    max-width: 1300px;

    @media (max-width: 768px) {
        font-size: 0.95rem;
        max-width: 22rem;
        margin-top: 1.5rem;
    }
`

const BotaoContato = styled.button`
    margin-top: 2.99rem;
    width: 14rem;
    height: 2.875rem;
    border-radius: 0.9375rem;
    background: linear-gradient(180deg, #BDAD77 0%, #575037 100%);
    color: #FFF;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
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

    @media (max-width: 768px) {
        margin-top: 2.5rem;
        margin-bottom: 4rem;
    }
    margin-bottom: 7rem;
`

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
    transition: transform 0.3s ease;
    animation: bounce 2s infinite;

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }

    &:hover {
        animation: none;
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
`

export {BannerEstilizado, Filtro, BannerTexto, PalavraDestaque, TextoSecundario, BotaoScroll, TextoRole, BotaoContato}