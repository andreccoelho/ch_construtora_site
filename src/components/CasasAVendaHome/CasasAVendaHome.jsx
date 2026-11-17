import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { STATUS, CONDOMINIOS, casasPorStatus } from "../../data/casas";
import {
  SecaoNossosProjetos,
  ConteudoProjetos,
  TituloSecao,
  CardProjeto,
  ImagemContainer,
  ImagemProjeto,
  InfoCard,
  TituloProjeto,
  DescricaoProjeto,
  BotaoVerProjetos,
  BotaoPrincipal,
} from "../NossosProjetos/Style";

// Mesma linguagem visual de "Nossos Projetos", com fundo invertido para separar as seções.
const Secao = styled(SecaoNossosProjetos)`
  background: linear-gradient(180deg, #141414 0%, #0a0a0a 100%);
`;

const Subtitulo = styled.p`
  margin: 1.5rem 0 0;
  max-width: 40rem;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 300;
  line-height: 1.6;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 1s ease-out 0.3s;
`;

const Etiqueta = styled.span`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 1;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #e8d9a0 0%, #bdad77 100%);
  color: #141414;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
`;

const Condominio = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: -0.5rem;
`;

const Descricao = styled(DescricaoProjeto)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CasasAVendaHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const casas = casasPorStatus(STATUS.A_VENDA);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (casas.length === 0) return null;

  return (
    <Secao ref={sectionRef} id="casas-a-venda">
      <TituloSecao $isVisible={isVisible}>Casas à venda</TituloSecao>
      <Subtitulo $isVisible={isVisible}>
        Casas prontas para morar, com o padrão CH de qualidade. Conheça as
        unidades disponíveis.
      </Subtitulo>

      <ConteudoProjetos>
        {casas.map((casa, index) => {
          const condominio = CONDOMINIOS[casa.condominio]?.titulo;
          return (
            <CardProjeto key={casa.id} $isVisible={isVisible} $delay={index}>
              <ImagemContainer>
                <Etiqueta>À venda</Etiqueta>
                <ImagemProjeto
                  src={casa.fotos[0]}
                  alt={`Fachada da casa ${casa.titulo} no ${condominio}`}
                  loading="lazy"
                />
              </ImagemContainer>
              <InfoCard>
                <Condominio>{condominio}</Condominio>
                <TituloProjeto>{casa.titulo}</TituloProjeto>
                <Descricao>{casa.descricao}</Descricao>
                <BotaoVerProjetos
                  as={Link}
                  to={`/a-venda/${casa.condominio}`}
                  aria-label={`Ver a casa ${casa.titulo} do ${condominio}`}
                >
                  Ver a casa
                </BotaoVerProjetos>
              </InfoCard>
            </CardProjeto>
          );
        })}
      </ConteudoProjetos>

      <BotaoPrincipal as={Link} to="/a-venda" $isVisible={isVisible}>
        Ver todas as casas à venda
      </BotaoPrincipal>
    </Secao>
  );
};

export default CasasAVendaHome;
