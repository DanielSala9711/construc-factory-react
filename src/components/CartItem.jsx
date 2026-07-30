import { useCart } from '../context/CartContext'

export default function CartItem({ item }) {
  const { updateQuantity, removeItem, showToast } = useCart()
  const subtotal = item.presentation.price * item.quantity

  const handleRemove = () => {
    removeItem(item.slug, item.presentation.label)
    showToast(`${item.shortName} (${item.presentation.label}) eliminado del carrito`, 'info')
  }

  return (
    <div className="cart-item-row">
      <img src={item.image} alt={item.shortName} className="cart-item-img" />
      <div className="cart-item-details">
        <p className="cart-item-name">{item.shortName}</p>
        <p className="cart-item-variant">{item.presentation.label}</p>
        <p className="cart-item-subtotal">${subtotal.toLocaleString('es-CO')}</p>
      </div>
      <div className="cart-item-actions">
        <div className="cart-qty-controls">
          <button
            className="cart-qty-btn"
            onClick={() => updateQuantity(item.slug, item.presentation.label, item.quantity - 1)}
          >
            −
          </button>
          <span className="cart-qty-value">{item.quantity}</span>
          <button
            className="cart-qty-btn"
            onClick={() => updateQuantity(item.slug, item.presentation.label, item.quantity + 1)}
          >
            +
          </button>
        </div>
        <button className="cart-item-remove" onClick={handleRemove} title="Eliminar">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}
