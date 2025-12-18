import Base from "./Base";
import styled from "styled-components";

const BannerWrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    ),
    url("/imagens/vilablancaI.png") lightgray 50% / cover no-repeat;
`;

const Filtro = styled.div`
  background: rgba(0, 0, 0, 0.79);
`;

const BannerConteudo = styled.div`
  color: #fff;
  text-align: center;
   
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-top: 4em;
    font-size: 4rem;
     font-weight: 300;
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
   
  font-size: 1.5rem;
   font-weight: 300;
  text-transform: uppercase;
  max-width: 57rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7rem;
`;

const VillaBlancaI = () => {
  return (
    <Base>
      <BannerWrapper>
        <Filtro>
          <BannerConteudo>
            <h1>Villa Blanca I</h1>
            <TextoDescricao>
              O Condomínio Villa Blanca, no Recreio dos Bandeirantes, oferece um estilo de vida
              sofisticado, com casas de arquitetura moderna, acabamentos de alto padrão e ambientes
              amplos. O condomínio conta com lazer completo — piscinas, quadras, área gourmet,
              churrasqueiras e espaços infantis — além de segurança 24h e controle de acesso.
              Localizado em uma área privilegiada, fica próximo a shoppings, escolas, serviços e
              praias. É a opção ideal para quem busca luxo, conforto e exclusividade.
            </TextoDescricao>
          </BannerConteudo>
        </Filtro>
      </BannerWrapper>
    </Base>
  );
};

export default VillaBlancaI;
