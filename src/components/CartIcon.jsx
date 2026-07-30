import { useCart } from '../context/CartContext'

export default function CartIcon({ onClick }) {
  const { totalItems } = useCart()

  return (
    <button className="cart-icon-btn" onClick={onClick} aria-label="Abrir carrito">
      <i className="fas fa-shopping-cart"></i>
      {totalItems > 0 && (
        <span className="cart-badge">{totalItems > 99 ? '99+' : totalItems}</span>
      )}
    </button>
  )
}
