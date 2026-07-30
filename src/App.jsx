import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GuardianPage from './pages/GuardianPage'
import ProductPage from './pages/ProductPage'
import ProductosPage from './pages/ProductosPage'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'
import { getProductBySlug } from './data/products'

function App() {
  const capilarProduct = getProductBySlug('guardian-capilar')

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/guardian" element={<GuardianPage />} />
        <Route path="/guardian-capilar" element={capilarProduct ? <ProductPage product={capilarProduct} /> : null} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Route>
    </Routes>
  )
}

export default App
