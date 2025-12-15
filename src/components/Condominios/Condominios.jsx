import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SecaoCondominios,
  TituloSecao,
  ListaCards,
  CardCondominio,
  ColunaEsquerda,
  ImagemCondominio,
  NomeCondominioWrapper,
  NomeCondominio,
  ColunaDireita,
  DescricaoCondominio,
  BotaoVejaCasas,
} from "./Style";

const Condominios = () => {
  const navigate = useNavigate();

  return (
    <SecaoCondominios>
      <TituloSecao>Condomínios</TituloSecao>
      <ListaCards>
        <CardCondominio>
          <ColunaEsquerda>
            <ImagemCondominio imagem="/imagens/vilablancaI.png" />
            <NomeCondominioWrapper>
              <NomeCondominio>Villa Blanca I</NomeCondominio>
            </NomeCondominioWrapper>
          </ColunaEsquerda>
          <ColunaDireita>
            <DescricaoCondominio>
              O Condomínio Villa Blanca, no Recreio dos Bandeirantes, oferece um estilo de vida
              sofisticado, com casas de arquitetura moderna, acabamentos de alto padrão e ambientes
              amplos. O condomínio conta com lazer completo — piscinas, quadras, área gourmet,
              churrasqueiras e espaços infantis — além de segurança 24h e controle de acesso.
              Localizado em uma área privilegiada, fica próximo a shoppings, escolas, serviços e
              praias. É a opção ideal para quem busca luxo, conforto e exclusividade.
            </DescricaoCondominio>
            <BotaoVejaCasas
              type="button"
              onClick={() => navigate("/condominios/villa-blanca-i")}
            >
              Veja as casas
            </BotaoVejaCasas>
          </ColunaDireita>
        </CardCondominio>

        <CardCondominio>
          <ColunaEsquerda>
            <ImagemCondominio imagem="/imagens/vilablancaII.png" />
            <NomeCondominioWrapper>
              <NomeCondominio>Villa Blanca II</NomeCondominio>
            </NomeCondominioWrapper>
          </ColunaEsquerda>
          <ColunaDireita>
            <DescricaoCondominio>
              O Villa Blanca II Residence é um condomínio fechado que oferece elegância, conforto,
              segurança e exclusividade, ideal tanto para morar quanto para investir. Moderno e
              sofisticado, conta com a opção de personalização pelo proprietário. O condomínio
              dispõe de lazer privativo e ampla área comum, incluindo quadra poliesportiva, quadra de
              areia, pista de skate, churrasqueiras, parque infantil, piscinas, academia,
              brinquedoteca e áreas externas de convivência. É o lugar perfeito para viver momentos
              especiais com família e amigos.
            </DescricaoCondominio>
            <BotaoVejaCasas
              type="button"
              onClick={() => navigate("/condominios/villa-blanca-ii")}
            >
              Veja as casas
            </BotaoVejaCasas>
          </ColunaDireita>
        </CardCondominio>

        <CardCondominio>
          <ColunaEsquerda>
            <ImagemCondominio imagem="/imagens/sagradafamilia.png" />
            <NomeCondominioWrapper>
              <NomeCondominio>Sagrada Família</NomeCondominio>
            </NomeCondominioWrapper>
          </ColunaEsquerda>
          <ColunaDireita>
            <DescricaoCondominio>
              O condomínio Sagrada Família, localizado no Recreio dos Bandeirantes, é um
              empreendimento de alto padrão que reúne luxo, privacidade e excelente localização. Com
              arquitetura sofisticada, oferece ambientes amplos e elegantes. Possui estrutura
              completa, incluindo piscina, academia, spa, área de lazer e jardins planejados,
              garantindo conforto e momentos especiais. Conta ainda com segurança 24h, proporcionando
              tranquilidade, exclusividade e qualidade de vida em cada detalhe.
            </DescricaoCondominio>
            <BotaoVejaCasas
              type="button"
              onClick={() => navigate("/condominios/sagrada-familia")}
            >
              Veja as casas
            </BotaoVejaCasas>
          </ColunaDireita>
        </CardCondominio>
      </ListaCards>
    </SecaoCondominios>
  );
};

export default Condominios;
