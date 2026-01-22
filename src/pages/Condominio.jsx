import React, {useState, useEffect, useRef} from "react";
import Base from "./Base";
import styled, {keyframes} from "styled-components";
import {useParams, Navigate} from "react-router-dom";

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

const BannerWrapper = styled.div`
    background: ${({imagem}) => `linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 100%), url(${imagem}) lightgray 50% / cover no-repeat`};
`;

const Filtro = styled.div`
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.66) 0%, #000 100%);
`;

const BannerConteudo = styled.div`
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        padding-top: 4em;
        font-size: 4rem;
        font-weight: 300;
        margin: 0;
        max-width: 57rem;
        margin-left: auto;
        margin-right: auto;
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.7rem;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 2.2rem;
        }
    }
`;

const TextoDescricao = styled.p`
    margin-top: 2rem;
    color: #d2d2d2;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300;
    max-width: 57rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 7rem;

    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 4rem;
        padding: 0 1.25rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 3rem;
        padding: 0 1rem;
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

const SeloAVendaWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: flex-end;
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
    "sagrada-familia": [
        {
            id: "lote-6",
            titulo: "Lote 6",
            descricao:
                "Residência de 3 pavimentos, projetada para oferecer conforto, funcionalidade e sofisticação. No térreo, conta com garagem, sala de estar, sala de jantar, lavabo, cozinha, lavanderia, uma suíte completa, além de área gourmet integrada à piscina. No primeiro pavimento, possui uma suíte máster com closet e varanda, além de duas suítes adicionais. No segundo pavimento, dispõe de área coberta com lavabo e área descoberta, ideal para lazer ao ar livre.",
            aVenda: true,
            fotos: [
                "/imagens/projetos/projeto-alanderson/Alan-SF-01.jpg",
                "/imagens/projetos/projeto-alanderson/Alan-SF-02.jpg",
                "/imagens/projetos/projeto-alanderson/Alan-SF-03.jpg",
                "/imagens/projetos/projeto-alanderson/Alan-SF-04.jpg",
                "/imagens/projetos/projeto-alanderson/Alan-SF-06.jpg",
                "/imagens/projetos/projeto-alanderson/Alan-SF-07.jpg",
                "/imagens/projetos/projeto-alanderson/Pergolado-frontal.jpg",
                "/imagens/projetos/projeto-alanderson/Pergolado-frontal-2.jpg",
            ],
        },
    ],
    "villa-blanca-ii": [
        {
            id: "lote-55",
            titulo: "Lote 55",
            descricao:
                "Casa de 4 pavimentos, com projeto moderno e ambientes amplos. Subsolo com garagem, lavabo, lavanderia e depósito. Térreo com living integrado, sala de estar com pé-direito duplo, sala de jantar, lavabo social, cozinha com área gourmet, piscina e lavabo externo. Primeiro pavimento com três suítes, duas com closet e varanda. Segundo pavimento com ambiente versátil com banheiro, varanda e área descoberta.",
            aVenda: true,
            fotos: [
                "/imagens/projetos/projeto-alessandra/A_1---Photo.jpg",
                "/imagens/projetos/projeto-alessandra/A_2---Foto.jpg",
                "/imagens/projetos/projeto-alessandra/A_3---Foto.jpg",
                "/imagens/projetos/projeto-alessandra/A_4---Foto.jpg",
                "/imagens/projetos/projeto-alessandra/A_5---Foto.jpg",
                "/imagens/projetos/projeto-alessandra/A_6---Foto.jpg",
                "/imagens/projetos/projeto-alessandra/A_7---Foto.jpg",
                "/imagens/projetos/projeto-alessandra/A_8---Foto.jpg",
                "/imagens/projetos/projeto-alessandra/A_10---Foto.jpg",
                "/imagens/projetos/projeto-alessandra/A_1---Photo---Copia.jpg",
                "/imagens/projetos/projeto-alessandra/A_1---Photo---Copia-(2).jpg",
            ],
        },
        {
            id: "lote-8",
            titulo: "Lote 8",
            descricao:
                "Residência de 3 pavimentos, com arquitetura contemporânea e layout funcional. Térreo com garagem, sala de estar com pé-direito duplo, sala de jantar, lavabo social, cozinha, despensa, lavanderia, área gourmet, piscina e banheiro externo. Primeiro pavimento com três suítes com closet e varanda. Segundo pavimento com ambiente multifuncional com banheiro e área descoberta.",
            aVenda: true,
            fotos: [
                "/imagens/projetos/projeto-carla/FC_1---Photo.jpg",
                "/imagens/projetos/projeto-carla/FC_2---Foto.jpg",
                "/imagens/projetos/projeto-carla/FC_3---Foto.jpg",
                "/imagens/projetos/projeto-carla/FC_4---Foto.jpg",
                "/imagens/projetos/projeto-carla/FC_5---Foto.jpg",
                "/imagens/projetos/projeto-carla/FC_6---Foto.jpg",
                "/imagens/projetos/projeto-carla/FC_7---Foto.jpg",
                "/imagens/projetos/projeto-carla/FC_8---Foto.jpg",
            ],
        },
    ],
    "villa-blanca-i": [
        {
            id: "lote-43",
            titulo: "Lote 43",
            descricao:
                "Residência de 4 pavimentos, com projeto sofisticado e foco em lazer e exclusividade. Subsolo com garagem, elevador e banheiro. Térreo com área gourmet, lavabo externo, sala de jantar, lavabo social, cozinha, piscina e uma suíte completa. Primeiro pavimento com três suítes, sendo uma com varanda. Segundo pavimento com suíte máster com closet, banheiro e área de spa com hidromassagem, além de varanda com espaço gourmet.",
            aVenda: true,
            fotos: [
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_1 - Photo.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_2 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_3 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_4 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_5 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_6 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_7 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_8 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Fachada/f_9 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_21 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_23 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_24 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_25 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_26 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_27 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_28 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_29 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_31 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_33 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_34 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_35 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_36 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_39 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_40 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_41 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_42 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_44 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_45 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_46 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_47 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_48 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_50 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_71 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_72 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_73 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_74 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_75 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_76 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_77 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_78 - Foto.jpg",
                "/imagens/projetos/Projeto Fabio e Raniele/Interiores projeto Fabio e Raniele/FR_79 - Foto.jpg",
            ],
        },
        {
            id: "lote-3",
            titulo: "Lote 3",
            descricao:
                "Casa de 3 pavimentos, com ambientes amplos e bem distribuídos. Térreo com garagem, sala de estar com pé-direito duplo, sala de jantar, lavabo social, cozinha, lavanderia, área gourmet, piscina e banheiro externo. Primeiro pavimento com três suítes, sendo uma suíte máster, todas com closet e varanda. Segundo pavimento com ambiente com banheiro que pode ser usado como quarto, sala de jogos ou cinema, além de área descoberta.",
            aVenda: true,
            fotos: [
                "/imagens/projetos/projeto-ch/VB_21.jpg",
                "/imagens/projetos/projeto-ch/VB_26.jpg",
                "/imagens/projetos/projeto-ch/VB_27.jpg",
                "/imagens/projetos/projeto-ch/VB_28.jpg",
                "/imagens/projetos/projeto-ch/VB_29.jpg",
                "/imagens/projetos/projeto-ch/VB_30.jpg",
                "/imagens/projetos/projeto-ch/VB_31.jpg",
                "/imagens/projetos/projeto-ch/VB_32.jpg",
                "/imagens/projetos/projeto-ch/VB_33.jpg",
                "/imagens/projetos/projeto-ch/VB_34.jpg",
                "/imagens/projetos/projeto-ch/VB_35.jpg",
                "/imagens/projetos/projeto-ch/VB_36.jpg",
                "/imagens/projetos/projeto-ch/VB_37.jpg",
                "/imagens/projetos/projeto-ch/VB_38.jpg",
                "/imagens/projetos/projeto-ch/VB_39.jpg",
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
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

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
                <SecaoCasas ref={sectionRef}>
                    <ConteudoCasas>
                        {casas.map((casa, index) => {
                            const thumbs = casa.fotos.slice(0, 6);

                            return (
                                <React.Fragment key={casa.id}>
                                    <CardCasa $isVisible={isVisible} $delay={index}>
                                        <ColunaInfo>
                                            <TituloCasa>{casa.titulo}</TituloCasa>
                                            <DescricaoCasa>{casa.descricao}</DescricaoCasa>
                                            <BotaoVerFotos type="button" onClick={() => abrirModal(casa.fotos, 0)}>
                                                Ver fotos
                                            </BotaoVerFotos>
                                        </ColunaInfo>
                                        <ColunaGaleria>
                                            {thumbs.map((foto, index) => (
                                                <FotoThumb
                                                    key={foto}
                                                    imagem={foto}
                                                    onClick={() => abrirModal(casa.fotos, index)}
                                                />
                                            ))}
                                        </ColunaGaleria>
                                        {casa.aVenda && <SeloAVenda />}
                                    </CardCasa>
                                    <Separador/>
                                </React.Fragment>
                            );
                        })}
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
