import React from "react";
import styled from "styled-components";
import CasasLista from "./CasasLista";
import {CONDOMINIOS, casasDoCondominio, condominiosComCasas} from "../../data/casas";

const Secao = styled.div`
    background: #141414;
    padding-top: 4rem;

    @media (max-width: 768px) {
        padding-top: 3rem;
    }
`;

const TituloCondominio = styled.h2`
    margin: 0;
    text-align: center;
    color: #fff;
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    span {
        color: #bdad77;
    }

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

/**
 * Casas de um status (vendido / a-venda) agrupadas por condomínio, sem descrição do condomínio.
 * `somente` (opcional) limita a um condomínio pelo slug.
 */
const CasasPorCondominio = ({status, somente}) => {
    const condominios = condominiosComCasas(status).filter((c) => !somente || c.slug === somente);

    return condominios.map((condominio) => (
        <Secao key={condominio.slug}>
            <TituloCondominio>
                Condomínio <span>{condominio.titulo}</span>
            </TituloCondominio>
            <CasasLista casas={casasDoCondominio(condominio.slug, status)} condominios={CONDOMINIOS}/>
        </Secao>
    ));
};

export default CasasPorCondominio;
