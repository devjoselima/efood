import { Link } from 'react-router-dom'

import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'

import * as S from './styles'

const Header = () => (
  <S.FundoHeader style={{ backgroundImage: `url(${fundo})` }}>
    <Link to={'/'}>
      <S.Logo src={logo} alt="efood" />
    </Link>
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.FundoHeader>
)

export default Header
