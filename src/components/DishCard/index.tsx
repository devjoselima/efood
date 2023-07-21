import { useDispatch, useSelector } from 'react-redux'

import { add, openCart } from '../../store/reducers/cart'
import { modalClose, modalOpen } from '../../store/reducers/modal'
import { RootReducer } from '../../store'

import close from '../../assets/fechar.png'

import { Card, Modal, ModalContent, Overlay } from './styles'

type Props = {
  dish: Dish
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const DishCard = ({ dish }: Props) => {
  const dispatch = useDispatch()
  const modal = useSelector((state: RootReducer) => state.modal.isVisible)

  const { foto, descricao, nome, porcao, preco } = dish

  const OpenCart = () => {
    dispatch(openCart())
  }

  const addToCart = () => {
    dispatch(add(dish))
    OpenCart()
  }

  const handleModal = () => {
    modal ? dispatch(modalClose()) : dispatch(modalOpen())
  }

  const formatDescription = (description: string) => {
    if (description.length > 174) {
      return description.slice(0, 171) + '...'
    }
    return description
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <h3>{nome}</h3>
        <p>{formatDescription(descricao)}</p>
        <button onClick={() => handleModal()}>Adicionar ao carrinho</button>
      </Card>

      <Modal className={modal ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img src={close} alt="fechar modal" onClick={handleModal} />
          </header>
          <main>
            <img src={foto} />
            <div>
              <h3>{nome}</h3>
              <p>{descricao}</p>
              <span>{porcao}</span>
              <button
                onClick={() => {
                  addToCart()
                  handleModal()
                }}
              >
                Adicionar ao carrinho - {formatPrice(preco)}
              </button>
            </div>
          </main>
        </ModalContent>
        <Overlay onClick={handleModal}></Overlay>
      </Modal>
    </>
  )
}

export default DishCard
