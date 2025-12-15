import Base from "./Base";
import styled from "styled-components";

const BannerWrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    ),
    url("/imagens/sagradafamilia.png") lightgray 50% / cover no-repeat;
`;

const Filtro = styled.div`
  background: rgba(0, 0, 0, 0.79);
`;

const BannerConteudo = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Alata", sans-serif;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-top: 4em;
    font-size: 4rem;
    font-weight: 400;
    margin: 0;
    max-width: 57rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TextoDescricao = styled.p`
  margin-top: 2rem;
  color: #d2d2d2;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  max-width: 57rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7rem;
`;

const SagradaFamilia = () => {
  return (
    <Base>
      <BannerWrapper>
        <Filtro>
          <BannerConteudo>
            <h1>Sagrada Família</h1>
            <TextoDescricao>
              O condomínio Sagrada Família, localizado no Recreio dos Bandeirantes, é um
              empreendimento de alto padrão que reúne luxo, privacidade e excelente localização. Com
              arquitetura sofisticada, oferece ambientes amplos e elegantes. Possui estrutura
              completa, incluindo piscina, academia, spa, área de lazer e jardins planejados,
              garantindo conforto e momentos especiais. Conta ainda com segurança 24h, proporcionando
              tranquilidade, exclusividade e qualidade de vida em cada detalhe.
            </TextoDescricao>
          </BannerConteudo>
        </Filtro>
      </BannerWrapper>
    </Base>
  );
};

export default SagradaFamilia;
