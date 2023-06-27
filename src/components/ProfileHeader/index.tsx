import { HeaderProfile, LogoHeader } from './styles'

import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'

const ProfileHeader = () => (
  <HeaderProfile style={{ backgroundImage: `url(${fundo})` }}>
    <p>Restaurantes</p>
    <LogoHeader src={logo} alt="efood" />
    <p>0 produto(s) no carrinho</p>
  </HeaderProfile>
)

export default ProfileHeader
