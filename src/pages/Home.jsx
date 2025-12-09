import Base from "./Base";
import Banner from "../components/Banner/Banner";
import ObrasProjetos from "../components/ObrasProjetos/ObrasProjetos";
import ConhecaCHConstrutora from "../components/ConhecaCHConstrutora/ConhecaCHConstrutora";
import NossosProjetos from "../components/NossosProjetos/NossosProjetos";
import ContatoSessao from "../components/ContatoSessao/ContatoSessao";

const Home = () => {
  return (
    <Base>
      <Banner />
      <ObrasProjetos />
      <ConhecaCHConstrutora />
      <NossosProjetos />
      <ContatoSessao />
    </Base>
  );
};

export default Home