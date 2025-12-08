import { SecaoObrasProjetos, ConteudoColunas, Coluna, LinhaIconeTexto, IconeWrapper, TituloColuna, DescricaoColuna, BotaoSaibaMais } from "./Style";

const IconeGuindaste = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <g opacity="0.4" clipPath="url(#clip0_43_181)">
      <path d="M15.2167 37.5667H8.81668V10.4167V2.43335H15.2167V37.5667Z" stroke="#DECB8D" strokeWidth="5.12" strokeMiterlimit="10"/>
      <path d="M2.43335 10.4167H37.5667V8.81668L15.2167 2.43335H8.81668L2.43335 8.81668V10.4167Z" stroke="#DECB8D" strokeWidth="5.12" strokeMiterlimit="10"/>
      <path d="M39.1667 37.5667H0.833344" stroke="#DECB8D" strokeWidth="5.12" strokeMiterlimit="10"/>
      <path d="M34.3667 10.4167V16.0667C34.349 16.6126 34.479 17.1532 34.743 17.6314C35.007 18.1095 35.3952 18.5075 35.8667 18.7834C36.3676 19.0455 36.7901 19.4356 37.0912 19.914C37.3923 20.3924 37.5613 20.9421 37.581 21.507C37.6008 22.072 37.4704 22.6321 37.2034 23.1304C36.9363 23.6286 36.542 24.0472 36.0606 24.3436C35.5793 24.64 35.0279 24.8035 34.4628 24.8176C33.8977 24.8317 33.3389 24.6959 32.8433 24.4239C32.3478 24.1519 31.9331 23.7534 31.6415 23.2691C31.3499 22.7848 31.1918 22.2319 31.1833 21.6667" stroke="#DECB8D" strokeWidth="5.12" strokeMiterlimit="10"/>
      <path d="M15.2167 27.9834L8.81668 34.3834" stroke="#DECB8D" strokeWidth="5.12" strokeMiterlimit="10"/>
      <path d="M8.81668 20L15.2167 26.3833" stroke="#DECB8D" strokeWidth="5.12" strokeMiterlimit="10"/>
      <path d="M15.2167 12.0167L8.81668 18.4" stroke="#DECB8D" strokeWidth="5.12" strokeMiterlimit="10"/>
    </g>
    <defs>
      <clipPath id="clip0_43_181">
        <rect width="40" height="40" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const IconeRoloPintura = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <g opacity="0.4">
      <rect x="6" y="8" width="20" height="8" rx="2" stroke="#DECB8D" strokeWidth="3"/>
      <path d="M26 12H30C31.1046 12 32 12.8954 32 14V18C32 19.1046 31.1046 20 30 20H22" stroke="#DECB8D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 16V26" stroke="#DECB8D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="15" y="26" width="6" height="8" rx="2" stroke="#DECB8D" strokeWidth="3"/>
    </g>
  </svg>
);

const ObrasProjetos = () => {
  return (
    <SecaoObrasProjetos>
      <ConteudoColunas>
        <Coluna>
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
        <Coluna>
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
      <BotaoSaibaMais>
        Saiba mais
      </BotaoSaibaMais>
    </SecaoObrasProjetos>
  );
};

export default ObrasProjetos;
