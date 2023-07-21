import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { openCart } from '../../store/reducers/cart'

import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'

import * as S from './styles'

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const OpenCart = () => {
    dispatch(openCart())
  }

  return (
    <S.HeaderProfile style={{ backgroundImage: `url(${fundo})` }}>
      <p>Restaurantes</p>
      <Link to={'/'}>
        <S.LogoHeader src={logo} alt="efood" />
      </Link>
      <p onClick={OpenCart}>{items.length} produto(s) no carrinho</p>
    </S.HeaderProfile>
  )
}

export default ProfileHeader
