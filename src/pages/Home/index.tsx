import ProductList from '../../components/ProductsList'
import Dish from '../../models/dishes'

import imageSushi from '../../assets/refeicao1.png'
import pratoItaliano from '../../assets/refeicao2.png'
import Header from '../../components/Header'

const dishes: Dish[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    description:
      'Peça ja o melhor da culinaria japonesa no conforto da sua casa. Sushis frescos, sashimis deliciosos e pratos quentes irresistiveis. Entrega rápida, embalagens cuidadosas e quantidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    rating: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    image: imageSushi
  },
  {
    id: 2,
    title: 'La dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    infos: ['Italiana'],
    image: pratoItaliano
  },
  {
    id: 3,
    title: 'La dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    infos: ['Italiana'],
    image: pratoItaliano
  },
  {
    id: 4,
    title: 'La dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    rating: 4.6,
    infos: ['Italiana'],
    image: pratoItaliano
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <ProductList dishes={dishes} />
    </div>
  </>
)

export default Home
