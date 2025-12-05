import { BannerEstilizado, Filtro, BannerTexto } from "./Style"

const Banner = () => {
  return(
    <BannerEstilizado>
      <Filtro>
        <BannerTexto>
          <h1>CH Construtora</h1>
          <p>Fazendo o seu sonho virar realidade</p>
        </BannerTexto>
      </Filtro>
    </BannerEstilizado>
  )
}

export default Banner