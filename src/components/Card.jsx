export default function Card({ title, children, tags = [] }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{children}</p>
      {tags.map((t) => (
        <span className="tag" key={t}>{t}</span>
      ))}
    </div>
  )
}
