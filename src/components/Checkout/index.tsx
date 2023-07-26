import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { closeCheckout } from '../../store/reducers/checkout'
import { clear, openCart } from '../../store/reducers/cart'

import { formatPrice, getTotalPrice } from '../../utils'

import * as S from './styles'

const Checkout = () => {
  const dispatch = useDispatch()
  const [payment, setPayment] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const handleCheckout = () => {
    dispatch(closeCheckout())
    setPayment(false)
  }

  const returnToCart = () => {
    dispatch(closeCheckout())
    dispatch(openCart())
  }

  const form = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
      receiver: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Este campo é obrigatório'),

      address: Yup.string().required('Este campo é obrigatório'),

      city: Yup.string().required('Este campo é obrigatório'),

      cep: Yup.string().required('Este campo é obrigatório'),

      addressNumber: Yup.string().required('Este campo é obrigatório'),

      complement: Yup.string(),

      cardOwner: Yup.string().required('Este campo é obrigatório'),

      cardNumber: Yup.string().required('Este campo é obrigatório'),
      cardCode: Yup.string().required('Este campo é obrigatório'),
      expiresMonth: Yup.string().required('Este campo é obrigatório'),
      expiresYear: Yup.string().required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            addressNumber: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const goToPayment = () => {
    if (
      !form.errors.receiver &&
      form.touched.receiver &&
      !form.errors.address &&
      form.touched.address &&
      !form.errors.city &&
      form.touched.city &&
      !form.errors.cep &&
      form.touched.cep &&
      !form.errors.addressNumber &&
      form.touched.addressNumber
    ) {
      setPayment(true)
    }
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={handleCheckout} />
      <S.SideBar>
        <div className="container">
          <form onSubmit={form.handleSubmit}>
            {payment && !isSuccess && (
              <>
                <h3>
                  Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}
                </h3>
                <S.InputGroup>
                  <label htmlFor="cardOwner">Nome do cartão</label>
                  <input
                    type="text"
                    id="cardOwner"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup maxwidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxwidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Row marginBottom="24px">
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês do vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99/99"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano do vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="99/99"
                    />
                  </S.InputGroup>
                </S.Row>
                <S.Button type="submit">Finalizar pagamento</S.Button>
                <S.Button onClick={() => setPayment(false)}>
                  Voltar para a edição de endereço
                </S.Button>
              </>
            )}
            {!payment && !isSuccess && (
              <>
                <h3>
                  Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}
                </h3>
                <S.InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    type="text"
                    id="receiver"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('receiver') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      type="text"
                      id="cep"
                      name="cep"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99999-999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="addressNumber">Número</label>
                    <input
                      type="text"
                      id="addressNumber"
                      name="addressNumber"
                      value={form.values.addressNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('addressNumber') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.Row>
                <S.InputGroup marginBottom="24px">
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.Button type="submit" onClick={goToPayment}>
                  Continuar para o pagamento
                </S.Button>
                <S.Button type="button" onClick={returnToCart}>
                  Voltar para o carrinho
                </S.Button>
              </>
            )}
          </form>
          {isSuccess && payment && data && (
            <>
              <h3>Pedido realizado = {data.orderId}</h3>
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
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica, Bom apetite!
              </p>
              <S.Button onClick={() => location.reload()}>Concluir</S.Button>
            </>
          )}
        </div>
      </S.SideBar>
    </S.Container>
  )
}

export default Checkout
