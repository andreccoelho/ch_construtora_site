import React, {useState} from "react";
import Base from "./Base";
import styled from "styled-components";
import {useParams, Navigate} from "react-router-dom";

const BannerWrapper = styled.div`
    background: ${({imagem}) => `linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 100%), url(${imagem}) lightgray 50% / cover no-repeat`};
`;

const Filtro = styled.div`
    background: rgba(0, 0, 0, 0.79);
`;

const BannerConteudo = styled.div`
    color: #fff;
    text-align: center;
    font-family: "Alata", sans-serif;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        padding-top: 4em;
        font-size: 4rem;
        font-weight: 400;
        margin: 0;
        max-width: 57rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

const TextoDescricao = styled.p`
    margin-top: 2rem;
    color: #d2d2d2;
    text-align: center;
    font-family: "Alata", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    max-width: 57rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 7rem;
`;

const SecaoCasas = styled.section`
    background: #141414;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 4rem 1rem 6rem 1rem;
    box-sizing: border-box;
`;

const ConteudoCasas = styled.div`
    width: 90rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const CardCasa = styled.div`
    display: grid;
    grid-template-columns: minmax(0, auto) minmax(0, auto);
    column-gap: 4rem;
    align-items: flex-start;
    position: relative;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        row-gap: 3rem;
    }
`;

const ColunaInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColunaGaleria = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
`;

const TituloCasa = styled.h2`
    margin: 0;
    color: #bdad77;
    font-family: "Alata", sans-serif;
    font-size: 4rem;
    font-weight: 400;
    line-height: 102.327%;
    text-transform: uppercase;
`;

const DescricaoCasa = styled.p`
    margin: 2.88rem 0 2.88rem 0;
    color: #fff;
    font-family: "Alata", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 102.327%;
    max-width: 25.375rem;
