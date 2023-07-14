import { useDispatch, useSelector } from 'react-redux'

import { close } from '../../store/reducers/cart'

import { Overlay, CartContainer, SideBar, CartItem, Prices } from './styles'
import { RootReducer } from '../../store'

import prato from '../../assets/prato.png'
import trash from '../../assets/lixeira.svg'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar className={isOpen ? 'slideOpen' : 'slideClose'}>
        <ul>
          <CartItem>
            <img src={prato} alt="" />
            <div>
              <h3>Nome do prato</h3>
              <p>60,90</p>
            </div>
            <img src={trash} />
          </CartItem>
        </ul>
        <Prices>
          Valor total <span>R$ 182,70</span>
        </Prices>
        <button>Continuar com a entrega</button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
