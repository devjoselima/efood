import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  pink: '#E66767',
  background: '#FFF8F2',
  NavajoWhite: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  body{
    background-color: ${colors.background};
    color: ${colors.pink};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
