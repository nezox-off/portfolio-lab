import Card from '../components/Card.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section>
      <h2>Мої проєкти</h2>
      <p>
        Добірка навчальних і особистих робіт, у яких я відпрацьовую сучасні
        підходи до розробки інтерфейсів.
      </p>
      <div className="grid">
        {projects.map((p) => (
          <Card key={p.title} title={p.title} tags={p.tags}>{p.text}</Card>
        ))}
      </div>
    </section>
  )
}
