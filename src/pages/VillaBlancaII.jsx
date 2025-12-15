import Base from "./Base";
import styled from "styled-components";

const BannerWrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    ),
    url("/imagens/vilablancaII.png") lightgray 50% / cover no-repeat;
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

const VillaBlancaII = () => {
  return (
    <Base>
      <BannerWrapper>
        <Filtro>
          <BannerConteudo>
            <h1>Villa Blanca II</h1>
            <TextoDescricao>
              O Villa Blanca II Residence é um condomínio fechado que oferece elegância, conforto,
              segurança e exclusividade, ideal tanto para morar quanto para investir. Moderno e
              sofisticado, conta com a opção de personalização pelo proprietário. O condomínio
              dispõe de lazer privativo e ampla área comum, incluindo quadra poliesportiva, quadra de
              areia, pista de skate, churrasqueiras, parque infantil, piscinas, academia,
              brinquedoteca e áreas externas de convivência. É o lugar perfeito para viver momentos
              especiais com família e amigos.
            </TextoDescricao>
          </BannerConteudo>
        </Filtro>
      </BannerWrapper>
    </Base>
  );
};

export default VillaBlancaII;
