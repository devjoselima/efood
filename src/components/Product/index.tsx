import star from '../../assets/estrela.svg'

import * as S from './styles'

type Props = {
  title: string
  image: string
  description: string
  infos: string[]
  rating: number
}

const Product = ({ title, image, description, infos, rating }: Props) => (
  <>
    <S.Card>
      <img src={image} alt={title} />
      <S.TagContainer>
        {infos.map((info) => (
          <>
            <S.Tag>{info}</S.Tag>
          </>
        ))}
      </S.TagContainer>
      <S.Content>
        <S.TitleRating>
          <h2>{title}</h2>
          <S.ContainerRating>
            <S.Rating>{rating}</S.Rating>
            <img src={star} alt="estrela" />
          </S.ContainerRating>
        </S.TitleRating>
        <S.Description>{description}</S.Description>
        <S.Button to={'/Profile'}>Saiba mais</S.Button>
      </S.Content>
    </S.Card>
  </>
)

export default Product
