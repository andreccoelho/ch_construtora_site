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
  font-family: "Alata", sans-serif;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    padding-top: 4em;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    max-width: 57rem;
    margin-left: auto;
    margin-right: auto;
  }
`

const PalavraDestaque = styled.span`
  color: #BDAD77;
  font-family: "Alata", sans-serif;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`

const TextoSecundario = styled.p`
  margin-top: 2rem;
  color: #D2D2D2;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  max-width: 57rem;
  margin-left: auto;
  margin-right: auto;
`

const BotaoContato = styled.button`
  margin-top: 2.99rem;
  width: 14rem;
  height: 2.875rem;
  border-radius: 0.9375rem;
  background: linear-gradient(180deg, #BDAD77 0%, #575037 100%);
  color: #FFF;
  font-family: Alata;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`

const BotaoScroll = styled.button`
  margin-top: 7.56rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`

const TextoRole = styled.p`
  margin-top: 1.5rem;
  color: #BDAD77;
  text-align: center;
  font-family: "Alata", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`

export { BannerEstilizado, Filtro, BannerTexto, PalavraDestaque, TextoSecundario, BotaoScroll, TextoRole, BotaoContato }