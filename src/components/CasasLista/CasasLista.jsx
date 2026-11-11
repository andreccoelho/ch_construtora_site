import React, {useState, useEffect, useRef} from "react";
import styled, {keyframes} from "styled-components";
import {STATUS} from "../../data/casas";

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

const SecaoCasas = styled.section`
    background: #141414;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 4rem 1rem 6rem 1rem;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 3rem 1rem 4rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 2.5rem 1rem 3.5rem 1rem;
    }
`;

const ConteudoCasas = styled.div`
    width: 90rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 768px) {
        gap: 3rem;
    }

    @media (max-width: 480px) {
        gap: 2.5rem;
    }
`;

const CardCasa = styled.div`
    display: grid;
    grid-template-columns: minmax(0, auto) minmax(0, auto);
    column-gap: 4rem;
    align-items: flex-start;
    position: relative;
    padding: 2.5rem;
    border-radius: 1.5rem;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(189, 173, 119, 0.1);
    opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
    animation: ${({ $isVisible }) => $isVisible ? fadeInScale : 'none'} 0.8s ease-out ${({ $delay }) => 0.2 + $delay * 0.3}s forwards;
    transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(189, 173, 119, 0.15), 0 3px 10px rgba(0, 0, 0, 0.2);
        border-color: rgba(189, 173, 119, 0.25);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        row-gap: 3rem;
        column-gap: 2.5rem;
        padding: 2rem;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(189, 173, 119, 0.12), 0 2px 8px rgba(0, 0, 0, 0.15);
        }
    }

    @media (max-width: 480px) {
        column-gap: 2rem;
        padding: 1.5rem;
    }
`;

const ColunaInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

const TituloCasa = styled.h2`
    margin: 0;
    color: #bdad77;
    font-size: 4rem;
    font-weight: 300;
    line-height: 102.327%;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 2.7rem;
    }

    @media (max-width: 480px) {
        font-size: 2.1rem;
    }
`;

const DescricaoCasa = styled.p`
    margin: 2.88rem 0 2.88rem 0;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 102.327%;
    max-width: 25.375rem;

    @media (max-width: 900px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        font-size: 1.05rem;
        margin: 2rem 0 2rem 0;
    }

    @media (max-width: 480px) {
        font-size: 0.95rem;
        margin: 1.75rem 0 1.75rem 0;
    }
`;

const BotaoVerFotos = styled.button`
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

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const ColunaGaleria = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const FotoThumb = styled.button`
    width: calc(33.333% - 0.54rem);
    aspect-ratio: 199.51 / 177.73;
    background: ${({imagem}) => `url(${imagem}) lightgray center / cover no-repeat`};
    background-size: cover;
    background-position: center;
    border: 1px solid rgba(189, 173, 119, 0.15);
    padding: 0;
    border-radius: 0.75rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(189, 173, 119, 0.4) 0%, rgba(189, 173, 119, 0.1) 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 0.75rem;
        box-shadow: inset 0 0 20px rgba(189, 173, 119, 0.3);
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    &:hover {
        transform: scale(1.03);
        border-color: rgba(189, 173, 119, 0.4);
        z-index: 1;
    }

    &:hover::before {
        opacity: 1;
    }

    &:hover::after {
        opacity: 1;
    }

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: 600px) {
        width: calc(50% - 0.4rem);
    }
`;

const SeloAVenda = styled.div`
    width: 16rem;
    height: 16rem;
    background: url("/imagens/selo.png") center / contain no-repeat;
    position: absolute;
    right: -2rem;
    bottom: -2rem;
    z-index: 10;
    pointer-events: none;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
    animation: ${fadeInScale} 0.6s ease-out 0.4s backwards;

    @media (max-width: 768px) {
        width: 12rem;
        height: 12rem;
        right: -1.5rem;
        bottom: -1.5rem;
    }

    @media (max-width: 480px) {
        width: 9rem;
        height: 9rem;
        right: -1rem;
        bottom: -1rem;
    }
`;

const SeloVendido = styled.div`
    width: 16rem;
    height: 16rem;
    background: url("/imagens/selo_vendido.png") center / contain no-repeat;
    position: absolute;
    right: -2rem;
    bottom: -2rem;
    z-index: 10;
    pointer-events: none;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
    animation: ${fadeInScale} 0.6s ease-out 0.4s backwards;

    @media (max-width: 768px) {
        width: 12rem;
        height: 12rem;
        right: -1.5rem;
        bottom: -1.5rem;
    }

    @media (max-width: 480px) {
        width: 9rem;
        height: 9rem;
        right: -1rem;
        bottom: -1rem;
    }
`;

const Separador = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(189, 173, 119, 0.3) 50%, transparent 100%);
    margin: 2rem 0;
`;

const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalConteudo = styled.div`
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalImagem = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.75rem;
`;

const BotaoFechar = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.6);
    border: none;
    color: #fff;
    font-size: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);

    &:hover {
        background: rgba(189, 173, 119, 0.8);
        transform: rotate(90deg) scale(1.1);
    }

    &:active {
        transform: rotate(90deg) scale(0.95);
    }
`;

const BotaoNavegar = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
    border: none;
    color: #fff;
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);

    &:hover {
        background: rgba(189, 173, 119, 0.8);
        transform: translateY(-50%) scale(1.15);
    }

    &:active {
        transform: translateY(-50%) scale(0.95);
    }

    @media (max-width: 768px) {
        top: auto;
        bottom: -5rem;
        transform: translateY(0);

        &:hover {
            transform: translateY(0) scale(1.15);
        }

        &:active {
            transform: translateY(0) scale(0.95);
        }
    }
`;

