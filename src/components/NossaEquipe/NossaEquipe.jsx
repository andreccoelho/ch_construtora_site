import React from "react";
import {
  SecaoNossaEquipe,
  Conteudo,
  ColunaTexto,
  Titulo,
  Descricao,
  LinhaConteudo,
  ColunaImagens,
  ImagemPrincipalWrapper,
  ImagemPrincipal,
} from "./Style";

const NossaEquipe = () => {
  return (
    <SecaoNossaEquipe>
      <Conteudo>
        <Titulo>Nossa equipe!</Titulo>

        <LinhaConteudo>
          <ColunaTexto>
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
        </LinhaConteudo>
      </Conteudo>
    </SecaoNossaEquipe>
  );
};

export default NossaEquipe;
