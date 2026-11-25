import React, { useState } from "react";
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
  MensagemStatus,
} from "./Style";

// Formulário criado em https://formspree.io (o e-mail de destino é
// configurado lá, no cadastro do formulário).
const FORMSPREE_ID = "moedrnpp";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

const ContatoSessao = () => {
  const [status, setStatus] = useState("idle"); // idle | enviando | sucesso | erro

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("enviando");
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Formspree respondeu ${response.status}`);
      form.reset();
      setStatus("sucesso");
    } catch (erro) {
      setStatus("erro");
    }
  };

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

            <BotaoOrcamento
              href="https://api.whatsapp.com/send?phone=21970380708"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faça seu orçamento
            </BotaoOrcamento>
          </ColunaEsquerda>

          <ColunaDireita as="form" onSubmit={handleSubmit}>
            <CampoInput type="text" name="nome" aria-label="Seu nome" autoComplete="name" placeholder="Seu nome" required />
            <CampoInput type="email" name="email" aria-label="Seu endereço de email" autoComplete="email" placeholder="Seu endereço de email" required />
            <CampoTextarea name="mensagem" aria-label="Mensagem" placeholder="Mensagem" required />
            <BotaoEnviar type="submit" disabled={status === "enviando"}>
              {status === "enviando" ? "Enviando..." : "Enviar"}
            </BotaoEnviar>
            <MensagemStatus role="status" $erro={status === "erro"}>
              {status === "sucesso" && "Mensagem enviada! Entraremos em contato em breve."}
              {status === "erro" && "Não foi possível enviar. Tente novamente ou fale conosco pelo WhatsApp."}
            </MensagemStatus>
          </ColunaDireita>
        </SecaoContato>
      </SecaoContatoWrapper>
    </>
  );
};

export default ContatoSessao;
