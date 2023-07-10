import { Link } from 'react-router-dom'
import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'

import { FundoHeader, Logo, Title } from './styles'

const Header = () => (
  <FundoHeader style={{ backgroundImage: `url(${fundo})` }}>
    <Link to={'/'}>
      <Logo src={logo} alt="efood" />
    </Link>
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </FundoHeader>
)

export default Header
