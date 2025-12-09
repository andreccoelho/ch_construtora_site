import React from "react";
import { SecaoNossoCompromisso, Conteudo, Titulo, TextoCorpo } from "./Style";

const NossoCompromisso = () => {
  return (
    <SecaoNossoCompromisso>
      <Conteudo>
        <Titulo>Nosso compromisso</Titulo>
        <TextoCorpo>
          TRABALHAMOS COM FOCO NA EXCELÊNCIA E NO COMPROMISSO COM O CLIENTE. CADA
          PROJETO É TRATADO DE FORMA ÚNICA, RESPEITANDO AS PARTICULARIDADES E
          DESEJOS DE QUEM CONFIA EM NOSSO TRABALHO.
        </TextoCorpo>
        <TextoCorpo>
          UTILIZAMOS MATERIAIS DE ALTA QUALIDADE, RESPEITAMOS RIGOROSAMENTE AS
          NORMAS TÉCNICAS E AMBIENTAIS, E BUSCAMOS CONSTANTEMENTE INOVAÇÕES
          TECNOLÓGICAS PARA GARANTIR MÁXIMA EFICIÊNCIA E SUSTENTABILIDADE EM
          NOSSOS PROJETOS.
        </TextoCorpo>
      </Conteudo>
    </SecaoNossoCompromisso>
  );
};

export default NossoCompromisso;
