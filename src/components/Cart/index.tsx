import { useDispatch, useSelector } from 'react-redux'

import { closeCart, remove } from '../../store/reducers/cart'
import { openCheckout } from '../../store/reducers/checkout'

import {
  Overlay,
  CartContainer,
  SideBar,
  CartItem,
  Prices,
  ButtonCart
} from './styles'
import { RootReducer } from '../../store'

import { formatPrice } from '../DishCard'

import trash from '../../assets/lixeira.svg'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const CloseCart = () => {
    dispatch(closeCart())
  }

  const openCheck = () => {
    dispatch(openCheckout())
    dispatch(closeCart())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulator, currentPrice) => {
      return (acumulator += currentPrice.preco)
    }, 0)
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseCart} />
      <SideBar className={isOpen ? 'slideOpen' : 'slideClose'}>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <img
                src={trash}
                alt="lixeira"
                onClick={() => removeFromCart(item.id)}
              />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total <span>{formatPrice(getTotalPrice())}</span>
        </Prices>
        <ButtonCart onClick={openCheck}>Continuar com a entrega</ButtonCart>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
