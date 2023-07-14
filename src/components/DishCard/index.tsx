import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { Card, Modal, ModalContent, Overlay } from './styles'

import close from '../../assets/fechar.png'

import { Dish } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

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
  const { foto, descricao, nome, porcao, preco } = dish

  const openCart = () => {
    dispatch(open())
  }

  const addToCart = () => {
    dispatch(add(dish))
    openCart()
  }

  const [modal, setModal] = useState({
    isVisible: false
  })

  const closeModal = () => {
    setModal({ isVisible: false })
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
        <button onClick={() => setModal({ isVisible: true })}>
          Adicionar ao carrinho
        </button>
      </Card>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img src={close} alt="fechar modal" onClick={closeModal} />
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
                  closeModal()
                }}
              >
                Adicionar ao carrinho - {formatPrice(preco)}
              </button>
            </div>
          </main>
        </ModalContent>
        <Overlay onClick={closeModal}></Overlay>
      </Modal>
    </>
  )
}

export default DishCard
