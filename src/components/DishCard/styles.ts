import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  padding: 8px;
  width: 320px;
  color: ${colors.NavajoWhite};
  margin-bottom: 32px;
  position: relative;

  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }


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
    cursor: pointer;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`
export const ModalContent = styled.div`
  max-width: 960px;
  height: 344px;
  position: relative;
  z-index: 1;
  color: ${colors.white};
  background-color: ${colors.pink};

  header {
    display: flex;
    justify-content: flex-end;

    img {
      margin: 8px;
      cursor: pointer;
    }
  }

  main {
    display: flex;
    padding: 0 32px;

    img {
      height: 280px;
      width: 280px;
      object-fit: cover;
      margin-right: 24px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }

    span {
      display: block;
      font-size: 14px;
      margin: 16px 0;
    }

    button {
      background-color: ${colors.NavajoWhite};
      padding: 4px 8px;
      font-size: 14px;
      border: none;
      color: ${colors.pink};
      font-weight: bold;
      cursor: pointer;
    }
  }
`
