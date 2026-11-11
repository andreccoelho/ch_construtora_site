import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SecaoCondominios,
  TituloSecao,
  ListaCards,
  CardCondominio,
  ColunaEsquerda,
  ImagemCondominio,
  NomeCondominioWrapper,
  NomeCondominio,
  ColunaDireita,
  DescricaoCondominio,
  BotaoVejaCasas,
} from "./Style";
import { STATUS, condominiosComCasas } from "../../data/casas";

const Condominios = () => {
  const navigate = useNavigate();
  // Em "Projetos" só entram condomínios que têm casas já vendidas (vitrine).
  const condominios = condominiosComCasas(STATUS.VENDIDO);
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

  return (
    <SecaoCondominios ref={sectionRef}>
      <TituloSecao $isVisible={isVisible}>Condomínios</TituloSecao>
      <ListaCards>
        {condominios.map((condominio, index) => (
          <CardCondominio key={condominio.slug} $isVisible={isVisible} $delay={index}>
            <ColunaEsquerda>
              <ImagemCondominio imagem={condominio.imagem} />
              <NomeCondominioWrapper>
                <NomeCondominio>{condominio.titulo}</NomeCondominio>
              </NomeCondominioWrapper>
            </ColunaEsquerda>
            <ColunaDireita>
              <DescricaoCondominio>{condominio.descricao}</DescricaoCondominio>
              <BotaoVejaCasas
                type="button"
                onClick={() => navigate(`/condominios/${condominio.slug}`)}
              >
                Veja as casas
              </BotaoVejaCasas>
            </ColunaDireita>
          </CardCondominio>
        ))}
      </ListaCards>
    </SecaoCondominios>
  );
};

export default Condominios;
