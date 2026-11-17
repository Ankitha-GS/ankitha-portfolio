
import { useState } from 'react'
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        ANKITHA GS<span>.</span>
      </a>

      <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title="Change theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        
      </div>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  )
}
