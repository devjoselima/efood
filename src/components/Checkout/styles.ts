import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonCart } from '../Cart/styles'

type InputGroupProps = {
  maxwidth?: string
  marginBottom?: string
}

type RowProps = {
  marginBottom?: string
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${colors.white};

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const SideBar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;

  h3 {
    margin-bottom: 16px;
    color: ${colors.navajoWhite};
  }

  p {
    margin-bottom: 16px;
  }
`
export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 30px;

  margin-bottom: ${(props) => props.marginBottom || '8px'};
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  justify-content: space-between;
  margin-bottom: 8px;

  max-width: ${(props) => props.maxwidth || 'auto'};
  margin-bottom: ${(props) => props.marginBottom || '8px'};

  label {
    display: block;
    color: ${colors.navajoWhite};
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    outline: none;
    padding: 0 8px;
    border: 1px solid ${colors.pink};
    width: 100%;
    color: ${colors.gray};
    font-weight: bold;
  }
`
export const Button = styled(ButtonCart)`
  margin-bottom: 8px;
`
