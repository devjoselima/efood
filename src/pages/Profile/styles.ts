import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
