import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { HeaderProfile, LogoHeader } from './styles'

import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'
import { openCart } from '../../store/reducers/cart'

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const OpenCart = () => {
    dispatch(openCart())
  }

  return (
    <HeaderProfile style={{ backgroundImage: `url(${fundo})` }}>
      <p>Restaurantes</p>
      <Link to={'/'}>
        <LogoHeader src={logo} alt="efood" />
      </Link>
      <p onClick={OpenCart}>{items.length} produto(s) no carrinho</p>
    </HeaderProfile>
  )
}

export default ProfileHeader
