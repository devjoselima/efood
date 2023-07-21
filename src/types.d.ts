declare interface Dish {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}

declare type Restaurants = {
  id: number
  titulo: string
  capa: string
  tipo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  cardapio: Dish[]
}
