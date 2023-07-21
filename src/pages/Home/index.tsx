import RestaurantList from '../../components/RestaurantsList'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

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

  return (
    <>
      <Header />
      <h3>Carregando...</h3>
    </>
  )
}

export default Home
