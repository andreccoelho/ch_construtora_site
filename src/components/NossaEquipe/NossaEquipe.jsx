import React from "react";
import {
  SecaoNossaEquipe,
  Conteudo,
  ColunaTexto,
  Titulo,
  Descricao,
  ColunaImagens,
  ImagemPrincipalWrapper,
  ImagemPrincipal,
} from "./Style";

const NossaEquipe = () => {
  return (
    <SecaoNossaEquipe>
      <Conteudo>
        <ColunaTexto>
          <Titulo>Nossa equipe!</Titulo>
          <Descricao>
            Equipe de profissionais capacitados e especializados em todas as
            etapas do processo construtivo, desde a concepção do projeto
            arquitetônico até a entrega final das chaves.
          </Descricao>
        </ColunaTexto>

        <ColunaImagens>
          <ImagemPrincipalWrapper>
            <ImagemPrincipal />
          </ImagemPrincipalWrapper>
        </ColunaImagens>
      </Conteudo>
    </SecaoNossaEquipe>
  );
};

export default NossaEquipe;
