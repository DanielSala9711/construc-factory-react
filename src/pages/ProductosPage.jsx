import { Link } from 'react-router-dom'
import products from '../data/products'

export default function ProductosPage() {
  return (
    <>
      <section className="product-hero text-center">
        <div className="container">
          <h1 className="product-title">Nuestros Productos</h1>
          <p className="product-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Soluciones profesionales para la protección de tus estructuras
          </p>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="row justify-content-center">
            {products.map((p) => (
              <div key={p.id} className="col-lg-6 col-md-10 mb-5">
                <div className="product-card">
                  <div className="product-card-image">
                    <img src={p.heroImage} alt={p.name} className="img-fluid" style={{ maxHeight: '200px' }} />
                  </div>
                    <div className="product-card-body">
                    <h3 className="product-card-title">{p.name}</h3>
                    <p className="product-card-tagline">{p.tagline}</p>
                    <p className="product-card-desc">{p.description}</p>
                    {p.presentations && (
                      <div className="product-card-prices mb-3">
                        {p.presentations.map(pres => (
                          <span key={pres.label} className="price-tag">
                            {pres.label}: <strong>${pres.price.toLocaleString('es-CO')}</strong>
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="product-card-cta">
                      <Link to={`/${p.slug}`} className="btn btn-corporate btn-buy">
                        <i className="fas fa-info-circle mr-2"></i> Ver Detalles
                      </Link>
                      <a
                        href={p.ctaBuy.url}
                        className="btn btn-corporate btn-advice"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-whatsapp mr-2"></i> Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
