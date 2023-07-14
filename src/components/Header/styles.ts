import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const FundoHeader = styled.div`
  width: 100%;
  height: 384px;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    height: 320px;
  }
`

export const Logo = styled.img`
  margin: 0 auto;
  display: block;
  padding: 64px 0 138.5px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 64px 0 50px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  width: 539px;
  line-height: 42px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    width: 350px;
    margin-bottom: 32px;
  }
`
