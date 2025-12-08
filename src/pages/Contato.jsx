import Base from "./Base";
import BannerContato from "../components/Banner/BannerContato";
import ContatoSessao from "../components/ContatoSessao/ContatoSessao";

const Contato = () => {
  return (
    <Base>
      <BannerContato />
      <ContatoSessao />
    </Base>
  );
};

export default Contato;
