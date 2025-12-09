import React from "react";
import {
  SecaoPorQueEscolher,
  Conteudo,
  TituloPrincipal,
  ContainerCards,
  Card,
  CardHeader,
  Numero,
  TextoHeader,
  CardDescricao,
} from "./Style";

const PorQueEscolher = () => {
  return (
    <SecaoPorQueEscolher>
      <Conteudo>
        <TituloPrincipal>
          POR QUE ESCOLHER A CH
          <br />
          CONSTRUTORA?
        </TituloPrincipal>

        <ContainerCards>
          <Card>
            <CardHeader>
              <Numero>01</Numero>
              <TextoHeader>EXPERIÊNCIA</TextoHeader>
            </CardHeader>
            <CardDescricao>
              MAIS DE 6 ANOS DE ATUAÇÃO ESPECIALIZADA EM CONSTRUÇÕES DE CASAS DE ALTO PADRÃO.
            </CardDescricao>
          </Card>

          <Card>
            <CardHeader>
              <Numero>02</Numero>
              <TextoHeader>INOVAÇÃO</TextoHeader>
            </CardHeader>
            <CardDescricao>
              TECNOLOGIAS MODERNAS E SOLUÇÕES INTELIGENTES PARA SEU PROJETO.
            </CardDescricao>
          </Card>

          <Card>
            <CardHeader>
              <Numero>03</Numero>
              <TextoHeader>QUALIDADE</TextoHeader>
            </CardHeader>
            <CardDescricao>
              ALTA QUALIDADE EM CONSTRUÇÃO CIVIL SEM COMPROMETER SEU ORÇAMENTO.
            </CardDescricao>
          </Card>
        </ContainerCards>
      </Conteudo>
    </SecaoPorQueEscolher>
  );
};

export default PorQueEscolher;
