import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Base from "./Base";
import Banner from "../components/Banner/Banner";
import ObrasProjetos from "../components/ObrasProjetos/ObrasProjetos";
import ConhecaCHConstrutora from "../components/ConhecaCHConstrutora/ConhecaCHConstrutora";
import NossosProjetos from "../components/NossosProjetos/NossosProjetos";
import ContatoSessao from "../components/ContatoSessao/ContatoSessao";

const Home = () => {
  const location = useLocation();

  useEffect(() => 
    {
      if (location.state && location.state.scrollToContact) {
        const element = document.getElementById("contato");

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [location]
  );

  return (
    <Base>
      <Banner />
      <ObrasProjetos />
      <ConhecaCHConstrutora />
      <NossosProjetos />
      <ContatoSessao id="contato" />
    </Base>
  );
};

export default Home