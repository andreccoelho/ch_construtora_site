import React, { useEffect, useRef, useState } from "react";
import { SecaoNossoCompromisso, Conteudo, Titulo, TextoCorpo } from "./Style";

const NossoCompromisso = () => {
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
    <SecaoNossoCompromisso ref={sectionRef}>
      <Conteudo>
        <Titulo $isVisible={isVisible}>Nosso compromisso</Titulo>
        <TextoCorpo $isVisible={isVisible} $delay={0}>
          Trabalhamos com foco na excelência e no compromisso com o cliente. Cada
          projeto é tratado de forma única, respeitando as particularidades e
          desejos de quem confia em nosso trabalho.
        </TextoCorpo>
        <TextoCorpo $isVisible={isVisible} $delay={1}>
          Utilizamos materiais de alta qualidade, respeitamos rigorosamente as
          normas técnicas e ambientais, e buscamos constantemente inovações
          tecnológicas para garantir máxima eficiência e sustentabilidade em
          nossos projetos.
        </TextoCorpo>
      </Conteudo>
    </SecaoNossoCompromisso>
  );
};

export default NossoCompromisso;
