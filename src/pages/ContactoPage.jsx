import ContactForm from '../components/ContactForm'

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/img/diagoona-bg-3.jpg)' }}>
        <div className="container">
          <h1>Contáctanos</h1>
          <p className="lead" style={{ color: '#ddd' }}>Estamos listos para atender tus requerimientos.</p>
        </div>
      </section>

      <section className="info-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5">
              <div className="contact-info-box">
                <h3 className="mb-4" style={{ color: '#180A55', fontWeight: 700 }}>Información Directa</h3>
                <p className="mb-4 text-muted">Visítanos en nuestra sede o comunícate a través de nuestros canales oficiales.</p>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <h5 className="font-weight-bold mb-1">Ubicación</h5>
                    <p className="mb-0 text-muted">Carrera 11 # 6-68 sur<br />Sogamoso, Boyacá, Colombia</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-phone"></i></div>
                  <div>
                    <h5 className="font-weight-bold mb-1">Teléfono / WhatsApp</h5>
                    <p className="mb-0"><a href="tel:+573153406167" className="text-muted">(+57) 315 3406167</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-envelope"></i></div>
                  <div>
                    <h5 className="font-weight-bold mb-1">Correo Electrónico</h5>
                    <p className="mb-0"><a href="mailto:construc.factory.sogamoso@gmail.com" className="text-muted" style={{ wordBreak: 'break-all' }}>construc.factory.sogamoso@gmail.com</a></p>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="font-weight-bold mb-3">Síguenos:</h5>
                  <div className="social-links" style={{ fontSize: '1.5rem' }}>
                    <a href="https://web.facebook.com/profile.php?id=61576737224179" target="_blank" rel="noopener noreferrer" className="mr-3" style={{ color: '#180A55' }}><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/construc.factory/" target="_blank" rel="noopener noreferrer" className="mr-3" style={{ color: '#180A55' }}><i className="fab fa-instagram"></i></a>
                    <a href="https://www.tiktok.com/@construc.factory" target="_blank" rel="noopener noreferrer" className="mr-3" style={{ color: '#180A55' }}><i className="fab fa-tiktok"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 mb-5">
              <div className="bg-white p-4 p-lg-5 rounded shadow-sm border h-100">
                <h3 className="mb-4" style={{ color: '#180A55', fontWeight: 700 }}>Envíanos un Mensaje</h3>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h3 className="mb-4" style={{ color: '#180A55', fontWeight: 700 }}>Nuestra Ubicación</h3>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d573.2944079896225!2d-72.94039145432869!3d5.698060915397174!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sco!4v1753144176632!5m2!1ses!2sco" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Construc Factory"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
