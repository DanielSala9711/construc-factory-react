const products = [
  {
    id: 'guardian',
    slug: 'guardian',
    shortName: 'Guardián Fachadas',
    name: 'GUARDIÁN Impermeabilizante de Fachadas',
    tagline: 'Hidrófugo Invisible de Alta Penetración',
    description: 'Producto hidrófugo y consolidante diseñado para la protección de sustratos minerales como ladrillo, piedra natural, concreto, tejas y materiales porosos similares. Forma una barrera invisible que repele el agua sin alterar el aspecto original de la superficie, ya que es completamente transparente y no genera brillo.',
    logo: '/img/Guardian_logo.svg',
    heroImage: '/img/presentacion.png',
    cardImages: ['/img/presentacion.png', '/img/garrafa.png', '/img/resultado.jpg'],
    colorPrimary: '#610A0A',
    colorSecondary: '#180A55',
    presentations: [
      { label: '1/8  GL',  price: 15000,  unitPrice: 120000},
      { label: '1/4 Gl',    price: 25000,  unitPrice: 100000 },
      { label: '1 GL',   price: 70000, unitPrice: 70000 },
      { label: '5 GL',   price: 320000, unitPrice: 64000 },
    ],
    currency: 'COP',
    ctaBuy: {
      url: 'https://wa.me/573153406167?text=Hola,%20quisiera%20comprar%20el%20impermeabilizante%20Guardian',
      text: 'Comprar Ahora',
    },
    ctaAdvice: {
      url: 'https://wa.me/573153406167?text=Hola,%20necesito%20asesoria%20tecnica%20sobre%20Guardian',
      text: 'Solicitar Asesoría',
    },
    sections: [
      {
        type: 'info-columns',
        columns: [
          {
            title: 'Ventajas',
            items: [
              '<strong>Acabado Invisible:</strong> No altera el color ni el aspecto original del sustrato. Completamente transparente y sin brillo.',
              '<strong>Alto Rendimiento:</strong> Cubre de 28 a 32 m² por galón y de 150 a 170 m² por garrafa en una sola aplicación.',
              '<strong>Fácil Aplicación:</strong> Baja viscosidad que permite aplicar con aspersor, brocha o rodillo de forma uniforme.',
              '<strong>Durabilidad Superior:</strong> Forma una capa hidrofóbica resistente que prolonga la protección del material.',
              '<strong>Secado Rápido:</strong> Secado inicial en 4 horas. Curado completo entre 24 y 72 horas.',
            ],
          },
          {
            title: 'Aplicaciones',
            items: [
              'Protección de fachadas de ladrillo, piedra natural, concreto y tejas contra lluvia y humedad.',
              'Impermeabilización de muros exteriores e interiores afectados por humedad ambiental o freática.',
              'Prevención de hongos, bacterias y moho en superficies minerales porosas.',
              'Tratamiento consolidante que preserva la integridad y prolonga la vida útil del sustrato.',
              'No aplicar sobre sustratos orgánicos como madera, plástico o vidrio.',
            ],
          },
        ],
      },
      {
        type: 'instructions-specs',
        instructions: [
          { step: '01', title: 'Preparación', text: 'Asegúrese de que la superficie esté limpia, seca y libre de polvo, grasa, aceites, musgo o residuos de otros productos.' },
          { step: '02', title: 'Aplicación', text: 'Aplique una capa uniforme con aspersor de alta presión y bajo volumen, brocha o rodillo. Evite la formación de encharcamientos.' },
          { step: '03', title: 'Segunda Mano', text: 'Una sola aplicación suele ser suficiente. De ser necesaria una segunda capa, aplíquela "húmedo sobre húmedo" antes de que se seque la primera.' },
          { step: '04', title: 'Secado y Curado', text: 'El secado inicial es de aproximadamente 4 horas. El curado completo se alcanza entre 24 y 72 horas. Evite contacto con agua durante las primeras 4 horas.' },
        ],
        instructionsTitle: 'Instrucciones de Uso',
        specsTitle: 'Ficha Técnica',
        specs: [
          { label: 'Composición', value: 'Solución acuosa de propilsilanotriolato de tripotasio, hidróxido de potasio' },
          { label: 'Estado', value: 'Líquido' },
          { label: 'Color', value: 'Transparente ligeramente amarillo' },
          { label: 'Olor', value: 'Inodoro' },
          { label: 'pH', value: '< 13' },
          { label: 'Densidad', value: '1,0 g/mL' },
          { label: 'Solubilidad', value: 'Totalmente miscible' },
          { label: 'Rendimiento', value: '28 - 32 m²/galón' },
        ],
        downloads: [
          { icon: 'fa-file-pdf', url: '/docs/Guardian_Ficha_técnica.pdf', text: 'Descargar Ficha Técnica' },
          { icon: 'fa-shield-alt', url: '/docs/Guardian_Ficha_Tecnica.pdf', text: 'Hoja de Seguridad' },
        ],
      },
      {
        type: 'gallery',
        images: ['galeria_1.jpg', 'galeria_2.jpg', 'galeria_3.jpg', 'galeria_4.jpg'],
      },
    ],
  },
  {
    id: 'guardian-capilar',
    slug: 'guardian-capilar',
    shortName: 'Guardián Barrera Capilar',
    name: 'GUARDIÁN Barrera Contra Humedad Ascendente',
    tagline: 'Barrera contra humedad ascendente',
    description: 'La humedad ascendente puede deteriorar paredes, desprender la pintura, generar hongos y malos olores. GUARDIÁN® Barrera contra humedad ascendente actúa desde el interior del muro formando una barrera hidrofóbica en la sección transversal que reduce el ascenso del agua por capilaridad, prolongando la vida útil de la construcción sin alterar la apariencia de la superficie.',
    logo: '/img/Guardian humedad ascendente logo.png',
    heroImage: '/img/presentacion.png', 
    cardImages: ['/img/presentacion.png', '/img/Humedad ascendente.png'],
    colorPrimary: '#610A0A',
    colorSecondary: '#180A55',
    presentations: [
      { label: '1/8  GL',  price: 15000,  unitPrice: 120000},
      { label: '1/4 Gl',    price: 25000,  unitPrice: 100000 },
      { label: '1 GL',   price: 70000, unitPrice: 70000 },
      { label: '5 GL',   price: 320000, unitPrice: 64000 },
    ],
    currency: 'COP',
    ctaBuy: {
      url: 'https://wa.me/573153406167?text=Hola,%20quisiera%20comprar%20el%20producto%20Guardian%20Capilar',
      text: 'Comprar Ahora',
    },
    ctaAdvice: {
      url: 'https://wa.me/573153406167?text=Hola,%20necesito%20asesoria%20tecnica%20sobre%20Guardian%20Capilar',
      text: 'Solicitar Asesoría',
    },
    sections: [
      {
        type: 'info-columns',
        columns: [
          {
            title: 'Aplicaciones / Usos',
            items: [
              'Fachadas de ladrillo, bloque, piedra natural y hormigón con problemas de humedad ascendente.',
              'Muros de contención y paredes de sótanos.',
              'Paredes de jardines expuestas a humedad del suelo.',
              'Restauración de edificios históricos con patologías de humedad capilar.',
              'Tratamiento preventivo durante procesos de rehabilitación de mampostería.',
            ],
          },
          {
            title: 'Beneficios / Ventajas',
            items: [
              '<strong>Barrera Hidrofóbica:</strong> Forma una barrera química permanente contra el ascenso capilar.',
              '<strong>Sin Demoliciones:</strong> Aplicación mediante inyección sin necesidad de obras extensas.',
              '<strong>Transpirable:</strong> Permite que el muro respire de forma natural.',
              '<strong>Alta Penetración:</strong> Penetra profundamente en la estructura del muro.',
              '<strong>Compatibilidad:</strong> Funciona en ladrillo, bloque, piedra natural, concreto poroso y más.',
            ],
          },
        ],
      },
      {
        type: 'instructions-specs',
        instructions: [
          { step: '01', title: 'Perforación', text: 'Realiza perforaciones de 5 mm de diámetro a 10 cm del nivel del suelo, con una separación de 6 cm y una inclinación de 45° hacia abajo.' },
          { step: '02', title: 'Inyección', text: 'Inyecta GUARDIÁN® Barrera contra humedad ascendente en cada perforación mediante jeringa, dosificador manual o equipo de inyección hasta saturar la zona capilar.' },
          { step: '03', title: 'Barrera', text: 'El producto penetra profundamente en la estructura del muro y forma una barrera invisible que reduce el ascenso de la humedad.' },
          { step: '04', title: 'Sellado', text: 'Sella las perforaciones con mortero impermeabilizado compatible con la mampostería para restablecer la continuidad del muro.' },
        ],
        instructionsTitle: '¿Cómo funciona?',
        specsTitle: 'Ficha Técnica',
        specs: [
          { label: 'Composición', value: 'Mezcla acuosa alcalina' },
          { label: 'Estado', value: 'Líquido' },
          { label: 'Color', value: 'Transparente ligeramente amarillo' },
          { label: 'Olor', value: 'Inodoro' },
          { label: 'pH', value: '< 13' },
          { label: 'Densidad', value: '1,0 g/mL' },
          { label: 'Solubilidad', value: 'Totalmente miscible' },
        ],
        downloads: [
          { icon: 'fa-file-pdf', url: '/docs/ficha tecnica Guardian contra humedad freatica.pdf', text: 'Descargar Ficha Técnica' },
          { icon: 'fa-shield-alt', url: '/docs/Ficha seguridad GUARDIÁN contra humedada ascendente.pdf', text: 'Hoja de Seguridad' },
        ],
      },
      {
        type: 'gallery',
        images: ['galeria_1.jpg', 'galeria_2.jpg', 'galeria_3.jpg', 'galeria_4.jpg'],
      },
    ],
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export default products
