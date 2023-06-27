import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'

import { FundoHeader, Logo, Title } from './styles'

const Header = () => (
  <FundoHeader style={{ backgroundImage: `url(${fundo})` }}>
    <Logo src={logo} alt="efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </FundoHeader>
)

export default Header
