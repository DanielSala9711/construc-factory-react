export default function NosotrosPage() {
  return (
    <>
      <section className="page-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/img/diagoona-bg-1.jpg)' }}>
        <div className="container">
          <h1>Nuestra Empresa</h1>
          <p className="lead" style={{ color: '#ddd' }}>Compromiso, Calidad e Innovación en cada proyecto.</p>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <span className="section-subtitle">¿Quiénes Somos?</span>
              <h2 className="section-heading">Pasión por la Ingeniería</h2>
              <p className="lead" style={{ color: '#2F2E2D' }}>
                Construct Factory nació con el objetivo de ofrecer soluciones de impermeabilización innovadoras y definitivas.
              </p>
              <p className="lead" style={{ color: '#2F2E2D' }}>Nos especializamos en proteger estructuras contra el deterioro causado por la humedad. Contamos con un equipo multidisciplinario que combina experiencia técnica con el uso de materiales de vanguardia.</p>
              <p className="lead" style={{ color: '#2F2E2D' }}>Nuestra filosofía se basa en entender que cada edificación es única, por lo que brindamos diagnósticos precisos y soluciones a medida que garantizan la longevidad de su inversión.</p>
            </div>
            <div className="col-lg-6 text-center">
              <img src="/img/Conturc_factory_Logotipo_azul.svg" alt="Construc Factory" className="img-fluid" style={{ maxHeight: '300px' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="info-section-alt">
        <div className="container">
          <div className="row mb-0">
            <div className="col-md-6 mb-4">
              <div className="value-card">
                <h3 style={{ color: '#610A0A', fontWeight: 700, marginBottom: '20px' }}><i className="fas fa-bullseye mr-2"></i> Misión</h3>
                <p className="lead" style={{ color: '#2F2E2D' }}>Ofrecer soluciones de impermeabilización de la más alta calidad, centradas en brindar una experiencia excepcional al cliente. Lo hacemos combinando mano de obra especializada y materiales innovadores, garantizando durabilidad y confianza en cada proyecto. Nos comprometemos a entender las necesidades específicas de nuestros clientes, proporcionándoles asesoría personalizada, cumplimiento de plazos y un servicio postventa proactivo.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="value-card">
                <h3 style={{ color: '#180A55', fontWeight: 700, marginBottom: '20px' }}><i className="fas fa-eye mr-2"></i> Visión</h3>
                <p className="lead" style={{ color: '#2F2E2D' }}>Ser reconocidos como la empresa líder en impermeabilización en Latinoamérica, distinguiéndonos por nuestra pasión por la innovación y la excelencia en el servicio. Aspiramos a transformar el sector mediante el desarrollo continuo de productos eco‑amigables y tecnológicos, que no solo protejan las estructuras, sino que también contribuyan al bienestar de las personas y al cuidado del medio ambiente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-subtitle">Lo que hacemos</span>
            <h2 className="section-heading mx-auto" style={{ maxWidth: '600px' }}>Nuestros Pilares de Servicio</h2>
          </div>

          <div className="row">
            {[
              { img: '/img/asesoria_en_proyectos.svg', title: 'Asesoría en Proyectos', text: 'Nuestros expertos te guiarán en cada etapa, desde la selección de productos hasta la aplicación.' },
              { img: '/img/Contratistas_para_proyectos.svg', title: 'Ejecución Profesional', text: 'Red de contratistas certificados para garantizar profesionalismo y calidad en cada trabajo.' },
              { img: '/img/personalizacion_de_productos.svg', title: 'Personalización', text: 'Adaptamos nuestros productos a las especificaciones de tu proyecto para máxima eficiencia.' },
              { img: '/img/acompañamiento_posventa.svg', title: 'Acompañamiento Posventa', text: 'Soporte y garantía después de la compra para asegurar el éxito a largo plazo.' },
            ].map((item, i) => (
              <div key={i} className="col-lg-6 mb-4">
                <div className="d-flex align-items-center pilar-card">
                  <img src={item.img} alt={item.title} style={{ width: '60px', height: '60px' }} className="mr-4" />
                  <div>
                    <h5 className="font-weight-bold" style={{ color: '#180A55' }}>{item.title}</h5>
                    <p className="mb-0 text-muted">{item.text}</p>
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
