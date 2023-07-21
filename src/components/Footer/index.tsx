import fundo from '../../assets/fundo.png'
import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.FundoFooter style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <S.Logo src={logo} alt="efood" />
      <S.RedesSociais>
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </S.RedesSociais>
      <S.TextoFooter>
        A efood é uma plataforma para divulgação de estabelicementos, a
        responsabilidade pela entrega,qualidade dos produtos é toda do
        estabelicimento contratado
      </S.TextoFooter>
    </div>
  </S.FundoFooter>
)

export default Footer
