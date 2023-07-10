import { useState } from 'react'

import { Card, Modal, ModalContent, Overlay } from './styles'

import close from '../../assets/fechar.png'

import { Dishes } from '../../pages/Profile'

const DishCard = ({ nome, descricao, foto, porcao, preco }: Dishes) => {
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
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
              <button>Adicionar ao carrinho - {formatPrice(preco)}</button>
            </div>
          </main>
        </ModalContent>
        <Overlay onClick={closeModal}></Overlay>
      </Modal>
    </>
  )
}

export default DishCard
