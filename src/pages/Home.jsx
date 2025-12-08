import Base from "./Base";
import Banner from "../components/Banner/Banner";
import ObrasProjetos from "../components/ObrasProjetos/ObrasProjetos";
import ConhecaCHConstrutora from "../components/ConhecaCHConstrutora/ConhecaCHConstrutora";
import NossosProjetos from "../components/NossosProjetos/NossosProjetos";

const Home = () => {
  return (
    <Base>
      <Banner />
      <ObrasProjetos />
      <ConhecaCHConstrutora />
      <NossosProjetos />
    </Base>
  );
};

export default Home