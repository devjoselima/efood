import * as S from './styles'

type Props = {
  infos: Restaurants
}

const BannerDish = ({ infos }: Props) => {
  const { capa, tipo, titulo } = infos

  return (
    <S.Banner style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <S.TipoPrato>{tipo}</S.TipoPrato>
        <S.NomePrato>{titulo}</S.NomePrato>
      </div>
    </S.Banner>
  )
}

export default BannerDish
