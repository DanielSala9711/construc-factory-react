import { useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, totalItems, totalPrice, clearCart, generateWhatsAppMessage } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleCheckout = () => {
    const msg = generateWhatsAppMessage()
    window.open(`https://wa.me/573153406167?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'cart-overlay--open' : ''}`} onClick={onClose} />
      <div
        ref={drawerRef}
        className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}
        role="dialog"
        aria-label="Carrito de compras"
      >
        <div className="cart-drawer-header">
          <h5 className="cart-drawer-title">
            <i className="fas fa-shopping-cart mr-2"></i>
            Carrito {totalItems > 0 && <span className="text-muted">({totalItems})</span>}
          </h5>
          <button className="cart-drawer-close" onClick={onClose} aria-label="Cerrar carrito">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer-empty">
            <i className="fas fa-shopping-bag"></i>
            <p>Tu carrito está vacío</p>
            <button className="btn btn-corporate btn-advice" onClick={onClose}>
              Seguir comprando
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer-items">
              {items.map(item => (
                <CartItem key={`${item.slug}-${item.presentation.label}`} item={item} />
              ))}
            </div>

            <div className="cart-drawer-footer">
              <div className="cart-drawer-total">
                <span>Total</span>
                <span className="cart-drawer-total-price">${totalPrice.toLocaleString('es-CO')}</span>
              </div>
              <button className="btn btn-corporate btn-buy btn-block" onClick={handleCheckout}>
                <i className="fab fa-whatsapp mr-2"></i> Enviar pedido por WhatsApp
              </button>
              <button className="btn btn-link btn-sm cart-clear-btn" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
