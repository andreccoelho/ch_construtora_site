import Base from "./Base";
import Banner from "../components/Banner/Banner";
import ObrasProjetos from "../components/ObrasProjetos/ObrasProjetos";
import ConhecaCHConstrutora from "../components/ConhecaCHConstrutora/ConhecaCHConstrutora";
import NossosProjetos from "../components/NossosProjetos/NossosProjetos";
import ContatoSessao from "../components/ContatoSessao/ContatoSessao";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Base>
      <Banner />
      <ObrasProjetos />
      <ConhecaCHConstrutora />
      <NossosProjetos />
      <ContatoSessao />
      <Footer />
    </Base>
  );
};

export default Home