class Dish {
  id: number
  image: string
  title: string
  description: string
  infos: string[]
  rating: number

  constructor(
    id: number,
    image: string,
    title: string,
    description: string,
    infos: string[],
    rating: number
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.infos = infos
    this.rating = rating
  }
}

export default Dish
