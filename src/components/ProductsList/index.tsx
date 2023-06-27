import Product from '../Product'
import { ContainerProducts } from './styles'
import Dish from '../../models/dishes'

export type Props = {
  dishes: Dish[]
}

const ProductList = ({ dishes }: Props) => (
  <ContainerProducts>
    {dishes.map((dish) => (
      <Product
        key={dish.id}
        title={dish.title}
        image={dish.image}
        description={dish.description}
        infos={dish.infos}
        rating={dish.rating}
      />
    ))}
  </ContainerProducts>
)

export default ProductList
