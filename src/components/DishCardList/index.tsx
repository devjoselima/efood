import { Dishes } from '../../pages/Profile'
import DishCard from '../DishCard'
import { ContainerList } from './styles'

export type Props = {
  dishes: Dishes[]
}

const DishCardList = ({ dishes }: Props) => (
  <>
    <ContainerList>
      {dishes.map((item) => (
        <DishCard
          nome={item.nome}
          foto={item.foto}
          descricao={item.descricao}
          porcao={item.porcao}
          id={item.id}
          preco={item.preco}
          key={item.id}
        />
      ))}
    </ContainerList>
  </>
)

export default DishCardList
