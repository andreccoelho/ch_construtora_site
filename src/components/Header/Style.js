import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  margin: 0;
  justify-content: space-between;
  img {
    height: 2.5em;
    padding: .3em;
  }
  a {
    text-align: center;
    padding: .3em;
    margin: 0 .7em;
    min-width: 5em;
    background-color: transparent;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    border: 2px solid #fff;
    &:hover{
      background-color: var(--destaque);
      color: var(--secundaria);
      border-color: var(--destaque);
    }
  }
`

export {Top}