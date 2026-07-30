import ProductPage from './ProductPage'
import { getProductBySlug } from '../data/products'

export default function GuardianPage() {
  const product = getProductBySlug('guardian')
  return product ? <ProductPage product={product} /> : null
}
