import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeaderProfile = styled.header`
  height: 186px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p:last-child {
    cursor: pointer;
  }
`

export const LogoHeader = styled.img`
  height: 57px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`
