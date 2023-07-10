import { RestaurantsInfos } from '../../pages/Profile'
import { Banner, TipoPrato, NomePrato } from './styles'

type Props = {
  infos: RestaurantsInfos
}

const BannerDish = ({ infos }: Props) => (
  <Banner style={{ backgroundImage: `url(${infos?.capa})` }}>
    <div className="container">
      <TipoPrato>{infos?.tipo}</TipoPrato>
      <NomePrato>{infos?.titulo}</NomePrato>
    </div>
  </Banner>
)

export default BannerDish
