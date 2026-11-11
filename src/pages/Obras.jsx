import Base from "./Base";
import BannerObras from "../components/Banner/BannerObras";
import CasasPorCondominio from "../components/CasasLista/CasasPorCondominio";
import {STATUS} from "../data/casas";

// Vitrine: casas já vendidas, agrupadas por condomínio.
const Obras = () => {
  return (
    <Base>
      <BannerObras />
      <CasasPorCondominio status={STATUS.VENDIDO} />
    </Base>
  );
};

export default Obras;
