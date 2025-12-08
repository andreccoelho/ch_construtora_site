import { BannerEstilizado, Filtro, BannerTexto, PalavraDestaque, TextoSecundario, BotaoScroll, TextoRole } from "./Style"

const Banner = () => {
  return(
    <BannerEstilizado>
      <Filtro>
        <BannerTexto>
          <h1>
            Construindo seus sonhos com {""}
            <PalavraDestaque>qualidade</PalavraDestaque> e {""}
            <PalavraDestaque>excelência</PalavraDestaque>
          </h1>
          <TextoSecundario>
            Mais de 6 anos transformando projetos em realidade. Especialistas em construção de casas de alto padrão.
          </TextoSecundario>
          <BotaoScroll type="button" aria-label="Role para baixo">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M13.3333 40C13.3333 44.9506 15.3001 49.6989 18.8008 53.1994C22.3014 56.7002 27.0493 58.6664 32 58.6664C36.9506 58.6664 41.6986 56.7002 45.1994 53.1994C48.7 49.6989 50.6666 44.9506 50.6666 40V24C50.6666 19.0493 48.7 14.3014 45.1994 10.8008C41.6986 7.30009 36.9506 5.33331 32 5.33331C27.0493 5.33331 22.3014 7.30009 18.8008 10.8008C15.3001 14.3014 13.3333 19.0493 13.3333 24V40Z" stroke="url(#paint0_linear_38_40)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32 16V37.3333" stroke="url(#paint1_linear_38_40)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M40 29.3333L32 37.3333L24 29.3333" stroke="url(#paint2_linear_38_40)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear_38_40" x1="32" y1="5.33331" x2="32" y2="58.6664" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE99D"/>
                  <stop offset="1" stopColor="#BDAD77"/>
                </linearGradient>
                <linearGradient id="paint1_linear_38_40" x1="32.5" y1="16" x2="32.5" y2="37.3333" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE99D"/>
                  <stop offset="1" stopColor="#BDAD77"/>
                </linearGradient>
                <linearGradient id="paint2_linear_38_40" x1="32" y1="29.3333" x2="32" y2="37.3333" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE99D"/>
                  <stop offset="1" stopColor="#BDAD77"/>
                </linearGradient>
              </defs>
            </svg>
          </BotaoScroll>
          <TextoRole>Role para baixo</TextoRole>
        </BannerTexto>
      </Filtro>
    </BannerEstilizado>
  )
}

export default Banner