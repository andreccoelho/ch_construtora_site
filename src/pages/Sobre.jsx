import Base from "./Base";
import BannerSobre from "../components/Banner/BannerSobre";
import NossaEquipe from "../components/NossaEquipe/NossaEquipe";
import NossoCompromisso from "../components/NossoCompromisso/NossoCompromisso";
import PorQueEscolher from "../components/PorQueEscolher/PorQueEscolher";

const Sobre = () => {
  return (
    <Base>
      <BannerSobre />
      <NossaEquipe />
      <NossoCompromisso />
      <PorQueEscolher />
    </Base>
  );
};

export default Sobre;
