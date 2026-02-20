import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/career', label: 'Career' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      background: scrolled ? 'rgba(10,10,9,0.93)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(169,169,168,0.1)' : '1px solid transparent',
    }}>
      <nav style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* QD mark */}
          <div style={{ position: 'relative', width: '28px', height: '28px', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(4,112,152,0.5)' }} />
            <div style={{ position: 'absolute', inset: '6px', border: '1px solid #047098' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '6px', height: '6px', background: '#047098', animation: 'blink 2.5s ease-in-out infinite' }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.18em', color: '#e8e8e7', textTransform: 'uppercase', lineHeight: 1 }}>
              Quantrelis
            </div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.2em', color: '#047098', textTransform: 'uppercase', lineHeight: 1.2 }}>
              Dynamics
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="max-md:hidden">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/contact" className="btn-primary max-md:hidden" style={{ fontSize: '0.68rem', padding: '9px 18px' }}>
            Start a Project
          </Link>
          <button onClick={() => setOpen(!open)} style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'none', padding: '4px' }} className="md:!hidden !flex">
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '22px', height: '1px', background: open && i === 1 ? 'transparent' : '#a9a9a8', transition: 'all 0.3s', transform: open ? (i === 0 ? 'rotate(45deg) translate(4px, 4px)' : i === 2 ? 'rotate(-45deg) translate(4px, -4px)' : '') : '' }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(10,10,9,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(169,169,168,0.1)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {links.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
              style={{ fontSize: '1rem', letterSpacing: '0.15em' }}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setOpen(false)}>
            Start a Project
          </Link>
        </div>
      )}
    </header>
  )
}
