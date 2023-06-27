import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  padding: 8px;
  width: 320px;
  color: ${colors.NavajoWhite};
  margin-bottom: 32px;

  h3 {
    margin 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;  
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    background-color: ${colors.NavajoWhite};
    border: none;
    color: ${colors.pink};
    font-weight: bold;
    padding: 4px 0;
  }
`
