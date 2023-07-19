import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles'

const slideOpen = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideClose = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
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

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const ButtonCart = styled.button`
  width: 100%;
  background-color: ${colors.navajoWhite};
  color: ${colors.pink};
  font-weight: bold;
  border: none;
  padding: 4px 0;
  font-size: 14px;
  cursor: pointer;
`

export const SideBar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;

  &.slideOpen {
    animation-name: ${slideOpen};
  }

  &.slideClose {
    animation-name: ${slideClose};
  }
`

export const CartItem = styled.div`
  display: flex;
  background-color: ${colors.navajoWhite};
  width: 100%;
  position: relative;
  padding: 8px;
  margin-top: 16px;

  img:first-child {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  img:last-child {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.div`
  color: ${colors.navajoWhite};
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 40px 0 16px 0;
`
