import { useState } from 'react'
import { contacts } from '../data.js'

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Повідомлення з сайту від ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.email}`)
    setSent(true)
    window.location.href = `mailto:${contacts.email}?subject=${subject}&body=${body}`
  }

  return (
    <section>
      <h2>Зв’язатися зі мною</h2>
      <p>
        Маєте пропозицію, питання або хочете обговорити спільний проєкт?
        Напишіть мені — відповім якнайшвидше.
      </p>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Ім’я" value={form.name} onChange={onChange} required />
        <input name="email" type="email" placeholder="Електронна пошта" value={form.email} onChange={onChange} required />
        <textarea name="message" placeholder="Повідомлення" value={form.message} onChange={onChange} required />
        <button className="btn" type="submit">Надіслати</button>
        {sent && <p>Дякую! Ваше повідомлення підготовлено до надсилання.</p>}
      </form>
    </section>
  )
}
