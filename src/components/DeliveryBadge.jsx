export default function DeliveryBadge() {
  return (
    <div className="delivery-badge-bar">
      <span className="delivery-badge-item">
        <i className="fas fa-store"></i>
        <span>Recoger en tienda <strong>Gratis</strong></span>
      </span>
      <span className="delivery-badge-sep"></span>
      <span className="delivery-badge-item">
        <i className="fas fa-shipping-fast"></i>
        <span>Envíos nacionales <strong>2-5 días</strong></span>
      </span>
    </div>
  )
}
