import { useState, useRef, useCallback, useEffect } from 'react'

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [zoom, setZoom] = useState({ x: 50, y: 50 })
  const [hover, setHover] = useState(false)
  const imgRef = useRef(null)
  const all = images || []

  const prev = useCallback(() => setSelected(i => (i - 1 + all.length) % all.length), [all.length])
  const next = useCallback(() => setSelected(i => (i + 1) % all.length), [all.length])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, prev, next])

  const handleMouse = useCallback((e) => {
    if (!imgRef.current) return
    const r = imgRef.current.getBoundingClientRect()
    setZoom({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    })
  }, [])

  if (!all.length) return null

  return (
    <div className="product-gallery">
      <div
        className="gallery-main"
        ref={imgRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouse}
        onClick={() => setLightbox(true)}
      >
        <img
          src={all[selected]}
          alt=""
          className="img-fluid gallery-main-img"
          style={{
            transformOrigin: `${zoom.x}% ${zoom.y}%`,
            transform: hover ? 'scale(2)' : 'scale(1)',
          }}
        />
      </div>

      {all.length > 1 && (
        <div className="gallery-thumbs">
          {all.map((src, i) => (
            <button
              key={i}
              className={`gallery-thumb ${i === selected ? 'active' : ''}`}
              onClick={() => setSelected(i)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)}>
          <button className="lightbox-close" onClick={() => setLightbox(false)}>
            <i className="fas fa-times"></i>
          </button>
          {all.length > 1 && (
            <>
              <button className="lightbox-arrow lightbox-prev" onClick={e => { e.stopPropagation(); prev() }}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="lightbox-arrow lightbox-next" onClick={e => { e.stopPropagation(); next() }}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
          <img src={all[selected]} alt="" className="lightbox-img" onClick={e => e.stopPropagation()} />
          <span className="lightbox-counter">{selected + 1} / {all.length}</span>
        </div>
      )}
    </div>
  )
}
