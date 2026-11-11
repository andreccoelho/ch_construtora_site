import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import Base from "./Base";
import BannerAVenda from "../components/Banner/BannerAVenda";
import CasasPorCondominio from "../components/CasasLista/CasasPorCondominio";
import {STATUS, casasPorStatus} from "../data/casas";

const SemCasas = styled.p`
    margin: 0;
    padding: 6rem 1.5rem;
    background: #141414;
    color: #d2d2d2;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;
`;

// Aba voltada a corretores: somente casas ainda disponíveis, agrupadas por condomínio.
const AVenda = () => {
    const {slug} = useParams();
    return (
    <Base>
        <BannerAVenda/>
        {casasPorStatus(STATUS.A_VENDA).length === 0 && (
            <SemCasas>No momento não há casas disponíveis. Fale com a nossa equipe para conhecer os próximos lançamentos.</SemCasas>
        )}
        <CasasPorCondominio status={STATUS.A_VENDA} somente={slug}/>
    </Base>
    );
};

export default AVenda;
