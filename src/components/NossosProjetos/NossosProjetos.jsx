import React from "react";
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
  return (
    <SecaoNossosProjetos>
      <TituloSecao>Nossos Projetos</TituloSecao>
      <ConteudoProjetos>
        <Coluna>
          <CardProjeto>
            <ImagemContainer>
              <WrapperImagemAlan>
                <ImagemProjeto
                  src="/imagens/projetoalan.png"
                  alt="Projeto Alan Anderson"
                />
              </WrapperImagemAlan>
              <InfoAlan>
                <LinhaTituloIcone>
                  <TituloProjeto>Alan Anderson</TituloProjeto>
                  <IconeSetaWrapper>
                    <IconeSeta />
                  </IconeSetaWrapper>
                </LinhaTituloIcone>
                <DescricaoProjeto>
                  Residência moderna com piscina, pergolado e ampla área
                  envidraçada integrada ao lazer.
                </DescricaoProjeto>
              </InfoAlan>
            </ImagemContainer>
          </CardProjeto>

          <CardProjeto>
            <ImagemContainer>
              <WrapperImagemCarla>
                <ImagemProjeto
                  src="/imagens/projetocarla.png"
                  alt="Projeto Carla"
                />
              </WrapperImagemCarla>
              <InfoCarla>
                <LinhaTituloIcone>
                  <TituloProjeto>Carla</TituloProjeto>
                  <IconeSetaWrapper>
                    <IconeSeta />
                  </IconeSetaWrapper>
                </LinhaTituloIcone>
                <DescricaoProjeto>
                  Projeto residencial com integração entre área gourmet e
                  living, priorizando conforto e iluminação natural.
                </DescricaoProjeto>
              </InfoCarla>
            </ImagemContainer>
          </CardProjeto>
        </Coluna>

        <Coluna>
          <CardProjeto>
            <ImagemContainer>
              <WrapperImagemAlessandra>
                <ImagemProjeto
                  src="/imagens/projetoalessandra.png"
                  alt="Projeto Alessandra"
                />
              </WrapperImagemAlessandra>
              <InfoAlessandra>
                <LinhaTituloIcone>
                  <TituloProjeto>Alessandra</TituloProjeto>
                  <IconeSetaWrapper>
                    <IconeSeta />
                  </IconeSetaWrapper>
                </LinhaTituloIcone>
                <DescricaoProjeto>
                  Arquitetura contemporânea com volumetria marcante e fachadas
                  em vidro.
                </DescricaoProjeto>
              </InfoAlessandra>
            </ImagemContainer>
          </CardProjeto>

          <CardProjeto>
            <ImagemContainer>
              <WrapperImagemFabio>
                <ImagemProjeto
                  src="/imagens/projetofabio.png"
                  alt="Projeto Fábio"
                />
              </WrapperImagemFabio>
              <InfoFabio>
                <LinhaTituloIcone>
                  <TituloProjeto>Fábio</TituloProjeto>
                  <IconeSetaWrapper>
                    <IconeSeta />
                  </IconeSetaWrapper>
                </LinhaTituloIcone>
                <DescricaoProjeto>
                  Residência de alto padrão com destaque para área social e
                  integração com o jardim.
                </DescricaoProjeto>
              </InfoFabio>
            </ImagemContainer>
          </CardProjeto>
        </Coluna>
      </ConteudoProjetos>

      <BotaoVerProjetos>
        Veja todos os projetos
      </BotaoVerProjetos>
    </SecaoNossosProjetos>
  );
};

export default NossosProjetos;

