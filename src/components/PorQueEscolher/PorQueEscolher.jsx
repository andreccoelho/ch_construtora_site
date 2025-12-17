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
              Mais de 6 anos de atuação especializada em construções de casas de alto padrão.

            </CardDescricao>
          </Card>

          <Card>
            <CardHeader>
              <Numero>02</Numero>
              <TextoHeader>INOVAÇÃO</TextoHeader>
            </CardHeader>
            <CardDescricao>
              Tecnologias modernas e soluções inteligentes para seu projeto.

            </CardDescricao>
          </Card>

          <Card>
            <CardHeader>
              <Numero>03</Numero>
              <TextoHeader>QUALIDADE</TextoHeader>
            </CardHeader>
            <CardDescricao>
              Alta qualidade em construção civil sem comprometer seu orçamento.

            </CardDescricao>
          </Card>
        </ContainerCards>
      </Conteudo>
    </SecaoPorQueEscolher>
  );
};

export default PorQueEscolher;
