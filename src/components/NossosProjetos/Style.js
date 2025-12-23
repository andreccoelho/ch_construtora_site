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

export const BotaoVerProjetos = styled.button`
    margin-top: auto;
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
`;

export const BotaoPrincipal = styled.button`
    margin-top: 5rem;
    color: #fff;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 0.625rem;
    background: linear-gradient(135deg, #bdad77 0%, #8a7d54 100%);
    padding: 1.25rem 3rem;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInUp : 'none'} 0.8s ease-out 0.8s forwards;
    box-shadow: 0 6px 20px rgba(189, 173, 119, 0.3);

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

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(189, 173, 119, 0.45);
        filter: brightness(1.1);
    }

    &:hover::before {
        left: 100%;
    }

    &:active {
        transform: translateY(-1px);
        filter: brightness(0.95);
    }

    @media (max-width: 900px) {
        margin-top: 3rem;
        font-size: 1rem;
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

