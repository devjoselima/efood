import { useDispatch, useSelector } from 'react-redux'

import { add, openCart } from '../../store/reducers/cart'
import {
  openItemModal,
  closeItemModal
} from '../../store/reducers/itemModalSlice'

import { RootReducer } from '../../store'

import { formatPrice } from '../../utils'

import close from '../../assets/fechar.png'

import * as S from './styles'

type Props = {
  dish: Dish
}

const DishCard = ({ dish }: Props) => {
  const dispatch = useDispatch()
  const itemModal = useSelector(
    (state: RootReducer) => state.itemModal[dish.id]
  )

  const { foto, descricao, nome, porcao, preco } = dish

  const OpenCart = () => {
    dispatch(openCart())
  }

  const addToCart = () => {
    dispatch(add(dish))
    OpenCart()
    dispatch(closeItemModal({ itemId: dish.id }))
  }

  const handleModal = () => {
    if (itemModal) {
      dispatch(closeItemModal({ itemId: dish.id }))
    } else {
      dispatch(openItemModal({ itemId: dish.id }))
    }
  }

  const formatDescription = (description: string) => {
    if (description.length > 174) {
      return description.slice(0, 171) + '...'
    }
    return description
  }

  return (
    <>
      <S.Card>
        <img src={foto} alt={nome} />
        <h3>{nome}</h3>
        <p>{formatDescription(descricao)}</p>
        <button onClick={handleModal}>Adicionar ao carrinho</button>
      </S.Card>

      <S.Modal className={itemModal ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <img src={close} alt="fechar modal" onClick={handleModal} />
          </header>
          <main>
            <img src={foto} alt={nome} />
            <div>
              <h3>{nome}</h3>
              <p>{descricao}</p>
              <span>{porcao}</span>
              <button onClick={addToCart}>
                Adicionar ao carrinho - {formatPrice(preco)}
              </button>
            </div>
          </main>
        </S.ModalContent>
        <S.Overlay onClick={handleModal} />
      </S.Modal>
    </>
  )
}

export default DishCard
