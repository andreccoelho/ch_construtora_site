import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecaoObrasProjetos, ConteudoColunas, Coluna, LinhaIconeTexto, IconeWrapper, TituloColuna, DescricaoColuna, BotaoSaibaMais } from "./Style";

const IconeGuindaste = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="gradientGuindaste" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE99D"/>
        <stop offset="100%" stopColor="#BDAD77"/>
      </linearGradient>
      <filter id="glowGuindaste">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glowGuindaste)">
      <path d="M18.26 45.08H10.58V12.5V2.92H18.26V45.08Z" stroke="url(#gradientGuindaste)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M2.92 12.5H45.08V10.58L18.26 2.92H10.58L2.92 10.58V12.5Z" stroke="url(#gradientGuindaste)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M47 45.08H1" stroke="url(#gradientGuindaste)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M41.24 12.5V19.28C41.219 19.935 41.375 20.584 41.692 21.158C42.008 21.731 42.474 22.209 43.04 22.54C43.641 22.855 44.148 23.323 44.509 23.897C44.871 24.471 45.074 25.13 45.097 25.808C45.121 26.486 44.965 27.158 44.644 27.757C44.324 28.355 43.85 28.857 43.273 29.212C42.695 29.568 42.033 29.764 41.355 29.781C40.677 29.798 40.007 29.635 39.412 29.309C38.817 28.982 38.32 28.504 37.97 27.923C37.62 27.342 37.43 26.678 37.42 26Z" stroke="url(#gradientGuindaste)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.26 33.58L10.58 41.26" stroke="url(#gradientGuindaste)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M10.58 24L18.26 31.66" stroke="url(#gradientGuindaste)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M18.26 14.42L10.58 22.08" stroke="url(#gradientGuindaste)" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
    </g>
  </svg>
);

const IconeRoloPintura = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="gradientPintura" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE99D"/>
        <stop offset="100%" stopColor="#BDAD77"/>
      </linearGradient>
      <filter id="glowPintura">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glowPintura)">
      <rect x="8" y="10" width="24" height="10" rx="3" stroke="url(#gradientPintura)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M32 15H36C37.6569 15 39 16.3431 39 18V22C39 23.6569 37.6569 25 36 25H28" stroke="url(#gradientPintura)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 20V32" stroke="url(#gradientPintura)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="18" y="32" width="8" height="10" rx="3" stroke="url(#gradientPintura)" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="22" cy="15" r="1.5" fill="url(#gradientPintura)"/>
      <circle cx="16" cy="15" r="1.5" fill="url(#gradientPintura)"/>
      <circle cx="28" cy="15" r="1.5" fill="url(#gradientPintura)"/>
    </g>
  </svg>
);

const ObrasProjetos = (props) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SecaoObrasProjetos {...props} ref={sectionRef}>
      <ConteudoColunas>
        <Coluna $isVisible={isVisible}>
          <LinhaIconeTexto>
            <IconeWrapper>
              <IconeGuindaste />
            </IconeWrapper>
            <TituloColuna>Obras</TituloColuna>
          </LinhaIconeTexto>
          <DescricaoColuna>
            Construção completa da fundação ao acabamento, executamos sua obra com qualidade e comprometimento.
          </DescricaoColuna>
        </Coluna>
        <Coluna $isVisible={isVisible}>
          <LinhaIconeTexto>
            <IconeWrapper>
              <IconeRoloPintura />
            </IconeWrapper>
            <TituloColuna>Projetos</TituloColuna>
          </LinhaIconeTexto>
          <DescricaoColuna>
            Planejamento inteligente, projetos arquitetônicos que valorizam espaços e respeitam todas as normas técnicas.
          </DescricaoColuna>
        </Coluna>
      </ConteudoColunas>
      <BotaoSaibaMais $isVisible={isVisible} onClick={() => navigate("/obras")}>
        Saiba mais
      </BotaoSaibaMais>
    </SecaoObrasProjetos>
  );
};

export default ObrasProjetos;
