import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [toast, setToast] = useState(null)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3500)
  }, [])

  const addItem = useCallback((product, presentation, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(
        item => item.slug === product.slug && item.presentation.label === presentation.label
      )
      if (existing) {
        return prev.map(item =>
          item.slug === product.slug && item.presentation.label === presentation.label
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, {
        slug: product.slug,
        name: product.name,
        shortName: product.shortName,
        presentation,
        quantity,
        image: product.heroImage,
      }]
    })
  }, [])

  const removeItem = useCallback((slug, presentationLabel) => {
    setItems(prev => prev.filter(
      item => !(item.slug === slug && item.presentation.label === presentationLabel)
    ))
  }, [])

  const updateQuantity = useCallback((slug, presentationLabel, quantity) => {
    if (quantity <= 0) {
      removeItem(slug, presentationLabel)
      return
    }
    setItems(prev => prev.map(item =>
      item.slug === slug && item.presentation.label === presentationLabel
        ? { ...item, quantity }
        : item
    ))
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
    showToast('Carrito vaciado')
  }, [showToast])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.presentation.price * item.quantity, 0)

  const generateWhatsAppMessage = useCallback(() => {
    const lines = items.map((item, i) =>
      `${i + 1}. ${item.name} (${item.presentation.label}) x ${item.quantity} = $${(item.presentation.price * item.quantity).toLocaleString('es-CO')}`
    )
    const total = totalPrice.toLocaleString('es-CO')
    return `🛒 *Nuevo Pedido - Construc Factory*\n\n*Productos:*\n${lines.join('\n')}\n\n*Total: $${total}*\n\n¡Hola! Quiero realizar este pedido.`
  }, [items, totalPrice])

  const value = { items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, generateWhatsAppMessage, showToast }

  return (
    <CartContext.Provider value={value}>
      {children}
      {toast && (
        <div className={`toast-notification toast-${toast.type}`} onClick={() => setToast(null)}>
          <i className={`fas ${toast.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2`}></i>
          {toast.message}
        </div>
      )}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de un CartProvider')
  return context
}