`;

const BotaoVerFotos = styled.button`
    color: #fff;
    text-align: center;
    font-family: "Alata", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    width: 14rem;
    height: 2.875rem;
    border-radius: 0.9375rem;
    background: linear-gradient(180deg, #bdad77 0%, #575037 100%);
    border: none;
    cursor: pointer;
`;

const FotoThumb = styled.div`
    width: 12.46938rem;
    height: 11.10825rem;
    aspect-ratio: 199.51 / 177.73;
    background: ${({imagem}) => `url(${imagem}) lightgray center / cover no-repeat`};
    cursor: pointer;

    @media (max-width: 600px) {
        width: calc(50% - 0.4rem);
    }
`;

const SeloAVendaWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
`;

const SeloAVenda = styled.div`
    width: 21.125rem;
    height: 16.5rem;
    aspect-ratio: 169 / 132;
    background: url("/imagens/selo.png") center / cover no-repeat;
    position: absolute;
    right: 0;
  bottom: 0;
`;

const Separador = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #bdad77 0%, #575037 100%);
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
`;

const BotaoAnterior = styled(BotaoNavegar)`
    left: -4rem;
`;

const BotaoProximo = styled(BotaoNavegar)`
    right: -4rem;
`;

const CONDOMINIOS = {
    "villa-blanca-i": {
        titulo: "Villa Blanca I",
        imagem: "/imagens/vilablancaI.png",
        descricao:
            "O Condomínio Villa Blanca, no Recreio dos Bandeirantes, oferece um estilo de vida sofisticado, com casas de arquitetura moderna, acabamentos de alto padrão e ambientes amplos. O condomínio conta com lazer completo — piscinas, quadras, área gourmet, churrasqueiras e espaços infantis — além de segurança 24h e controle de acesso. Localizado em uma área privilegiada, fica próximo a shoppings, escolas, serviços e praias. É a opção ideal para quem busca luxo, conforto e exclusividade.",
    },
    "villa-blanca-ii": {
        titulo: "Villa Blanca II",
        imagem: "/imagens/vilablancaII.png",
        descricao:
            "O Villa Blanca II Residence é um condomínio fechado que oferece elegância, conforto, segurança e exclusividade, ideal tanto para morar quanto para investir. Moderno e sofisticado, conta com a opção de personalização pelo proprietário. O condomínio dispõe de lazer privativo e ampla área comum, incluindo quadra poliesportiva, quadra de areia, pista de skate, churrasqueiras, parque infantil, piscinas, academia, brinquedoteca e áreas externas de convivência. É o lugar perfeito para viver momentos especiais com família e amigos.",
    },
    "sagrada-familia": {
        titulo: "Sagrada Família",
        imagem: "/imagens/sagradafamilia.png",
        descricao:
            "O condomínio Sagrada Família, localizado no Recreio dos Bandeirantes, é um empreendimento de alto padrão que reúne luxo, privacidade e excelente localização. Com arquitetura sofisticada, oferece ambientes amplos e elegantes. Possui estrutura completa, incluindo piscina, academia, spa, área de lazer e jardins planejados, garantindo conforto e momentos especiais. Conta ainda com segurança 24h, proporcionando tranquilidade, exclusividade e qualidade de vida em cada detalhe.",
    },
};

const CASAS_POR_CONDOMINIO = {
    "villa-blanca-i": [
        {
            id: "lote-43",
            titulo: "Casa – Lote 43",
            descricao:
                "4 pavimentos (incluindo subsolo); 5 suítes distribuídas pelos três andares habitáveis; área gourmet no térreo e na cobertura; piscina e spa com hidromassagem; elevador; garagem subterrânea; suíte master exclusiva na cobertura, com área de spa privativa.",
            aVenda: true,
            fotos: [
                "/imagens/lote45_1.jpg",
                "/imagens/lote45_2.png",
                "/imagens/lote45_3.png",
                "/imagens/lote45_4.jpg",
                "/imagens/lote45_5.jpg",
                "/imagens/lote45_6.jpg",
            ],
        },
    ],
};

const Condominio = () => {
    const {slug} = useParams();
    const dados = slug ? CONDOMINIOS[slug] : undefined;
    const casas = slug ? CASAS_POR_CONDOMINIO[slug] || [] : [];

    const [modalAberto, setModalAberto] = useState(false);
    const [fotosModal, setFotosModal] = useState([]);
    const [indiceAtual, setIndiceAtual] = useState(0);

    if (!dados) {
        return <Navigate to="/obras" replace/>;
    }

    const abrirModal = (fotos, indiceInicial = 0) => {
        setFotosModal(fotos);
        setIndiceAtual(indiceInicial);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };

    const irParaAnterior = () => {
        if (!fotosModal.length) return;
        setIndiceAtual((atual) => (atual - 1 + fotosModal.length) % fotosModal.length);
    };

    const irParaProximo = () => {
        if (!fotosModal.length) return;
        setIndiceAtual((atual) => (atual + 1) % fotosModal.length);
    };

    return (
        <Base>
            <BannerWrapper imagem={dados.imagem}>
                <Filtro>
                    <BannerConteudo>
                        <h1>{dados.titulo}</h1>
                        <TextoDescricao>{dados.descricao}</TextoDescricao>
                    </BannerConteudo>
                </Filtro>
            </BannerWrapper>

            {casas.length > 0 && (
                <SecaoCasas>
                    <ConteudoCasas>
                        {casas.map((casa) => (
                            <React.Fragment key={casa.id}>
                                <CardCasa>
                                    <ColunaInfo>
                                        <TituloCasa>{casa.titulo}</TituloCasa>
                                        <DescricaoCasa>{casa.descricao}</DescricaoCasa>
                                        <BotaoVerFotos type="button" onClick={() => abrirModal(casa.fotos, 0)}>
                                            Ver fotos
                                        </BotaoVerFotos>
                                        {casa.aVenda && (
                                            <SeloAVendaWrapper>
                                                <SeloAVenda/>
                                            </SeloAVendaWrapper>
                                        )}
                                    </ColunaInfo>
                                    <ColunaGaleria>
                                        {casa.fotos.map((foto, index) => (
                                            <FotoThumb
                                                key={foto}
                                                imagem={foto}
                                                onClick={() => abrirModal(casa.fotos, index)}
                                            />
                                        ))}
                                    </ColunaGaleria>
                                </CardCasa>
                                <Separador/>
                            </React.Fragment>
                        ))}
                    </ConteudoCasas>
                </SecaoCasas>
            )}

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
        </Base>
    );
};

export default Condominio;
