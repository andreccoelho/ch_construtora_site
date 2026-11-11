import React from "react";
import Base from "./Base";
import {useParams, Navigate} from "react-router-dom";
import BannerObras from "../components/Banner/BannerObras";
import CasasPorCondominio from "../components/CasasLista/CasasPorCondominio";
import {STATUS, casasDoCondominio} from "../data/casas";

// Projetos de um único condomínio (somente casas vendidas), no mesmo layout de /obras.
const Condominio = () => {
    const {slug} = useParams();

    if (!slug || casasDoCondominio(slug, STATUS.VENDIDO).length === 0) {
        return <Navigate to="/obras" replace/>;
    }

    return (
        <Base>
            <BannerObras/>
            <CasasPorCondominio status={STATUS.VENDIDO} somente={slug}/>
        </Base>
    );
};

export default Condominio;
