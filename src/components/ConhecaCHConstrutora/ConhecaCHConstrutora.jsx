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
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <g clipPath="url(#clip0_39_85)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0H30V5H40V10C40 16.141 35.5715 21.2477 29.734 22.3009C28.8843 25.9092 26.08 28.7635 22.5 29.685V35H30V40H10V35H17.5V29.685C13.9199 28.7635 11.1157 25.9092 10.266 22.3009C4.4284 21.2477 0 16.141 0 10V5H10V0ZM30 17.0732V10H35C35 13.2656 32.913 16.0436 30 17.0732ZM10 10H5C5 13.2656 7.08703 16.0436 10 17.0732V10Z"
        fill="url(#paint0_linear_39_85)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_39_85"
        x1="20"
        y1="0"
        x2="20"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDAD77" />
        <stop offset="1" stopColor="#575037" />
      </linearGradient>
      <clipPath id="clip0_39_85">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const IconePessoas = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <g clipPath="url(#clip0_39_89)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3205 7.00196C19.8672 7.00196 23.57 10.7025 23.57 15.2515V17.6085C23.57 20.1493 22.3915 22.3956 20.579 23.9111C22.54 24.201 24.4822 24.6394 26.3772 25.2569C28.9275 26.0866 30.6411 28.5002 30.6411 31.2603V35.4345L30.0824 35.781C26.9901 37.7043 21.9154 40 15.3205 40C11.679 40 6.15885 39.267 0.55625 35.781L0 35.4345V31.4889C0 28.5591 1.85967 26.0088 4.62444 25.1391C6.40398 24.5828 8.21888 24.1704 10.0479 23.8993C8.24479 22.3838 7.07102 20.1423 7.07102 17.6085V15.2515C7.07102 10.7025 10.7715 7.00196 15.3205 7.00196ZM24.6543 0C29.2009 0 32.9038 3.7005 32.9038 8.24952V10.6065C32.9038 13.1474 31.7253 15.396 29.9127 16.9091C31.8738 17.1991 33.8136 17.6398 35.711 18.255C38.2613 19.0894 39.9748 21.5006 39.9748 24.2606V28.4349L39.4185 28.7814C37.8016 29.7878 35.6308 30.8862 32.9981 31.7135V31.2609C32.9981 27.4756 30.6316 24.1616 27.1079 23.0161C26.341 22.7661 25.5659 22.5421 24.7839 22.3444C25.5287 20.8901 25.927 19.2732 25.927 17.6092V15.2522C25.927 10.0338 22.1346 5.71102 17.1684 4.83185C18.4742 1.98931 21.3262 0 24.6543 0Z"
        fill="url(#paint0_linear_39_89)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_39_89"
        x1="19.9874"
        y1="0"
        x2="19.9874"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDAD77" />
        <stop offset="1" stopColor="#575037" />
      </linearGradient>
      <clipPath id="clip0_39_89">
        <rect width="40" height="40" rx="5" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const IconeCheck = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.6666 20C36.6666 29.2047 29.2046 36.6667 20 36.6667C10.7952 36.6667 3.33331 29.2047 3.33331 20C3.33331 10.7953 10.7952 3.33337 20 3.33337C29.2046 3.33337 36.6666 10.7953 36.6666 20ZM26.7171 14.9495C27.2053 15.4376 27.2053 16.2291 26.7171 16.7172L18.3838 25.0505C17.8956 25.5387 17.1043 25.5387 16.6161 25.0505L13.2828 21.7172C12.7946 21.229 12.7946 20.4377 13.2828 19.9495C13.7709 19.4614 14.5624 19.4614 15.0505 19.9495L17.5 22.3989L21.2246 18.6742L24.9495 14.9495C25.4376 14.4613 26.229 14.4613 26.7171 14.9495Z"
      fill="url(#paint0_linear_39_93)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_39_93"
        x1="20"
        y1="3.33337"
        x2="20"
        y2="36.6667"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDAD77" />
        <stop offset="1" stopColor="#575037" />
      </linearGradient>
    </defs>
  </svg>
);

