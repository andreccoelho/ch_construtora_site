import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  SecaoConheca,
  Conteudo,
  ColunaImagem,
  ImagemWrapper,
  Imagem,
  ColunaTexto,
  Titulo,
  Descricao,
  MiniSecao,
  Retangulo,
  IconeWrapper,
  TextoRetangulo,
  BotaoConhecaMais,
} from "./Style";

const IconeTrofeu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <defs>
      <linearGradient
        id="gradientTrofeu"
        x1="24"
        y1="0"
        x2="24"
        y2="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE99D" />
        <stop offset="1" stopColor="#BDAD77" />
      </linearGradient>
      <filter id="glowTrofeu">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glowTrofeu)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0H36V6H48V12C48 19.3692 42.6858 25.4972 35.6808 26.7611C34.6612 31.0911 31.296 34.5162 27 35.622V42H36V48H12V42H21V35.622C16.7039 34.5162 13.3388 31.0911 12.3192 26.7611C5.31408 25.4972 0 19.3692 0 12V6H12V0ZM36 20.4878V12H42C42 15.9187 39.4956 19.2523 36 20.4878ZM12 12H6C6 15.9187 8.50436 19.2523 12 20.4878V12Z"
        fill="url(#gradientTrofeu)"
      />
    </g>
  </svg>
);

const IconePessoas = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <defs>
      <linearGradient
        id="gradientPessoas"
        x1="24"
        y1="0"
        x2="24"
        y2="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE99D" />
        <stop offset="1" stopColor="#BDAD77" />
      </linearGradient>
      <filter id="glowPessoas">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glowPessoas)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.3846 8.40235C23.8406 8.40235 28.284 12.843 28.284 18.3018V21.1302C28.284 24.1791 26.8698 26.8747 24.6948 28.6933C26.948 29.0412 29.1786 29.5673 31.6526 30.3083C34.713 31.304 36.7693 34.2002 36.7693 37.5124V42.5214L36.099 42.9372C32.388 45.2452 26.2985 48 18.3846 48C14.0148 48 7.3906 47.1204 0.6675 42.9372L0 42.5214V37.7867C0 34.2709 2.23161 31.2106 5.54933 30.1669C7.68478 29.4994 9.86266 28.9845 12.0575 28.6792C9.89375 26.8606 8.48522 24.1708 8.48522 21.1302V18.3018C8.48522 12.843 12.9259 8.40235 18.3846 8.40235ZM29.5852 0C35.0411 0 39.4846 4.44061 39.4846 9.89943V12.7278C39.4846 15.7769 38.0704 18.4752 35.8953 20.291C38.2485 20.639 40.4763 21.1678 42.8532 21.906C45.9136 22.9072 47.9698 25.8007 47.9698 29.1127V34.1218L47.3022 34.5377C45.362 35.7454 42.7569 37.0634 39.5977 38.0562V37.5131C39.5977 32.9707 36.7579 28.994 32.5295 27.6193C31.6092 27.3193 30.6791 27.0505 29.7407 26.8133C30.6344 25.0681 31.1124 23.1279 31.1124 21.1311V18.3026C31.1124 12.0406 26.5615 6.85323 20.6021 5.79823C22.169 2.38718 25.5914 0 29.5852 0Z"
        fill="url(#gradientPessoas)"
      />
    </g>
  </svg>
);

const IconeCheck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <defs>
      <linearGradient
        id="gradientCheck"
        x1="24"
        y1="4"
        x2="24"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE99D" />
        <stop offset="1" stopColor="#BDAD77" />
      </linearGradient>
      <filter id="glowCheck">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glowCheck)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 24C44 35.0457 35.0454 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0454 4 44 12.9543 44 24ZM32.0605 17.9394C32.6464 18.5251 32.6464 19.4749 32.0605 20.0606L22.0605 30.0606C21.4748 30.6464 20.5252 30.6464 19.9394 30.0606L15.9394 26.0606C15.3535 25.4749 15.3535 24.5252 15.9394 23.9394C16.5251 23.3536 17.4749 23.3536 18.0606 23.9394L21 26.8787L25.4695 22.4092L29.9394 17.9394C30.5251 17.3536 31.4748 17.3536 32.0605 17.9394Z"
        fill="url(#gradientCheck)"
      />
    </g>
  </svg>
);

