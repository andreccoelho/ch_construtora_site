import React, { useEffect, useRef, useState } from "react";
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
    <SecaoPorQueEscolher ref={sectionRef}>
      <Conteudo>
        <TituloPrincipal $isVisible={isVisible}>
          POR QUE ESCOLHER A CH
          <br />
          CONSTRUTORA?
        </TituloPrincipal>

        <ContainerCards>
          <Card $isVisible={isVisible} $delay={0}>
            <CardHeader>
              <Numero>01</Numero>
              <TextoHeader>EXPERIÊNCIA</TextoHeader>
            </CardHeader>
            <CardDescricao>
              8 anos de atuação especializada em construções de casas de alto padrão.
            </CardDescricao>
          </Card>

          <Card $isVisible={isVisible} $delay={1}>
            <CardHeader>
              <Numero>02</Numero>
              <TextoHeader>INOVAÇÃO</TextoHeader>
            </CardHeader>
            <CardDescricao>
              Tecnologias modernas e soluções inteligentes para seu projeto.
            </CardDescricao>
          </Card>

          <Card $isVisible={isVisible} $delay={2}>
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
