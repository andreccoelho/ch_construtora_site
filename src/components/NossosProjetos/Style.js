import styled, { keyframes } from "styled-components";
import { Botao } from "../ui/Botao";

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

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SecaoNossosProjetos = styled.section`
    background: linear-gradient(180deg, #0a0a0a 0%, #141414 100%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 2rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, #bdad77, transparent);
        opacity: 0.3;
    }

    @media (max-width: 900px) {
        padding: 4rem 1.5rem;
    }
`;

export const ConteudoProjetos = styled.div`
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
    gap: 3rem;
    margin-top: 4rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
        margin-top: 3rem;
    }
`;

export const TituloSecao = styled.h2`
    margin: 0;
    color: #bdad77;
    text-align: center;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 300;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 1s ease-out forwards;
    position: relative;
    padding-bottom: 1.5rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 2px;
        background: linear-gradient(90deg, #bdad77, #575037);
        opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
        animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 1s ease-out 0.3s forwards;
    }
`;

export const CardProjeto = styled.article`
    position: relative;
    background: rgba(20, 20, 20, 0.6);
    border-radius: 1rem;
    overflow: hidden;
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? slideUp : 'none'} 0.8s ease-out ${({ $delay }) => 0.2 + $delay * 0.15}s forwards;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(189, 173, 119, 0.1);
    backdrop-filter: blur(10px);

    &:hover {
        transform: translateY(-8px);
        border-color: rgba(189, 173, 119, 0.3);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5),
                    0 0 40px rgba(189, 173, 119, 0.1);
    }

    &:hover img {
        transform: scale(1.05);
    }

    @media (max-width: 900px) {
        &:hover {
            transform: translateY(-4px);
        }
    }
`;

export const ImagemContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: #0a0a0a;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        pointer-events: none;
    }
`;

export const ImagemProjeto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const InfoCard = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background: linear-gradient(180deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);

    @media (max-width: 900px) {
        padding: 1.5rem;
        gap: 1rem;
    }
`;

export const TituloProjeto = styled.h3`
    margin: 0;
    padding-bottom: 0.75rem;
    color: #bdad77;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 400;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: color 0.3s ease;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 2px;
        background: linear-gradient(90deg, #bdad77, #575037);
        transition: width 0.4s ease;
    }

    ${CardProjeto}:hover & {
        color: #d4c799;
    }

    ${CardProjeto}:hover &::after {
        width: 80px;
    }
`;

export const DescricaoProjeto = styled.p`
    margin: 0;
    color: rgba(255, 255, 255, 0.85);
    font-size: clamp(1rem, 2vw, 1.125rem);
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: 0.02em;
`;

export const BotaoVerProjetos = styled(Botao)`
    margin-top: auto;
`;

export const BotaoPrincipal = styled(Botao)`
    margin-top: 5rem;
    min-height: 3.75rem;
    padding: 1.1rem 3rem;
    font-size: 1.05rem;
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 0.8s ease-out 0.8s forwards;

    @media (max-width: 900px) {
        margin-top: 3rem;
        font-size: 0.9rem;
        padding: 1rem 2rem;
    }
`;

// Legacy exports for backward compatibility (not used in new design)
export const Coluna = styled.div``;
export const LinhaTituloIcone = styled.div``;
export const IconeSetaWrapper = styled.div``;
export const InfoAlan = styled.div``;
export const InfoCarla = styled.div``;
export const InfoAlessandra = styled.div``;
export const InfoFabio = styled.div``;
export const WrapperImagemAlan = styled.div``;
export const WrapperImagemCarla = styled.div``;
export const WrapperImagemAlessandra = styled.div``;
export const WrapperImagemFabio = styled.div``;