const IconeQuadro = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      d="M38.369 25.6593C37.5696 24.2732 36.1109 23.4783 34.3673 23.4783C32.5203 23.4783 30.926 22.2398 30.6589 20.5974C30.4888 19.551 30.7661 18.5384 31.4399 17.7461C32.1017 16.968 33.067 16.5217 34.0882 16.5217C36.0058 16.5217 37.5698 15.7149 38.3792 14.3082C39.1444 12.9781 39.1322 11.3131 38.3474 9.96313C34.7762 3.81773 28.1464 0 21.0453 0C16.2263 0 11.7573 1.61984 8.12127 4.68453C4.65994 7.60195 2.28463 11.6223 1.43307 16.0051C0.269318 21.9944 1.79455 28.0892 5.61768 32.7267C9.4283 37.349 15.0512 40 21.0448 40C28.1626 40 34.8005 36.1684 38.3681 30.0005C39.1418 28.6633 39.1421 26.9998 38.369 25.6593ZM6.69697 20C6.69697 17.8423 8.45237 16.087 10.61 16.087C12.7677 16.087 14.5231 17.8423 14.5231 20C14.5231 22.1577 12.7677 23.913 10.61 23.913C8.45237 23.913 6.69697 22.1577 6.69697 20ZM19.2162 30.9933C18.4923 32.2471 17.1741 32.949 15.8208 32.949C15.1573 32.949 14.4856 32.7804 13.8708 32.4254C12.9656 31.9028 12.3182 31.059 12.0476 30.0494C11.7771 29.0398 11.916 27.9853 12.4385 27.0801C12.9611 26.1749 13.8049 25.5275 14.8146 25.257C15.8241 24.9865 16.8786 25.1253 17.7838 25.6479C19.6524 26.7268 20.2949 29.1247 19.2162 30.9933ZM17.7839 14.352C17.181 14.7002 16.5118 14.878 15.8338 14.878C15.4939 14.878 15.1517 14.8334 14.8146 14.743C13.8051 14.4724 12.9613 13.825 12.4386 12.9198C11.916 12.0145 11.7771 10.96 12.0477 9.95047C12.3182 8.94094 12.9656 8.09711 13.8709 7.57445C14.7761 7.0518 15.8307 6.91297 16.8402 7.18352C17.8497 7.45406 18.6935 8.10148 19.2163 9.00672C20.2949 10.8753 19.6524 13.2732 17.7839 14.352ZM22.8734 9.00672C23.396 8.10156 24.2397 7.45414 25.2494 7.18359C26.2591 6.91312 27.3135 7.05195 28.2186 7.57453C30.0872 8.65328 30.7296 11.0512 29.651 12.9198C29.1284 13.8251 28.2846 14.4724 27.2749 14.743C26.9379 14.8334 26.5956 14.8781 26.2558 14.8781C25.5777 14.8781 24.9086 14.7003 24.3056 14.3521C23.4005 13.8295 22.7531 12.9857 22.4825 11.9761C22.2119 10.9663 22.3508 9.9118 22.8734 9.00672ZM28.2187 32.4255C27.6041 32.7804 26.9321 32.9491 26.2688 32.9491C24.9153 32.9491 23.5974 32.2473 22.8735 30.9934C22.3509 30.0881 22.212 29.0336 22.4825 28.0241C22.7531 27.0145 23.4005 26.1707 24.3057 25.648C25.211 25.1254 26.2656 24.9865 27.275 25.2571C28.2846 25.5277 29.1284 26.1751 29.6511 27.0803C30.7298 28.9489 30.0872 31.3468 28.2187 32.4255Z"
      fill="url(#paint0_linear_39_97)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_39_97"
        x1="19.9999"
        y1="0"
        x2="19.9999"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDAD77" />
        <stop offset="1" stopColor="#575037" />
      </linearGradient>
    </defs>
  </svg>
);

const ConhecaCHConstrutora = () => {
  return (
    <SecaoConheca>
      <Conteudo>
        <ColunaImagem>
          <ImagemWrapper>
            <Imagem
              src="/imagens/conheca_ch.png"
              alt="Equipe da CH Construtora trabalhando em um projeto"
            />
          </ImagemWrapper>
        </ColunaImagem>

        <ColunaTexto>
          <Titulo>Conheça a CH Construtora</Titulo>
          <Descricao>
            Desde 2018 no mercado, nós nos dedicamos a entregar projetos
            personalizados de alto padrão. Nossa missão é construir não apenas
            uma casa, mas o lar perfeito para você e sua família.
          </Descricao>

          <MiniSecao>
            <Retangulo>
              <IconeWrapper>
                <IconeTrofeu />
              </IconeWrapper>
              <TextoRetangulo>+6 anos de experiência</TextoRetangulo>
            </Retangulo>

            <Retangulo>
              <IconeWrapper>
                <IconePessoas />
              </IconeWrapper>
              <TextoRetangulo>Equipe especializada</TextoRetangulo>
            </Retangulo>

            <Retangulo>
              <IconeWrapper>
                <IconeCheck />
              </IconeWrapper>
              <TextoRetangulo>Qualidade garantida</TextoRetangulo>
            </Retangulo>

            <Retangulo>
              <IconeWrapper>
                <IconeQuadro />
              </IconeWrapper>
              <TextoRetangulo>Projetos personalizados</TextoRetangulo>
            </Retangulo>
          </MiniSecao>

          <BotaoConhecaMais>Conheça mais</BotaoConhecaMais>
        </ColunaTexto>
      </Conteudo>
    </SecaoConheca>
  );
};

export default ConhecaCHConstrutora;

