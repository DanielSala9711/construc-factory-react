export default function DeliveryOptions() {
  const options = [
    {
      icon: 'fa-store',
      title: 'Recoger en Tienda',
      description: 'Visítanos en nuestra tienda en Sogamoso y recoge tu pedido sin costo adicional.',
      detail: 'Carrera 11 # 6-68 sur, Sogamoso',
      badge: 'Gratis',
      badgeColor: '#27AE60',
    },
    {
      icon: 'fa-shipping-fast',
      title: 'Envíos Nacionales',
      description: 'Realizamos envíos a todo Colombia a través de empresas de mensajería autorizadas.',
      detail: 'Tiempo estimado: 2-5 días hábiles',
      badge: 'Aplica tarifa',
      badgeColor: '#610A0A',
    },
  ]

  return (
    <section className="delivery-section">
      <div className="container">
        <h2 className="section-heading" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', textAlign: 'center' }}>
          <i className="fas fa-truck mr-3"></i> Opciones de Entrega
        </h2>
        <div className="row justify-content-center">
          {options.map((opt, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="delivery-card">
                <div className="delivery-icon">
                  <i className={`fas ${opt.icon}`}></i>
                </div>
                <h5 className="delivery-title">{opt.title}</h5>
                <p className="delivery-desc">{opt.description}</p>
                <p className="delivery-detail">
                  <i className="fas fa-info-circle mr-1"></i> {opt.detail}
                </p>
                <span className="delivery-badge" style={{ backgroundColor: opt.badgeColor }}>{opt.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
