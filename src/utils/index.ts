export const formatPrice = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Dish[]) => {
  return items.reduce((acumulator, currentPrice) => {
    return (acumulator += currentPrice.preco)
  }, 0)
}
