import Base from "./Base";
import BannerSobre from "../components/Banner/BannerSobre";
import NossaEquipe from "../components/NossaEquipe/NossaEquipe";
import NossoCompromisso from "../components/NossoCompromisso/NossoCompromisso";

const Sobre = () => {
  return (
    <Base>
      <BannerSobre />
      <NossaEquipe />
      <NossoCompromisso />
    </Base>
  );
};

export default Sobre;
