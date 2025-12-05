import styled from "styled-components"

const BannerEstilizado = styled.div`
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), url(${"/imagens/fundo_predio.png"}) lightgray 50% / cover no-repeat;
`

const Filtro = styled.div`
  background: rgba(0, 0, 0, 0.79);
  min-height: 100vh;
`

const BannerTexto = styled.div`
  color: #FFF;
  text-align: center;
  h1{
    padding-top: 8em;
    font-size: 3em;
    margin: 0;
  }
  p{
    font-size: 1.5em;
  }
`

export { BannerEstilizado, Filtro, BannerTexto }