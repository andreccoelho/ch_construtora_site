import React from "react";
import {
  DivisorContato,
  TextoDivisor,
  SecaoContatoWrapper,
  SecaoContato,
  ColunaEsquerda,
  TituloContato,
  LinhaEnderecoDestaque,
  LinhaEndereco,
  BlocoEndereco,
  TituloHorario,
  TextoHorario,
  BlocoHorario,
  BotaoOrcamento,
  ColunaDireita,
  CampoInput,
  CampoTextarea,
  BotaoEnviar,
} from "./Style";

const ContatoSessao = () => {
  return (
    <>
      <DivisorContato>
        <TextoDivisor>
          A casa dos seus sonhos está a um contato de distância. Vamos começar?
        </TextoDivisor>
      </DivisorContato>

      <SecaoContatoWrapper id="contato">
        <SecaoContato>
          <ColunaEsquerda>
            <TituloContato>Contato</TituloContato>

            <BlocoEndereco>
              <LinhaEnderecoDestaque>Vogue Square - Sala 212</LinhaEnderecoDestaque>
              <LinhaEndereco>
                Av. das Américas, 8585 - Barra da Tijuca, Rio de Janeiro - RJ,
                22793-081
              </LinhaEndereco>
            </BlocoEndereco>

            <BlocoHorario>
              <TituloHorario>Horário de atendimento</TituloHorario>
              <TextoHorario>Segunda a sexta - 9H a 18H</TextoHorario>
            </BlocoHorario>

            <BotaoOrcamento>Faça seu orçamento</BotaoOrcamento>
          </ColunaEsquerda>

          <ColunaDireita>
            <CampoInput type="text" placeholder="Seu nome" />
            <CampoInput type="email" placeholder="Seu endereço de email" />
            <CampoTextarea placeholder="Mensagem" />
            <BotaoEnviar>Enviar</BotaoEnviar>
          </ColunaDireita>
        </SecaoContato>
      </SecaoContatoWrapper>
    </>
  );
};

export default ContatoSessao;
