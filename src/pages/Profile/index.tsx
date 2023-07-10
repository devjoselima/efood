import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BannerDish from '../../components/BannerDish'
import DishCardList from '../../components/DishCardList'
import ProfileHeader from '../../components/ProfileHeader'

export type Dishes = {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}

export type RestaurantsInfos = {
  capa: string
  titulo: string
  tipo: string
}

const Profile = () => {
  const { id } = useParams()
  const [dish, setDish] = useState<Dishes[]>([])
  const [restaurantInfos, setRestaurantInfos] = useState<RestaurantsInfos>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDish(res.cardapio)
        setRestaurantInfos(res)
      })
  }, [id])

  if (!dish) <h3>carregando...</h3>

  return (
    <>
      <ProfileHeader />
      {restaurantInfos && <BannerDish infos={restaurantInfos} />}
      <div className="container">
        <DishCardList dishes={dish} />
      </div>
    </>
  )
}

export default Profile
