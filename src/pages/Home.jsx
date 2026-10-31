import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'
import { features } from '../data.js'

export default function Home() {
  return (
    <section>
      <h1>Привіт! Я Максим</h1>
      <p className="sub">Frontend-розробник. Створюю зручні та швидкі інтерфейси</p>
      <p>
        Я студент Черкаського державного технологічного університету. Вивчаю
        веб-розробку та створюю власні проєкти на JavaScript, Vue і React.
        Цікавлюся інтерфейсами, які легко зрозуміти з першого погляду.
      </p>
      <Link className="btn" to="/projects">Мої проєкти</Link>
      <Link className="btn alt" to="/contacts">Зв’язатися зі мною</Link>
      <div className="grid">
        {features.map((f) => (
          <Card key={f.title} title={f.title}>{f.text}</Card>
        ))}
      </div>
    </section>
  )
}
