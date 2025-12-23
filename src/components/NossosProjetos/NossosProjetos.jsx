import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SecaoNossosProjetos,
  ConteudoProjetos,
  TituloSecao,
  CardProjeto,
  ImagemProjeto,
  TituloProjeto,
  DescricaoProjeto,
  BotaoVerProjetos,
  BotaoPrincipal,
  InfoCard,
  ImagemContainer,
} from "./Style";

const projetos = [
  {
    id: 1,
    titulo: "Villa Blanca I",
    descricao: "Condomínio de alto padrão com casas modernas, lazer completo, segurança 24h e localização privilegiada no Recreio dos Bandeirantes.",
    imagem: "/imagens/projetos/Projeto-Fabio-e-Raniele/Fachada/f_1---Photo.jpg",
    alt: "Projeto no Condomínio Villa Blanca I",
    rota: "/condominios/villa-blanca-i"
  },
  {
    id: 2,
    titulo: "Villa Blanca II",
    descricao: "Condomínio moderno com extensa área de lazer, opções de personalização e infraestrutura completa para toda a família.",
    imagem: "/imagens/projetos/projeto-alessandra/A_1---Photo.jpg",
    alt: "Projeto no Condomínio Villa Blanca II",
    rota: "/condominios/villa-blanca-ii"
  },
  {
    id: 3,
    titulo: "Sagrada Família",
    descricao: "Empreendimento de alto padrão com arquitetura sofisticada, ambientes amplos, lazer completo e segurança 24h.",
    imagem: "/imagens/projetos/projeto-alanderson/Alan-SF-01.jpg",
    alt: "Projeto no Condomínio Sagrada Família",
    rota: "/condominios/sagrada-familia"
  }
];

const NossosProjetos = () => {
  const navigate = useNavigate();
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
    <SecaoNossosProjetos ref={sectionRef}>
      <TituloSecao $isVisible={isVisible}>Nossos Projetos</TituloSecao>
      <ConteudoProjetos>
        {projetos.map((projeto, index) => (
          <CardProjeto key={projeto.id} $isVisible={isVisible} $delay={index}>
            <ImagemContainer>
              <ImagemProjeto
                src={projeto.imagem}
                alt={projeto.alt}
                loading="lazy"
              />
            </ImagemContainer>
            <InfoCard>
              <TituloProjeto>{projeto.titulo}</TituloProjeto>
              <DescricaoProjeto>{projeto.descricao}</DescricaoProjeto>
              <BotaoVerProjetos
                type="button"
                onClick={() => navigate(projeto.rota)}
                aria-label={`Ver detalhes do projeto ${projeto.titulo}`}
              >
                Veja as casas
              </BotaoVerProjetos>
            </InfoCard>
          </CardProjeto>
        ))}
      </ConteudoProjetos>

      <BotaoPrincipal
        $isVisible={isVisible}
        onClick={() => navigate("/obras")}
        aria-label="Ver todos os projetos"
      >
        Veja todos os projetos
      </BotaoPrincipal>
    </SecaoNossosProjetos>
  );
};

export default NossosProjetos;

