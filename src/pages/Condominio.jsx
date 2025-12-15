import Base from "./Base";
import styled from "styled-components";
import { useParams, Navigate } from "react-router-dom";

const BannerWrapper = styled.div`
  background: ${({ imagem }) => `linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 100%), url(${imagem}) lightgray 50% / cover no-repeat`};
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

const CONDOMINIOS = {
  "villa-blanca-i": {
    titulo: "Villa Blanca I",
    imagem: "/imagens/vilablancaI.png",
    descricao:
      "O Condomínio Villa Blanca, no Recreio dos Bandeirantes, oferece um estilo de vida sofisticado, com casas de arquitetura moderna, acabamentos de alto padrão e ambientes amplos. O condomínio conta com lazer completo — piscinas, quadras, área gourmet, churrasqueiras e espaços infantis — além de segurança 24h e controle de acesso. Localizado em uma área privilegiada, fica próximo a shoppings, escolas, serviços e praias. É a opção ideal para quem busca luxo, conforto e exclusividade.",
  },
  "villa-blanca-ii": {
    titulo: "Villa Blanca II",
    imagem: "/imagens/vilablancaII.png",
    descricao:
      "O Villa Blanca II Residence é um condomínio fechado que oferece elegância, conforto, segurança e exclusividade, ideal tanto para morar quanto para investir. Moderno e sofisticado, conta com a opção de personalização pelo proprietário. O condomínio dispõe de lazer privativo e ampla área comum, incluindo quadra poliesportiva, quadra de areia, pista de skate, churrasqueiras, parque infantil, piscinas, academia, brinquedoteca e áreas externas de convivência. É o lugar perfeito para viver momentos especiais com família e amigos.",
  },
  "sagrada-familia": {
    titulo: "Sagrada Família",
    imagem: "/imagens/sagradafamilia.png",
    descricao:
      "O condomínio Sagrada Família, localizado no Recreio dos Bandeirantes, é um empreendimento de alto padrão que reúne luxo, privacidade e excelente localização. Com arquitetura sofisticada, oferece ambientes amplos e elegantes. Possui estrutura completa, incluindo piscina, academia, spa, área de lazer e jardins planejados, garantindo conforto e momentos especiais. Conta ainda com segurança 24h, proporcionando tranquilidade, exclusividade e qualidade de vida em cada detalhe.",
  },
};

const Condominio = () => {
  const { slug } = useParams();
  const dados = slug ? CONDOMINIOS[slug] : undefined;

  if (!dados) {
    return <Navigate to="/obras" replace />;
  }

  return (
    <Base>
      <BannerWrapper imagem={dados.imagem}>
        <Filtro>
          <BannerConteudo>
            <h1>{dados.titulo}</h1>
            <TextoDescricao>{dados.descricao}</TextoDescricao>
          </BannerConteudo>
        </Filtro>
      </BannerWrapper>
    </Base>
  );
};

export default Condominio;
