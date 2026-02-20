import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/career', label: 'Career' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(169,169,168,0.1)', background: '#0a0a09', padding: '4rem 2rem 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Ghost text */}
      <div style={{ position: 'absolute', bottom: '-1rem', right: '-10px', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(4rem, 12vw, 11rem)', color: 'transparent', WebkitTextStroke: '1px rgba(169,169,168,0.035)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.04em' }}>QUANTRELIS</div>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(169,169,168,0.08)', position: 'relative', zIndex: 1 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative', width: '24px', height: '24px', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(4,112,152,0.5)' }} />
                <div style={{ position: 'absolute', inset: '5px', border: '1px solid #047098' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '5px', height: '5px', background: '#047098' }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.15em', color: '#e8e8e7', textTransform: 'uppercase', lineHeight: 1 }}>Quantrelis</div>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.18em', color: '#047098', textTransform: 'uppercase', lineHeight: 1.3 }}>Dynamics</div>
              </div>
            </div>
            <p style={{ fontSize: '0.83rem', lineHeight: 1.75, maxWidth: '220px', color: '#696968' }}>
              Modular autonomy software stacks and embedded intelligence systems for next-generation mobility platforms.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="label-tag" style={{ marginBottom: '1.5rem' }}>Navigation</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map(link => (
                <li key={link.to}><Link to={link.to} className="nav-link" style={{ fontSize: '0.78rem' }}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="label-tag" style={{ marginBottom: '1.5rem' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.83rem' }}>
              <p style={{ fontFamily: "'Share Tech Mono', monospace", color: '#a9a9a8' }}>hello@quantrelisdynamics.com</p>
              <p style={{ fontFamily: "'Share Tech Mono', monospace", color: '#696968' }}>careers@quantrelisdynamics.com</p>
            </div>
          </div>

          {/* System status */}
          <div>
            <div className="label-tag" style={{ marginBottom: '1.5rem' }}>Stack Status</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Perception Module', 'Planning Module', 'Control Layer'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.72rem', fontFamily: "'Share Tech Mono', monospace" }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#047098', boxShadow: '0 0 8px rgba(4,112,152,0.8)', animation: `blink ${1.5 + i * 0.3}s ease-in-out infinite` }} />
                  <span style={{ color: '#696968' }}>{s}</span>
                  <span style={{ color: '#047098', marginLeft: 'auto' }}>ACTIVE</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#494948', letterSpacing: '0.05em' }}>© 2025 QUANTRELIS DYNAMICS. ALL RIGHTS RESERVED.</p>
          <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#494948' }}>STACK_VERSION: QAS-2.1.0</p>
        </div>
      </div>
    </footer>
  )
}
