import { useEffect, useState } from 'react'

import RestaurantList from '../../components/RestaurantsList'
import Header from '../../components/Header'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  })

  if (!restaurant) <h3>Carregando...</h3>

  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList restaurants={restaurant} />
      </div>
    </>
  )
}

export default Home
