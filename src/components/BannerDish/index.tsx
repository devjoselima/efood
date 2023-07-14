import { Restaurants } from '../../pages/Home'
import { Banner, TipoPrato, NomePrato } from './styles'

type Props = {
  infos: Restaurants
}

const BannerDish = ({ infos }: Props) => {
  const { capa, tipo, titulo } = infos

  return (
    <Banner style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <TipoPrato>{tipo}</TipoPrato>
        <NomePrato>{titulo}</NomePrato>
      </div>
    </Banner>
  )
}

export default BannerDish
