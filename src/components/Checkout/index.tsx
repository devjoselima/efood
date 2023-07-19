import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonCart } from '../Cart/styles'

import * as S from './styles'
import { RootReducer } from '../../store'
import { closeCheckout } from '../../store/reducers/checkout'
import { openCart } from '../../store/reducers/cart'

const Checkout = () => {
  const dispatch = useDispatch()
  const [payment, setPayment] = useState(false)
  const [order, setOrder] = useState(false)
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)

  const handleCheckout = () => {
    dispatch(closeCheckout())
  }

  const returnToCart = () => {
    dispatch(closeCheckout())
    dispatch(openCart())
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={handleCheckout} />
      <S.SideBar>
        <div className="container">
          {payment && (
            <>
              <h3>Pagamento - Valor a pagar R$ 190,90</h3>
              <S.InputGroup>
                <label htmlFor="cardOwner">Nome do cartão</label>
                <input type="text" id="cardOwner" />
              </S.InputGroup>
              <S.Row>
                <S.InputGroup maxwidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" id="cardNumber" />
                </S.InputGroup>
                <S.InputGroup maxwidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <input type="text" id="cardCode" />
                </S.InputGroup>
              </S.Row>
              <S.Row marginBottom="24px">
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês do vencimento</label>
                  <input type="text" id="expiresMonth" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano do vencimento</label>
                  <input type="text" id="expiresYear" />
                </S.InputGroup>
              </S.Row>
              <S.Button
                onClick={() => {
                  setOrder(true)
                  setPayment(false)
                }}
              >
                Finalizar pagamento
              </S.Button>
              <S.Button onClick={() => setPayment(false)}>
                Voltar para a edição de endereço
              </S.Button>
            </>
          )}
          {!order && !payment && (
            <>
              <h3>Pagamento - Valor a pagar R$ 190,90</h3>
              <S.InputGroup>
                <label htmlFor="addressee">Quem irá receber</label>
                <input type="text" id="addressee" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="address">Endereço</label>
                <input type="text" id="address" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" />
              </S.InputGroup>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <input type="text" id="cep" />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="addressNumber">Número</label>
                  <input type="text" id="addressNumber" />
                </S.InputGroup>
              </S.Row>
              <S.InputGroup marginBottom="24px">
                <label htmlFor="complement">Complemento (opcional)</label>
                <input type="text" id="complement" />
              </S.InputGroup>
              <S.Button onClick={() => setPayment(true)}>
                Continuar para o pagamento
              </S.Button>
              <S.Button onClick={returnToCart}>Voltar para o carrinho</S.Button>
            </>
          )}
          {order && !payment && (
            <>
              <h3>Pedido realizado = Order_id</h3>
              <p>
                Estamos muito felizes em informar que seu pedido já está em
                processo de preparação e, em breve, será entregue no endereço
                fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua seguranã e bem-estar
                durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica, Bom apetite!
              </p>
              <S.Button onClick={() => setOrder(false)}>
                Voltar ao carrinho
              </S.Button>
            </>
          )}
        </div>
      </S.SideBar>
    </S.Container>
  )
}

export default Checkout
