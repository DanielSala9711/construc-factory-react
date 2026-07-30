const specIcons = {
  'Composición': 'fa-flask',
  'Estado': 'fa-vial',
  'Color': 'fa-palette',
  'Olor': 'fa-wind',
  'pH': 'fa-balance-scale',
  'Densidad': 'fa-weight-hanging',
  'Solubilidad': 'fa-tint',
  'Rendimiento': 'fa-ruler-combined',
}

function getIcon(label) {
  const icon = specIcons[label]
  return icon || 'fa-tag'
}

export default function SpecsGrid({ specs }) {
  if (!specs || specs.length === 0) return null

  return (
    <div className="specs-grid">
      {specs.map((spec, i) => (
        <div key={i} className="spec-card">
          <div className="spec-icon">
            <i className={`fas ${getIcon(spec.label)}`}></i>
          </div>
          <div className="spec-info">
            <span className="spec-label">{spec.label}</span>
            <span className="spec-value">{spec.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
