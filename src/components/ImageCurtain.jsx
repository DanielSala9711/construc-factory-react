const slides = [
  {
    image: '/img/garrafa.png',
    subtitle: 'Ingeniería & Construcción',
    title: 'Expertos en Impermeabilización',
    text: 'Protegemos tu patrimonio con tecnología de vanguardia y soluciones definitivas.',
    link: '/contacto',
    btnText: 'Solicitar Diagnóstico',
  },
  {
    image: '/img/soluciones.png',
    subtitle: 'Calidad Certificada',
    title: 'Soluciones Duraderas',
    text: 'Distribuidores autorizados de productos Guardián. Garantía real en cada proyecto.',
    link: '/guardian',
    btnText: 'Ver Productos',
  },
  {
    image: '/img/Asesoria.png',
    subtitle: 'Acompañamiento Integral',
    title: 'Asesoría Profesional',
    text: 'Desde el diagnóstico hasta la posventa, estamos contigo en cada etapa.',
    link: '/nosotros',
    btnText: 'Conócenos',
  },
]

export default function ImageCurtain() {
  return (
    <section className="image-curtain">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="curtain-item"
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="curtain-overlay"></div>
          <div className="floating-text">
            <span className="d-block mb-2 text-uppercase" style={{ letterSpacing: '3px', fontSize: '0.9rem', color: '#ccc' }}>
              {slide.subtitle}
            </span>
            <h2>{slide.title}</h2>
            <p className="mb-4">{slide.text}</p>
            <a href={slide.link} className="hero-btn">{slide.btnText}</a>
          </div>
        </div>
      ))}
    </section>
  )
}
