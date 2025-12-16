import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SecaoNossosProjetos,
  ConteudoProjetos,
  Coluna,
  TituloSecao,
  CardProjeto,
  ImagemProjeto,
  LinhaTituloIcone,
  TituloProjeto,
  DescricaoProjeto,
  IconeSetaWrapper,
  BotaoVerProjetos,
  InfoAlan,
  InfoCarla,
  InfoAlessandra,
  InfoFabio,
  WrapperImagemAlan,
  WrapperImagemCarla,
  WrapperImagemAlessandra,
  WrapperImagemFabio,
  ImagemContainer,
} from "./Style";

const IconeSeta = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
  >
    <path
      d="M18.6667 45.3334L45.3334 18.6667M45.3334 18.6667V42.6667M45.3334 18.6667H21.3334"
      stroke="url(#paint0_linear_43_49)"
      strokeWidth="5.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_43_49"
        x1="32"
        y1="18.6667"
        x2="32"
        y2="45.3334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDAD77" />
        <stop offset="1" stopColor="#575037" />
      </linearGradient>
    </defs>
  </svg>
);

const NossosProjetos = () => {
  const navigate = useNavigate();

  return (
    <SecaoNossosProjetos>
      <TituloSecao>Nossos Projetos</TituloSecao>
      <ConteudoProjetos>
        <Coluna>
          <CardProjeto>
            <ImagemContainer>
              <WrapperImagemAlan>
                <ImagemProjeto
                  src="/imagens/projetos/Projeto-Fabio-e-Raniele/Fachada/f_1---Photo.jpg"
                  alt="Projeto no Condomínio Villa Blanca I"
                />
              </WrapperImagemAlan>
              <InfoAlan>
                <LinhaTituloIcone>
                  <TituloProjeto>Villa Blanca I</TituloProjeto>
                  <IconeSetaWrapper
                    onClick={() => navigate("/condominios/villa-blanca-i")}
                  >
                    <IconeSeta />
                  </IconeSetaWrapper>
                </LinhaTituloIcone>
                <DescricaoProjeto>
                  Condomínio de alto padrão com casas modernas, lazer
                  completo, segurança 24h e localização privilegiada no
                  Recreio dos Bandeirantes.
                </DescricaoProjeto>
              </InfoAlan>
            </ImagemContainer>
          </CardProjeto>
        </Coluna>

        <Coluna>
          <CardProjeto>
            <ImagemContainer>
              <WrapperImagemAlessandra>
                <ImagemProjeto
                  src="/imagens/projetos/projeto-alessandra/A_1---Photo.jpg"
                  alt="Projeto no Condomínio Villa Blanca II"
                />
              </WrapperImagemAlessandra>
              <InfoAlessandra>
                <LinhaTituloIcone>
                  <TituloProjeto>Villa Blanca II</TituloProjeto>
                  <IconeSetaWrapper
                    onClick={() => navigate("/condominios/villa-blanca-ii")}
                  >
                    <IconeSeta />
                  </IconeSetaWrapper>
                </LinhaTituloIcone>
                <DescricaoProjeto>
                  Condomínio moderno com extensa área de lazer, opções de
                  personalização e infraestrutura completa para toda a
                  família.
                </DescricaoProjeto>
              </InfoAlessandra>
            </ImagemContainer>
          </CardProjeto>

          <CardProjeto>
            <ImagemContainer>
              <WrapperImagemFabio>
                <ImagemProjeto
                  src="/imagens/projetos/projeto-alanderson/Alan-SF-01.jpg"
                  alt="Projeto no Condomínio Sagrada Família"
                />
              </WrapperImagemFabio>
              <InfoFabio>
                <LinhaTituloIcone>
                  <TituloProjeto>Sagrada Família</TituloProjeto>
                  <IconeSetaWrapper
                    onClick={() => navigate("/condominios/sagrada-familia")}
                  >
                    <IconeSeta />
                  </IconeSetaWrapper>
                </LinhaTituloIcone>
                <DescricaoProjeto>
                  Empreendimento de alto padrão com arquitetura sofisticada,
                  ambientes amplos, lazer completo e segurança 24h.
                </DescricaoProjeto>
              </InfoFabio>
            </ImagemContainer>
          </CardProjeto>
        </Coluna>
      </ConteudoProjetos>

      <BotaoVerProjetos onClick={() => navigate("/obras")}>
        Veja todos os projetos
      </BotaoVerProjetos>
    </SecaoNossosProjetos>
  );
};

export default NossosProjetos;

