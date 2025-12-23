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
      { threshold: 0.2 }
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
          <Titulo $isVisible={isVisible}>Nossa equipe!</Titulo>
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
    </SecaoNossaEquipe>
  );
};

export default NossaEquipe;
