import RestaurantList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

export interface Dish {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  capa: string
  tipo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  cardapio: Dish[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <>
        <Header />
        <div className="container">
          <RestaurantList restaurants={restaurantes} />
        </div>
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home
