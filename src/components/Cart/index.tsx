import { useDispatch, useSelector } from 'react-redux'

import { closeCart, remove } from '../../store/reducers/cart'
import { openCheckout } from '../../store/reducers/checkout'
import { RootReducer } from '../../store'

import { formatPrice, getTotalPrice } from '../../utils'

import trash from '../../assets/lixeira.svg'

import * as S from './styles'

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

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={CloseCart} />
      <S.SideBar className={isOpen ? 'slideOpen' : 'slideClose'}>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formatPrice(item.preco)}</span>
                  </div>
                  <img
                    src={trash}
                    alt="lixeira"
                    onClick={() => removeFromCart(item.id)}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              Valor total <span>{formatPrice(getTotalPrice(items))}</span>
            </S.Prices>
            <S.ButtonCart onClick={openCheck}>
              Continuar com a entrega
            </S.ButtonCart>
          </>
        ) : (
          <p>
            O carrinho está vazio, adicione um produto para continuar a compra
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
