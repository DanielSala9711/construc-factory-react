import { useRef, Fragment } from 'react'
import AddToCartButton from '../components/AddToCartButton'
import ProductGallery from '../components/ProductGallery'
import SpecsGrid from '../components/SpecsGrid'
import DeliveryOptions from '../components/DeliveryOptions'
import DeliveryBadge from '../components/DeliveryBadge'

export default function ProductPage({ product }) {
  const { colorPrimary } = product
  const docsRef = useRef(null)
  const galleryImages = [product.heroImage, ...(product.cardImages || [])].filter(
    (src, i, arr) => arr.indexOf(src) === i
  )

  const scrollToDocs = () => {
    if (docsRef.current) {
      docsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src={product.logo}
                alt={`${product.name} Logo`}
                className="img-fluid"
                style={{ maxHeight: '150px', filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))' }}
              />
              <h1 className="product-title mt-4">{product.name}</h1>
              <p className="product-subtitle">{product.tagline}</p>
              <p className="lead" style={{ color: '#2F2E2D', fontSize: '1.15rem', lineHeight: 1.9, fontWeight: 400 }}>
                {product.description}
              </p>
              <AddToCartButton product={product} />
              <div className="cta-group mt-3">
                <a
                  href={product.ctaAdvice.url}
                  className="btn btn-corporate btn-advice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-user-tie mr-2"></i> {product.ctaAdvice.text}
                </a>
                <button
                  onClick={scrollToDocs}
                  className="btn btn-corporate btn-docs"
                >
                  <i className="fas fa-file-alt mr-2"></i> Documentos
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <ProductGallery images={galleryImages} />
              <DeliveryBadge />
            </div>
          </div>
        </div>
      </section>

      {product.sections.map((section, i) => {
        switch (section.type) {
          case 'info-columns':
            return (
              <section key={i} className="info-section">
                <div className="container">
                  <div className="row">
                    {section.columns.map((col, j) => (
                      <div key={j} className="col-md-6 mb-4">
                        <div className="info-card" style={j === 1 ? { borderLeftColor: colorPrimary } : {}}>
                          <h2 className="section-heading" style={j === 1 ? { color: colorPrimary } : {}}>
                            {col.title}
                          </h2>
                          <ul className="info-list">
                            {col.items.map((item, k) => (
                              <li key={k} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )

          case 'instructions-specs':
            return (
              <section key={i} ref={docsRef} className="info-section" style={{ backgroundColor: '#f9f9f9' }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <h2 className="section-heading">{section.instructionsTitle}</h2>
                      {section.instructions.map((item, j) => (
                        <div key={j} className="application-step">
                          <div className="step-number">{item.step}</div>
                          <div className="step-content">
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      ))}
                      {section.downloads && (
                        <div className="mt-5">
                          {section.downloads.map((dl, k) => (
                            <a
                              key={k}
                              href={dl.url}
                              className="btn btn-outline-brand mr-3 mb-3"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={`fas ${dl.icon} mr-2`}></i> {dl.text}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="col-lg-5 mt-5 mt-lg-0">
                      <div className="info-card" style={{ backgroundColor: '#fff' }}>
                        <h4>{section.specsTitle}</h4>
                        <SpecsGrid specs={section.specs} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )

          case 'gallery':
              return (
                <Fragment key={i}>
                  <section className="gallery-section">
                    <div className="container">
                    <h2
                      className="section-heading text-center mb-5"
                      style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}
                    >
                      Galería de Proyectos
                    </h2>
                    <div className="gallery-grid">
                      {section.images.map((img, j) => (
                        <div key={j} className="gallery-item">
                          <img src={`/img/${img}`} alt={`Proyecto ${j + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  </section>
                  <DeliveryOptions />
                </Fragment>
              )

          default:
            return null
        }
      })}
    </>
  )
}
