import banner from '../../assets/background.png'
import { Banner, TipoPrato, NomePrato } from './styles'

const BannerDish = () => (
  <Banner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <TipoPrato>Italiana</TipoPrato>
      <NomePrato>La Dolce Vita Trattoria</NomePrato>
    </div>
  </Banner>
)

export default BannerDish
