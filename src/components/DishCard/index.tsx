import prato from '../../assets/prato.png'
import { Card } from './styles'

const DishCard = () => (
  <Card>
    <img src={prato} alt="Pizza marguerita" />
    <h3>Pizza Marguerita</h3>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretia,
      manjericão fresco e um toque de azeite. Sabor e simplicidade
    </p>
    <button>Adicionar ao carrinho</button>
  </Card>
)

export default DishCard
