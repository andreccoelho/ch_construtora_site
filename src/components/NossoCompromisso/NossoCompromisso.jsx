import React from "react";
import { SecaoNossoCompromisso, Conteudo, Titulo, TextoCorpo } from "./Style";

const NossoCompromisso = () => {
  return (
    <SecaoNossoCompromisso>
      <Conteudo>
        <Titulo>Nosso compromisso</Titulo>
        <TextoCorpo>
          Trabalhamos com foco na excelência e no compromisso com o cliente. Cada
          projeto é tratado de forma única, respeitando as particularidades e
            desejos de quem confia em nosso trabalho.
            </TextoCorpo>
            <TextoCorpo>
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
