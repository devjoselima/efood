import star from '../../assets/estrela.svg'

import * as S from './styles'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <>
    <S.Card>
      <img src={capa} alt={titulo} />
      <S.TagContainer>
        {destacado && <S.Tag>Destaque da semana</S.Tag>}
        <S.Tag>{tipo}</S.Tag>
      </S.TagContainer>
      <S.Content>
        <S.TitleRating>
          <h2>{titulo}</h2>
          <S.ContainerRating>
            <S.Rating>{avaliacao}</S.Rating>
            <img src={star} alt="estrela" />
          </S.ContainerRating>
        </S.TitleRating>
        <S.Description>{descricao}</S.Description>
        <S.Button to={`/Profile/${id}`}>Saiba mais</S.Button>
      </S.Content>
    </S.Card>
  </>
)

export default Restaurant
