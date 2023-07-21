import { useParams } from 'react-router-dom'
import BannerDish from '../../components/BannerDish'

import ProfileHeader from '../../components/ProfileHeader'
import { useGetDishesQuery } from '../../services/api'

import DishCard from '../../components/DishCard'

import { ContainerList } from './styles'

type DishParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as DishParams
  const { data: dish } = useGetDishesQuery(id)

  if (!dish) {
    return <h3>Carregando...</h3>
  }

  const renderBannerDish = () => {
    if (dish) {
      return <BannerDish infos={dish} />
    }
    return null
  }

  return (
    <>
      <ProfileHeader />
      {renderBannerDish()}
      <div className="container">
        <ContainerList>
          {dish?.cardapio.map((dish: Dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </ContainerList>
      </div>
    </>
  )
}

export default Profile
