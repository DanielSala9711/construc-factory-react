import { useState } from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzoWHMzOAJpydlaUKl1JYiv4jWo6FyTOOiib2ZCgAZmE8v_ij-8B8DQA3SYocWdLJ36/exec'

const initial = { nombre: '', apellido: '', empresa: '', email: '', numero: '', ciudad: '', mensaje: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      const res = await fetch(SCRIPT_URL, { method: 'POST', body: fd })
      const result = await res.json()
      if (result.status === 'ok') {
        alert('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.')
        setForm(initial)
      } else {
        throw new Error(result.message || 'Error desconocido')
      }
    } catch {
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.')
    } finally {
      setSending(false)
    }
  }

  const cls = 'form-control py-4'
  const lbl = 'font-weight-bold text-muted small text-uppercase'

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 form-group mb-4">
          <label htmlFor="nombre" className={lbl}>Nombre</label>
          <input type="text" name="nombre" id="nombre" className={cls} required placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div className="col-md-6 form-group mb-4">
          <label htmlFor="apellido" className={lbl}>Apellido</label>
          <input type="text" name="apellido" id="apellido" className={cls} required placeholder="Tu apellido" value={form.apellido} onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group mb-4">
          <label htmlFor="empresa" className={lbl}>Empresa (Opcional)</label>
          <input type="text" name="empresa" id="empresa" className={cls} placeholder="Nombre de tu empresa" value={form.empresa} onChange={handleChange} />
        </div>
        <div className="col-md-6 form-group mb-4">
          <label htmlFor="email" className={lbl}>Email</label>
          <input type="email" name="email" id="email" className={cls} required placeholder="tu@email.com" value={form.email} onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 form-group mb-4">
          <label htmlFor="numero" className={lbl}>Teléfono</label>
          <input type="tel" name="numero" id="numero" className={cls} required placeholder="Número de contacto" value={form.numero} onChange={handleChange} />
        </div>
        <div className="col-md-6 form-group mb-4">
          <label htmlFor="ciudad" className={lbl}>Ciudad</label>
          <input type="text" name="ciudad" id="ciudad" className={cls} required placeholder="Ciudad de residencia" value={form.ciudad} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="mensaje" className={lbl}>Mensaje</label>
        <textarea name="mensaje" id="mensaje" rows="5" className="form-control" required placeholder="Cuéntanos sobre tu proyecto..." value={form.mensaje} onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn btn-corporate btn-buy btn-block py-3" disabled={sending}>
        {sending ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  )
}
