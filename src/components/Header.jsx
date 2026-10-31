import { NavLink } from 'react-router-dom'
import { navLinks } from '../data.js'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <span className="logo">М. Поляков</span>
        {navLinks.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => (isActive ? 'nav-link on' : 'nav-link')}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
