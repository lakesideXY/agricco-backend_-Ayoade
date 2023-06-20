export interface IProduct{
  name: string,
  price: number,
  category: string,
  isInStock: string,
  isFeatured: string,
}

export interface IDiscountedProduct{
  name: string,
  normalPrice: number,
  discountedPrice: number,
  category: string,
  isInStock: string,
}
