import { Restaurants } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { ContainerProducts } from './styles'

export type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <ContainerProducts>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        titulo={restaurant.titulo}
        capa={restaurant.capa}
        descricao={restaurant.descricao}
        tipo={restaurant.tipo}
        avaliacao={restaurant.avaliacao}
        destacado={restaurant.destacado}
        id={restaurant.id}
      />
    ))}
  </ContainerProducts>
)

export default RestaurantList
