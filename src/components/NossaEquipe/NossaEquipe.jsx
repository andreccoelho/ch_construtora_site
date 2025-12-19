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
        <LinhaConteudo>
        <Titulo>Nossa equipe!</Titulo>
          <ColunaTexto>
            <Descricao>
              Nossa equipe é formada por profissionais altamente capacitados e especializados em todas as etapas do processo construtivo. Da concepção do projeto arquitetônico até a entrega final das chaves, acompanhamos cada detalhe com dedicação e profissionalismo.
            </Descricao>
          </ColunaTexto>
        </LinhaConteudo>
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
