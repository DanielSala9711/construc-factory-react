import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function AddToCartButton({ product }) {
  const { addItem, showToast } = useCart()
  const [selectedPres, setSelectedPres] = useState(
    product.presentations[1] || product.presentations[0]
  )
  const [quantity, setQuantity] = useState(1)
  const bestValue = product.presentations[product.presentations.length - 1]
  const savingsPercent = selectedPres.unitPrice && bestValue.unitPrice
    ? Math.round((1 - bestValue.unitPrice / selectedPres.unitPrice) * 100)
    : 0

  const handleAdd = () => {
    addItem(product, selectedPres, quantity)
    showToast(`${product.shortName} (${selectedPres.label}) x ${quantity} agregado al carrito`)
  }

  const handleBuyNow = () => {
    const msg = encodeURIComponent(
      `Hola, quisiera comprar ${product.name} (${selectedPres.label}) x ${quantity}. Precio unitario: $${selectedPres.price.toLocaleString('es-CO')}`
    )
    window.open(`https://wa.me/573153406167?text=${msg}`, '_blank')
  }

  return (
    <div className="add-to-cart-section">
      <div className="pres-selector">
        <label className="pres-label">Presentación:</label>
        <div className="pres-options">
          {product.presentations.map(p => {
            const isBest = p.label === bestValue.label
            return (
              <button
                key={p.label}
                className={`pres-btn ${selectedPres.label === p.label ? 'pres-btn--active' : ''}`}
                onClick={() => setSelectedPres(p)}
              >
                <span className="pres-btn-label">{p.label}</span>
                {isBest && <span className="pres-badge">Mejor valor</span>}
              </button>
            )
          })}
        </div>
      </div>

      <div className="price-row">
        <span className="current-price">${selectedPres.price.toLocaleString('es-CO')}</span>
        {selectedPres.label !== bestValue.label && savingsPercent > 0 && (
          <span className="savings-badge">Ahorras {savingsPercent}% vs {bestValue.label}</span>
        )}
        {quantity > 1 && (
          <span className="total-price">
            Total: ${(selectedPres.price * quantity).toLocaleString('es-CO')}
          </span>
        )}
      </div>

      <div className="qty-row">
        <label className="qty-label">Cantidad:</label>
        <div className="qty-controls">
          <button className="qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
          <span className="qty-value">{quantity}</span>
          <button className="qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
      </div>

      <div className="cart-action-buttons">
        <button className="btn btn-corporate btn-add-cart" onClick={handleAdd}>
          <i className="fas fa-cart-plus mr-2"></i> Agregar al carrito
        </button>
        <button className="btn btn-corporate btn-buy-now" onClick={handleBuyNow}>
          <i className="fab fa-whatsapp mr-2"></i> Comprar ahora
        </button>
      </div>
    </div>
  )
}
