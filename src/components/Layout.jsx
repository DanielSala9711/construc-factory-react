import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import WhatsAppFloat from './WhatsAppFloat'
import CartIcon from './CartIcon'
import CartDrawer from './CartDrawer'
import products from '../data/products'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="tm-container">
      <ScrollToTop />
      <header className="container pt-4 mb-4">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 text-center text-md-left">
            <Link to="/" className="tm-site-header d-inline-block">
              <img src="/img/Conturc_factory_Logotipo_blanco.svg" alt="Construc Factory Logo" style={{ height: '90px' }} width="180" height="90" />
            </Link>
          </div>
          <div className="col-lg-8 col-md-6">
            <nav className="navbar navbar-expand-lg" id="tm-main-nav">
              <button
                className="navbar-toggler toggler-example mr-0 ml-auto"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="navbar-nav"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                style={{ borderColor: '#610A0A' }}
              >
                  <span style={{ color: '#610A0A' }}><i className="fas fa-bars"></i></span>
                </button>
                <CartIcon onClick={() => setCartOpen(true)} />
              <div className={`collapse navbar-collapse tm-nav ${isOpen ? 'show' : ''}`} id="navbar-nav">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li
                    className={`nav-item dropdown ${productsOpen ? 'show' : ''}`}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <span
                      className={`nav-link tm-nav-link dropdown-toggle ${pathname === '/productos' || products.map(p => p.slug).some(s => pathname.includes(s)) ? 'active' : ''}`}
                      onClick={() => setProductsOpen(!productsOpen)}
                      style={{ cursor: 'pointer' }}
                    >
                      Productos
                    </span>
                    <div className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
                      <Link
                        className={`dropdown-item ${pathname === '/productos' ? 'active' : ''}`}
                        to="/productos"
                        onClick={() => { setIsOpen(false); setProductsOpen(false) }}
                      >
                        <i className="fas fa-th mr-2"></i> Todos los Productos
                      </Link>
                      <div className="dropdown-divider"></div>
                      {products.map((p) => (
                        <Link
                          key={p.slug}
                          className={`dropdown-item ${pathname.includes(p.slug) ? 'active' : ''}`}
                          to={`/${p.slug}`}
                          onClick={() => { setIsOpen(false); setProductsOpen(false) }}
                        >
                          {p.shortName}
                        </Link>
                      ))}
                    </div>
                  </li>
                  {links.map((link) => (
                    <li key={link.to} className={`nav-item ${pathname === link.to ? 'active' : ''}`}>
                      <Link className="nav-link tm-nav-link" to={link.to} onClick={() => setIsOpen(false)}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="custom-footer">
        <div className="container">
          <div className="row mb-5 text-left">
            <div className="col-md-4 mb-4">
              <img src="/img/Conturc_factory_Logotipo_blanco.svg" alt="Logo Footer" style={{ height: '60px', marginBottom: '20px' }} />
              <p style={{ color: '#bbb', lineHeight: 1.6 }}>Expertos en impermeabilización y mantenimiento de edificaciones. Calidad, garantía y cumplimiento en cada obra.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="text-white text-uppercase font-weight-bold mb-4">Contacto Rápido</h5>
              <ul className="list-unstyled">
                <li className="mb-3"><i className="fas fa-map-marker-alt mr-2"></i> Carrera 11 # 6-68 sur, Sogamoso</li>
                <li className="mb-3"><i className="fas fa-phone mr-2"></i> (+57) 315 3406167</li>
                <li className="mb-3"><i className="fas fa-envelope mr-2"></i> construc.factory.sogamoso@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="text-white text-uppercase font-weight-bold mb-4">Síguenos</h5>
              <div className="social-links" style={{ fontSize: '1.5rem' }}>
                <a href="https://web.facebook.com/profile.php?id=61576737224179" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/construc.factory/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@construc.factory" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-tiktok"></i></a>
                <a href="https://wa.me/573153406167" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom border-top pt-4 text-muted" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>
            <p className="mb-0">&copy; 2026 Construc Factory SaS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <WhatsAppFloat />

      <div className="tm-bg">
        <div className="tm-bg-left"></div>
        <div className="tm-bg-right"></div>
      </div>
    </div>
  )
}
