import Base from "./Base";
import Banner from "../components/Banner/Banner";
import ObrasProjetos from "../components/ObrasProjetos/ObrasProjetos";
import ConhecaCHConstrutora from "../components/ConhecaCHConstrutora/ConhecaCHConstrutora";

const Home = () => {
  return (
    <Base>
      <Banner />
      <ObrasProjetos />
      <ConhecaCHConstrutora />
    </Base>
  );
};

export default Home