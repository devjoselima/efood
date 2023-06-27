import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'

import { FundoFooter, Logo, RedesSociais, TextoFooter } from './styles'

const Footer = () => (
  <FundoFooter style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <RedesSociais>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </RedesSociais>
      <TextoFooter>
        A efood é uma plataforma para divulgação de estabelicementos, a
        responsabilidade pela entrega,qualidade dos produtos é toda do
        estabelicimento contratado
      </TextoFooter>
    </div>
  </FundoFooter>
)

export default Footer