const BotaoAnterior = styled(BotaoNavegar)`
    left: -4rem;

    @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-3.5rem);

        &:hover {
            transform: translateX(-3.5rem) scale(1.15);
        }

        &:active {
            transform: translateX(-3.5rem) scale(0.95);
        }
    }
`;

const BotaoProximo = styled(BotaoNavegar)`
    right: -4rem;

    @media (max-width: 768px) {
        right: auto;
        left: 50%;
        transform: translateX(0.5rem);

        &:hover {
            transform: translateX(0.5rem) scale(1.15);
        }

        &:active {
            transform: translateX(0.5rem) scale(0.95);
        }
    }
`;

const BotaoInteresse = styled.a`
    display: inline-block;
    margin-top: 1rem;
    color: #bdad77;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid rgba(189, 173, 119, 0.5);
    border-radius: 0.5rem;
    padding: 0.85rem 2rem;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(189, 173, 119, 0.15);
        border-color: #bdad77;
    }

    @media (max-width: 480px) {
        width: 100%;
        box-sizing: border-box;
    }
`;

const WHATSAPP = "https://api.whatsapp.com/send?phone=21970380708";

const linkInteresse = (casa, nomeCondominio) =>
    `${WHATSAPP}&text=${encodeURIComponent(
        `Olá! Tenho interesse na casa do ${nomeCondominio} - ${casa.titulo}.`
    )}`;

/**
 * Lista de casas (cards + galeria em modal).
 * Casas vendidas recebem o selo "Vendido"; casas à venda recebem o selo "À venda"
 * e um botão de contato para corretores/interessados.
 */
const CasasLista = ({casas, condominios = {}}) => {
    const [modalAberto, setModalAberto] = useState(false);
    const [fotosModal, setFotosModal] = useState([]);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {threshold: 0.1}
        );

        const el = sectionRef.current;
        if (el) {
            observer.observe(el);
        }

        return () => {
            if (el) {
                observer.unobserve(el);
            }
        };
    }, []);

    useEffect(() => {
        if (!modalAberto) return undefined;
        const aoTeclar = (e) => {
            if (e.key === "Escape") setModalAberto(false);
            if (e.key === "ArrowLeft") setIndiceAtual((a) => (a - 1 + fotosModal.length) % fotosModal.length);
            if (e.key === "ArrowRight") setIndiceAtual((a) => (a + 1) % fotosModal.length);
        };
        window.addEventListener("keydown", aoTeclar);
        return () => window.removeEventListener("keydown", aoTeclar);
    }, [modalAberto, fotosModal.length]);

    if (!casas.length) return null;

    const abrirModal = (fotos, indiceInicial = 0) => {
        setFotosModal(fotos);
        setIndiceAtual(indiceInicial);
        setModalAberto(true);
    };

    const fecharModal = () => setModalAberto(false);
    const irParaAnterior = () => setIndiceAtual((a) => (a - 1 + fotosModal.length) % fotosModal.length);
    const irParaProximo = () => setIndiceAtual((a) => (a + 1) % fotosModal.length);

    return (
        <>
            <SecaoCasas ref={sectionRef}>
                <ConteudoCasas>
                    {casas.map((casa, index) => {
                        const thumbs = casa.fotos.slice(0, 6);
                        const aVenda = casa.status === STATUS.A_VENDA;
                        const nomeCondominio = condominios[casa.condominio]?.titulo || "";

                        return (
                            <React.Fragment key={casa.id}>
                                <CardCasa $isVisible={isVisible} $delay={index}>
                                    <ColunaInfo>
                                        <TituloCasa>{casa.titulo}</TituloCasa>
                                        <DescricaoCasa>{casa.descricao}</DescricaoCasa>
                                        <BotaoVerFotos type="button" onClick={() => abrirModal(casa.fotos, 0)}>
                                            Ver fotos
                                        </BotaoVerFotos>
                                        {aVenda && (
                                            <BotaoInteresse
                                                href={linkInteresse(casa, nomeCondominio)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Tenho interesse
                                            </BotaoInteresse>
                                        )}
                                    </ColunaInfo>
                                    <ColunaGaleria>
                                        {thumbs.map((foto, i) => (
                                            <FotoThumb
                                                key={foto}
                                                imagem={foto}
                                                aria-label={`Abrir foto ${i + 1} do ${casa.titulo}`}
                                                onClick={() => abrirModal(casa.fotos, i)}
                                            />
                                        ))}
                                    </ColunaGaleria>
                                    {aVenda ? <SeloAVenda /> : <SeloVendido />}
                                </CardCasa>
                                <Separador/>
                            </React.Fragment>
                        );
                    })}
                </ConteudoCasas>
            </SecaoCasas>

            {modalAberto && fotosModal.length > 0 && (
                <ModalOverlay onClick={(e) => e.target === e.currentTarget && fecharModal()}>
                    <ModalConteudo>
                        <BotaoFechar type="button" onClick={fecharModal}>
                            ×
                        </BotaoFechar>
                        <BotaoAnterior type="button" onClick={irParaAnterior}>
                            ‹
                        </BotaoAnterior>
                        <ModalImagem src={fotosModal[indiceAtual]} alt="Foto da casa"/>
                        <BotaoProximo type="button" onClick={irParaProximo}>
                            ›
                        </BotaoProximo>
                    </ModalConteudo>
                </ModalOverlay>
            )}
        </>
    );
};

export default CasasLista;
