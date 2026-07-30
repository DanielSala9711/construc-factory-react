export default function GuardianPage() {
  return (
    <>
      <section className="product-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img src="/img/Guardian_logo.svg" alt="Guardian Logo" className="img-fluid" style={{ maxHeight: '350px', filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))' }} />
              <h1 className="product-title mt-4">Guardián</h1>
              <p className="product-subtitle">Hidrófugo Invisible de Alta Penetración</p>
              <p className="lead" style={{ color: '#2F2E2D', fontSize: '1.15rem', lineHeight: 1.9, fontWeight: 400 }}>
                Protección definitiva para fachadas, muros y techos. Nuestra tecnología hidrofóbica avanzada crea una barrera impenetrable contra la humedad sin alterar la belleza natural de sus superficies.
              </p>
              <div className="cta-group">
                <a href="https://wa.me/573153406167?text=Hola,%20quisiera%20comprar%20el%20impermeabilizante%20Guardian" className="btn btn-corporate btn-buy" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-shopping-cart mr-2"></i> Comprar Ahora
                </a>
                <a href="https://wa.me/573153406167?text=Hola,%20necesito%20asesoria%20tecnica%20sobre%20Guardian" className="btn btn-corporate btn-advice" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-user-tie mr-2"></i> Solicitar Asesoría
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img src="/img/presentacion.png" alt="Guardián Presentación" className="img-fluid" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))', position: 'relative', zIndex: 10 }} />
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="info-card">
                <h2 className="section-heading">Ventajas</h2>
                <ul className="info-list">
                  <li><strong>Rendimiento Superior:</strong> Cubre de 28 a 32 m² por galón con una sola aplicación.</li>
                  <li><strong>Totalmente Invisible:</strong> Acabado mate sin brillo. Mantiene el aspecto original.</li>
                  <li><strong>Acción Rápida:</strong> Secado al tacto en solo 2 horas.</li>
                  <li><strong>Máxima Durabilidad:</strong> Hasta 7 años de protección garantizada.</li>
                  <li><strong>Versatilidad:</strong> Aplicable con aspersor, brocha o rodillo.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="info-card" style={{ borderLeftColor: '#610A0A' }}>
                <h2 className="section-heading" style={{ color: '#610A0A' }}>Acción Química</h2>
                <ul className="info-list">
                  <li>Barrera molecular que repele el agua por tensión superficial.</li>
                  <li>Impide la proliferación de microorganismos (hongos y moho).</li>
                  <li>Anula la absorción capilar en materiales porosos.</li>
                  <li>Protege contra la carbonatación y eflorescencias salinas.</li>
                  <li>Mantiene la transpirabilidad natural del sustrato.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section bg-light" style={{ backgroundColor: '#f9f9f9 !important' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="section-heading">Instrucciones de Uso</h2>
              {[
                { step: '01', title: 'Saneamiento', text: 'Asegúrese de que la superficie esté estructuralmente sana, limpia, seca y libre de cualquier contaminante.' },
                { step: '02', title: 'Aplicación Técnica', text: 'Aplique una capa saturante de forma uniforme. En superficies muy porosas, aplique una segunda capa "húmedo sobre húmedo".' },
                { step: '03', title: 'Protección Final', text: 'Proteja de la lluvia durante las primeras 4 horas. La efectividad total se alcanza tras 24 horas.' },
              ].map((item, i) => (
                <div key={i} className="application-step">
                  <div className="step-number">{item.step}</div>
                  <div className="step-content">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
              <div className="mt-5">
                <a href="/docs/Guardian_Ficha_técnica.pdf" className="btn btn-outline-brand mr-3 mb-3" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-file-pdf mr-2"></i> Descargar Ficha Técnica
                </a>
                <a href="/docs/Guardian_Ficha_Tecnica.pdf" className="btn btn-outline-brand mb-3" target="_blank" rel="noopener noreferrer" style={{ borderColor: '#610A0A', color: '#610A0A' }}>
                  <i className="fas fa-shield-alt mr-2"></i> Hoja de Seguridad
                </a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="info-card" style={{ backgroundColor: '#fff' }}>
                <h4>Especificaciones</h4>
                <table className="table feature-table mt-4">
                  <tbody>
                    <tr><td className="feature-label">Base Química</td><td>Siloxanos en solvente</td></tr>
                    <tr><td className="feature-label">Densidad</td><td>0.80 ± 0.05 kg/L</td></tr>
                    <tr><td className="feature-label">Acabado</td><td>Transparente / Mate</td></tr>
                    <tr><td className="feature-label">Vida Útil</td><td>7 Años</td></tr>
                    <tr><td className="feature-label">Presentación</td><td>1L, 4L, 20L</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-heading text-center mb-5" style={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>Galería de Proyectos</h2>
          <div className="gallery-grid">
            {['galeria_1.jpg', 'galeria_2.jpg', 'galeria_3.jpg', 'galeria_4.jpg'].map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={`/img/${img}`} alt={`Proyecto ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