const IconeQuadro = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <defs>
      <linearGradient
        id="gradientQuadro"
        x1="24"
        y1="0"
        x2="24"
        y2="48"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE99D" />
        <stop offset="1" stopColor="#BDAD77" />
      </linearGradient>
      <filter id="glowQuadro">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glowQuadro)">
      <path
        d="M46.0428 30.7911C45.0835 29.1278 43.3331 28.174 41.2407 28.174C39.0244 28.174 37.1112 26.6877 36.7907 24.7169C36.5866 23.4612 36.9193 22.2461 37.7279 21.2953C38.5221 20.3616 39.6804 19.826 40.9058 19.826C43.2069 19.826 45.0838 18.8579 46.055 17.1698C46.9733 15.5737 46.9586 13.5757 46.0169 11.9558C41.7314 4.58127 33.7757 0 25.2544 0C19.4716 0 13.7688 1.94381 9.74552 5.62144C5.59193 9.1223 2.74156 13.9468 1.71968 19.2061C0.323182 26.3933 2.15346 33.7071 6.74122 39.272C11.314 44.8188 18.0614 48 25.2538 48C33.795 48 41.7606 43.402 46.0417 36.0006C46.9701 34.3959 46.9705 32.3998 46.0428 30.7911ZM8.03636 24C8.03636 21.4107 10.1428 19.3044 12.732 19.3044C15.3212 19.3044 17.4277 21.4107 17.4277 24C17.4277 26.5892 15.3212 28.6956 12.732 28.6956C10.1428 28.6956 8.03636 26.5892 8.03636 24ZM23.0594 37.192C22.1907 38.6965 20.6089 39.5388 18.9849 39.5388C18.1888 39.5388 17.3827 39.3365 16.6449 38.9105C15.5587 38.2834 14.7819 37.2708 14.457 36.0593C14.1325 34.8478 14.2992 33.5824 14.9262 32.4961C15.5533 31.4099 16.5659 30.633 17.7775 30.3084C18.9889 29.9838 20.2543 30.1504 21.3406 30.7775C23.5829 32.0722 24.3541 34.9496 23.0594 37.192ZM21.3407 17.2224C20.6172 17.6402 19.8142 17.8536 19.0006 17.8536C18.5927 17.8536 18.182 17.8001 17.7775 17.6916C16.5661 17.3669 15.5535 16.59 14.9263 15.5038C14.2992 14.4174 14.1326 13.152 14.4572 11.9406C14.7818 10.7291 15.5587 9.71652 16.645 9.08934C17.7313 8.46216 18.9968 8.29556 20.2082 8.62022C21.4197 8.94488 22.4322 9.72178 23.0595 10.8081C24.3541 13.0504 23.5829 15.9278 21.3407 17.2224ZM27.4481 10.8081C28.0752 9.72188 29.0876 8.94498 30.2993 8.62032C31.5109 8.29574 32.7762 8.46234 33.8623 9.08944C36.1046 10.384 36.8755 13.2614 35.5812 15.5038C34.954 16.5901 33.9415 17.3669 32.7299 17.6916C32.3255 17.8001 31.9147 17.8537 31.5069 17.8537C30.6933 17.8537 29.8903 17.6403 29.1667 17.2225C28.0806 16.5954 27.3037 15.5829 26.979 14.3714C26.6543 13.1596 26.821 11.8942 27.4481 10.8081ZM33.8624 38.9106C33.1249 39.3366 32.3185 39.5389 31.5226 39.5389C29.8984 39.5389 28.3169 38.6968 27.4482 37.1921C26.821 36.1058 26.6544 34.8404 26.979 33.6289C27.3037 32.4174 28.0806 31.4048 29.1668 30.7776C30.2531 30.1505 31.5187 29.9838 32.73 30.3085C33.9415 30.6332 34.9541 31.4101 35.5813 32.4963C36.8758 34.7387 36.1046 37.6162 33.8624 38.9106Z"
        fill="url(#gradientQuadro)"
      />
    </g>
  </svg>
);

const ConhecaCHConstrutora = () => {
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
    <SecaoConheca ref={sectionRef}>
      <Conteudo>
        <ColunaImagem $isVisible={isVisible}>
          <ImagemWrapper>
            <Imagem
              src="/imagens/conheca_ch.png"
              alt="Equipe da CH Construtora trabalhando em um projeto"
            />
          </ImagemWrapper>
        </ColunaImagem>

        <ColunaTexto>
          <Titulo $isVisible={isVisible}>Conheça a CH Construtora</Titulo>
          <Descricao $isVisible={isVisible}>
            Desde 2018 no mercado, nós nos dedicamos a entregar projetos
            personalizados de alto padrão. Nossa missão é construir não apenas
            uma casa, mas o lar perfeito para você e sua família.
          </Descricao>

          <MiniSecao>
            <Retangulo $isVisible={isVisible} $delay={0}>
              <IconeWrapper>
                <IconeTrofeu />
              </IconeWrapper>
              <TextoRetangulo>8 anos de experiência</TextoRetangulo>
            </Retangulo>

            <Retangulo $isVisible={isVisible} $delay={1}>
              <IconeWrapper>
                <IconePessoas />
              </IconeWrapper>
              <TextoRetangulo>Equipe especializada</TextoRetangulo>
            </Retangulo>

            <Retangulo $isVisible={isVisible} $delay={2}>
              <IconeWrapper>
                <IconeCheck />
              </IconeWrapper>
              <TextoRetangulo>Qualidade garantida</TextoRetangulo>
            </Retangulo>

            <Retangulo $isVisible={isVisible} $delay={3}>
              <IconeWrapper>
                <IconeQuadro />
              </IconeWrapper>
              <TextoRetangulo>Projetos personalizados</TextoRetangulo>
            </Retangulo>
          </MiniSecao>
          <BotaoConhecaMais $isVisible={isVisible}>
            <Link to="/sobre">Conheça mais</Link>
          </BotaoConhecaMais>
        </ColunaTexto>
      </Conteudo>
    </SecaoConheca>
  );
};

export default ConhecaCHConstrutora;

