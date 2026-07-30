import ImageCurtain from '../components/ImageCurtain'

export default function HomePage() {
  return (
    <>
      <ImageCurtain />

      <section className="info-section pb-0" style={{ background: 'linear-gradient(135deg, #180A55 0%, #2F2E2D 100%)', color: 'white' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="text-card">
                <span className="section-subtitle">Bienvenidos a Construc Factory</span>
                <h2 className="section-heading">Líderes en Protección Estructural</h2>
                <p className="lead" style={{ fontSize: '1.15rem', lineHeight: 1.8, fontWeight: 400 }}>
                  En Construc Factory SaS, no solo aplicamos productos; <strong>brindamos soluciones de ingeniería</strong>. Entendemos que las filtraciones y la humedad son enemigos silenciosos de tu infraestructura.
                </p>
                <p className="mb-4">
                  Nuestro enfoque integral combina un diagnóstico preciso, los mejores materiales del mercado (Guardián) y una mano de obra calificada para garantizar resultados que perduran en el tiempo.
                </p>
                <div className="row mt-4">
                  {[
                    { icon: 'fa-check-circle', text: 'Garantía Certificada' },
                    { icon: 'fa-user-shield', text: 'Personal Experto' },
                    { icon: 'fa-tools', text: 'Tecnología Avanzada' },
                    { icon: 'fa-clock', text: 'Cumplimiento' },
                  ].map((item, i) => (
                    <div key={i} className="col-6 mb-3">
                      <div className="d-flex align-items-center">
                        <i className={`fas ${item.icon} mr-3`} style={{ fontSize: '1.5rem' }}></i>
                        <span style={{ fontWeight: 600 }}>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img src="/img/galeria_1.jpg" alt="Impermeabilización Profesional" className="img-fluid rounded shadow-lg" style={{ borderBottom: '5px solid #610A0A' }} width="600" height="400" loading="lazy" />
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: '#180A55', color: 'white', padding: '20px', borderRadius: '4px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                  <div className="text-center">
                    <span className="d-block" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>+10</span>
                    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>Años de<br />Experiencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-subtitle">Nuestro Portafolio</span>
            <h2 className="section-heading mx-auto" style={{ maxWidth: '600px' }}>Servicios Integrales para la Construcción</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>Cubrimos todas las necesidades de tu proyecto con estándares de calidad superiores.</p>
          </div>
          <div className="row">
            {[
              { img: '/img/asesoria_en_proyectos.svg', title: 'Asesoría Técnica', text: 'Evaluación profesional y diagnóstico patológico de estructuras para determinar la solución ideal.' },
              { img: '/img/Contratistas_para_proyectos.svg', title: 'Ejecución de Obras', text: 'Aplicación de sistemas impermeables con personal altamente capacitado y certificado.' },
              { img: '/img/personalizacion_de_productos.svg', title: 'Productos Guardián', text: 'Suministro de los mejores impermeabilizantes del mercado. Calidad y rendimiento asegurado.' },
              { img: '/img/acompañamiento_posventa.svg', title: 'Soporte Posventa', text: 'Seguimiento continuo y mantenimiento preventivo para garantizar la vida útil de nuestros trabajos.' },
            ].map((s, i) => (
              <div key={i} className="col-lg-3 col-md-6 mb-4">
                <div className="service-card">
                  <img src={s.img} alt={s.title} className="service-icon" />
                  <h3 className="service-title">{s.title}</h3>
                  <p className="text-muted">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="container text-center">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h4 style={{ color: '#2F2E2D', fontWeight: 700 }}>Aliados Estratégicos:</h4>
            </div>
            <div className="col-lg-4">
              <img src="/img/Guardian_logo.svg" alt="Guardian Logo" className="img-fluid" style={{ maxHeight: '80px', filter: 'grayscale(100%)', transition: 'filter 0.3s' }} />
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <p className="mb-0 text-muted">Somos distribuidores y aplicadores autorizados, lo que nos permite ofrecer las garantías más amplias del mercado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <span className="section-subtitle">Galería</span>
              <h2 className="section-heading mb-0">Proyectos Recientes</h2>
            </div>
            <a href="/contacto" className="btn-outline-brand d-none d-md-inline-block">Ver más proyectos <i className="fas fa-arrow-right ml-2"></i></a>
          </div>
          <div className="gallery-grid">
            {['galeria_1.jpg', 'galeria_2.jpg', 'galeria_3.jpg', 'galeria_4.jpg'].map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={`/img/${img}`} alt={`Proyecto Impermeabilización ${i + 1}`} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4 d-md-none">
            <a href="/contacto" className="btn-outline-brand">Ver más proyectos <i className="fas fa-arrow-right ml-2"></i></a>
          </div>
        </div>
      </section>

      <section style={{ background: '#180A55', padding: '80px 0', color: 'white' }}>
        <div className="container text-center">
          <h2 style={{ fontWeight: 800, textTransform: 'uppercase', marginBottom: '20px' }}>¿Problemas de Humedad?</h2>
          <p className="lead mb-5" style={{ maxWidth: '800px', margin: '0 auto 30px auto' }}>No dejes que el agua deteriore tu inversión. Agenda una visita técnica hoy mismo y recibe un diagnóstico profesional sin compromiso.</p>
          <div className="cta-group justify-content-center">
            <a href="https://wa.me/573153406167" target="_blank" rel="noopener noreferrer" className="btn btn-corporate btn-buy" style={{ background: '#25D366', border: 'none' }}>
              <i className="fab fa-whatsapp mr-2"></i> Escribir al WhatsApp
            </a>
            <a href="/contacto" className="btn btn-corporate btn-buy" style={{ background: '#fff', color: '#180A55' }}>
              <i className="fas fa-envelope mr-2"></i> Cotizar Ahora
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
