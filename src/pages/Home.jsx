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

  const handleScrollDown = () => {
    const target = document.getElementById("footer");

    if (!target) return;

    const startY = window.scrollY || window.pageYOffset;
    const targetY = target.getBoundingClientRect().top + startY;
    const distance = targetY - startY;
    const duration = 12000; // duração do auto-scroll em ms (12s)

    let startTime = null;

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (location.state && location.state.scrollToContact) {
      const element = document.getElementById("contato");

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <Base>
      <Banner onScrollDown={handleScrollDown} />
      <ObrasProjetos id="obras-projetos" />
      <ConhecaCHConstrutora />
      <NossosProjetos />
      <ContatoSessao id="contato" />
    </Base>
  );
};

export default Home;