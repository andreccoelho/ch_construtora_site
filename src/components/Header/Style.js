import styled from "styled-components"

const Top = styled.header`
  padding: 1.5em 2.5em;
  position: absolute;
  top: 0.69rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  margin: 0;

  justify-content: space-between;
  align-items: center;

  img {
    height: 3.5em;
    padding: 0.5em 0.3em;
  }

  nav {
    display: flex;
    gap: 2.88rem;
  }

  a {
    color: #FFF;
    font-family: Alata;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;

    &.active {
      color: #BDAD77;
      text-decoration-line: underline;
    }

    &:hover {
      color: #BDAD77;
      text-decoration-line: underline;
    }
  }
`

export {Top}