import React, { useEffect, useRef, useState } from "react";
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
  BlocoArquitetura,
  ImagemArquitetura,
  Subtitulo,
} from "./Style";

const NossaEquipe = () => {
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
    <SecaoNossaEquipe ref={sectionRef}>
      <Conteudo>
        <LinhaConteudo>
          <Titulo $isVisible={isVisible}>Nossa equipe</Titulo>
          <ColunaTexto>
            <Descricao $isVisible={isVisible}>
              Nossa equipe é formada por profissionais altamente capacitados e especializados em todas as etapas do processo construtivo. Da concepção do projeto arquitetônico até a entrega final das chaves, acompanhamos cada detalhe com dedicação e profissionalismo.
            </Descricao>
          </ColunaTexto>
        </LinhaConteudo>
        <ColunaImagens>
          <ImagemPrincipalWrapper $isVisible={isVisible}>
            <ImagemPrincipal />
          </ImagemPrincipalWrapper>
        </ColunaImagens>
      </Conteudo>
      <BlocoArquitetura>
        <ColunaImagens>
          <ImagemPrincipalWrapper $isVisible={isVisible}>
            <ImagemArquitetura
              src="/imagens/equipe_arquitetura.jpg"
              alt="Equipe de arquitetura da CH Arquitetura & Engenharia"
            />
          </ImagemPrincipalWrapper>
        </ColunaImagens>
        <LinhaConteudo>
          <Subtitulo $isVisible={isVisible}>Equipe de arquitetura</Subtitulo>
          <ColunaTexto>
            <Descricao $isVisible={isVisible}>
              Profissionais especializados e comprometidos com a excelência, a criatividade e o rigor técnico em cada projeto.
            </Descricao>
            <Descricao $isVisible={isVisible}>
              Com atenção aos detalhes e às necessidades de cada cliente, desenvolvemos soluções que integram estética, funcionalidade e qualidade, conduzindo cada etapa com eficiência e responsabilidade.
            </Descricao>
            <Descricao $isVisible={isVisible}>
              Mais do que projetar espaços, transformamos ideias em projetos únicos.
            </Descricao>
          </ColunaTexto>
        </LinhaConteudo>
      </BlocoArquitetura>
    </SecaoNossaEquipe>
  );
};

export default NossaEquipe;
