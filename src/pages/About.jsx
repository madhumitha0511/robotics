import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

function PageHeader({ tag, title, accent, subtitle }) {
  return (
    <section style={{ minHeight: '52vh', display: 'flex', alignItems: 'flex-end', padding: '120px 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'absolute', top: '40%', left: 0, width: '40%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(4,112,152,0.3))' }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="label-tag" style={{ marginBottom: '1.5rem' }}>{tag}</div>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 1, color: '#e8e8e7' }}>
          {title}<br /><span style={{ color: '#047098' }}>{accent}</span>
        </h1>
        {subtitle && <p style={{ maxWidth: '560px', marginTop: '1.5rem', color: '#696968', lineHeight: 1.85 }}>{subtitle}</p>}
      </div>
      <div className="h-rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  )
}

function Avatar({ seed, size = 56 }) {
  const colors = ['#047098', '#494948', '#a9a9a8', '#1a4a60', '#2a6a80']
  const c1 = colors[seed % colors.length]
  const c2 = colors[(seed + 2) % colors.length]
  const shapes = [
    <rect key="s" x="15" y="15" width="50" height="50" stroke={c1} strokeWidth="1" fill="rgba(4,112,152,0.06)" />,
    <circle key="c" cx="40" cy="40" r="28" stroke={c1} strokeWidth="1" fill="rgba(4,112,152,0.05)" />,
    <polygon key="p" points="40,12 68,60 12,60" stroke={c1} strokeWidth="1" fill="rgba(4,112,152,0.05)" />,
  ]
  return (
    <svg viewBox="0 0 80 80" style={{ width: size, height: size }} fill="none">
      <rect width="80" height="80" fill="#111110" />
      {shapes[seed % shapes.length]}
      <circle cx="40" cy="40" r="6" fill={c1} opacity="0.8" />
      <line x1="0" y1="40" x2="80" y2="40" stroke={c2} strokeWidth="0.5" opacity="0.3" />
      <line x1="40" y1="0" x2="40" y2="80" stroke={c2} strokeWidth="0.5" opacity="0.3" />
      {[0, 1, 2, 3].map(i => {
        const angle = (i * 90 * Math.PI) / 180
        return <circle key={i} cx={40 + 25 * Math.cos(angle)} cy={40 + 25 * Math.sin(angle)} r="2" fill={c1} opacity="0.6" />
      })}
    </svg>
  )
}

const team = [
  { name: 'Founder / CEO', role: 'Leadership & Vision', dept: 'Leadership', bio: 'Systems architect with deep expertise in autonomous navigation and ROS 2 distributed architectures. Drives the engineering and commercial strategy of Quantrelis Dynamics.', skills: ['Autonomy Systems', 'ROS 2', 'Strategy'] },
  { name: 'Head of Perception', role: 'Perception & Sensing', dept: 'Engineering', bio: 'Multi-sensor fusion specialist with experience integrating LiDAR, camera, and IMU pipelines for real-world autonomous vehicle deployments.', skills: ['LiDAR', 'Camera Fusion', 'SLAM'] },
  { name: 'Lead Controls Engineer', role: 'Control Architecture', dept: 'Engineering', bio: 'Real-time control specialist. Designs safety-critical control loops and vehicle actuation interfaces for production autonomy stacks.', skills: ['Control Theory', 'Safety Systems', 'C++'] },
  { name: 'Embedded Systems Lead', role: 'Hardware & Edge AI', dept: 'Engineering', bio: 'Embedded intelligence specialist focused on deploying neural inference on compute-constrained platforms for field autonomy applications.', skills: ['Edge AI', 'RTOS', 'Embedded C'] },
  { name: 'Software Architect', role: 'ROS 2 & Communication', dept: 'Software', bio: 'Distributed systems engineer building the DDS communication layer and V2X-ready interfaces for fleet-scale autonomy deployments.', skills: ['ROS 2', 'DDS', 'Fleet Systems'] },
  { name: 'Navigation Engineer', role: 'Planning & Mapping', dept: 'Engineering', bio: 'Path planning and SLAM expert. Implements global and local planning algorithms for autonomous ground vehicles in complex unstructured environments.', skills: ['SLAM', 'Motion Planning', 'Python'] },
]

const philosophy = [
  { symbol: '01', title: 'System-Level Design', desc: 'We engineer complete architectures — not isolated components. Every module is designed with the full system in mind.' },
  { symbol: '02', title: 'Modular Development', desc: 'Each subsystem is independently scalable and upgrade-ready. Swap sensors, planners, or compute without rearchitecting the stack.' },
  { symbol: '03', title: 'Deployment Focused', desc: 'We prioritize stability, reliability, and integration. Our systems are validated for field conditions, not just simulation environments.' },
  { symbol: '04', title: 'Hardware Agnostic', desc: 'Our frameworks integrate across multiple computing platforms and sensor configurations. No vendor lock-in by design.' },
]

const intersections = [
  'Robotics Software Architecture',
  'Embedded Systems Engineering',
  'Autonomous Navigation',
  'Distributed Communication Systems',
]

export default function About() {
  useReveal()

  return (
    <main>
      <PageHeader
        tag="◈ About Quantrelis Dynamics"
        title="BUILT FOR"
        accent="THE FIELD."
        subtitle="A robotics and smart mobility technology venture focused on engineering deployment-grade autonomy systems. We build systems that work in field conditions — not just simulation environments."
      />

      {/* ── WHO WE ARE ── */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Who We Are</div>
              <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '2rem' }}>
                AT THE INTERSECTION<br /><span style={{ color: '#047098' }}>OF SYSTEMS.</span>
              </h2>
              <p className="reveal delay-200" style={{ color: '#696968', lineHeight: 1.9, marginBottom: '2rem' }}>
                Quantrelis Dynamics is a robotics and smart mobility technology venture focused on
                engineering deployment-grade autonomy systems. We operate at the intersection of
                disciplines that matter most for field-ready autonomous platforms.
              </p>
              <div className="reveal delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {intersections.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '6px', height: '6px', background: '#047098', flexShrink: 0 }} />
                    <span style={{ color: '#a9a9a8', fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="reveal delay-200" style={{ position: 'relative', height: '380px' }}>
              <svg viewBox="0 0 400 380" style={{ width: '100%', height: '100%', opacity: 0.55 }} fill="none">
                {/* Venn-style intersection */}
                <circle cx="160" cy="170" r="120" stroke="rgba(4,112,152,0.25)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
                <circle cx="240" cy="170" r="120" stroke="rgba(169,169,168,0.2)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
                <circle cx="200" cy="230" r="120" stroke="rgba(4,112,152,0.2)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
                {/* Center pulse */}
                <circle cx="200" cy="195" r="22" fill="rgba(4,112,152,0.15)" stroke="#047098" strokeWidth="1" />
                <circle cx="200" cy="195" r="8" fill="#047098" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
                {/* Labels */}
                <text x="100" y="95" fontFamily="monospace" fontSize="7" fill="#047098" opacity="0.6" textAnchor="middle">ROBOTICS SW</text>
                <text x="305" y="95" fontFamily="monospace" fontSize="7" fill="#047098" opacity="0.6" textAnchor="middle">EMBEDDED SYS</text>
                <text x="200" y="355" fontFamily="monospace" fontSize="7" fill="#047098" opacity="0.6" textAnchor="middle">AUTONOMOUS NAV</text>
                <text x="200" y="202" fontFamily="monospace" fontSize="6.5" fill="#e8e8e7" opacity="0.8" textAnchor="middle">QD</text>
                {/* Corner brackets */}
                <path d="M 10 10 H 50 M 10 10 V 50" stroke="#047098" strokeWidth="0.8" opacity="0.35" />
                <path d="M 390 10 H 350 M 390 10 V 50" stroke="#047098" strokeWidth="0.8" opacity="0.35" />
                <path d="M 10 370 H 50 M 10 370 V 330" stroke="#047098" strokeWidth="0.8" opacity="0.35" />
                <path d="M 390 370 H 350 M 390 370 V 330" stroke="#047098" strokeWidth="0.8" opacity="0.35" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION + MISSION ── */}
      <section style={{ padding: '8rem 2rem', background: 'rgba(26,26,25,0.45)', borderTop: '1px solid rgba(169,169,168,0.08)', borderBottom: '1px solid rgba(169,169,168,0.08)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div className="reveal">
              <div className="label-tag" style={{ marginBottom: '1.5rem' }}>Vision</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1.5rem' }}>
                ACCELERATE<br /><span style={{ color: '#047098' }}>GLOBAL ADOPTION.</span>
              </h2>
              <p style={{ color: '#696968', lineHeight: 1.9 }}>
                To accelerate the global adoption of intelligent mobility through modular,
                scalable autonomy systems that perform reliably in the environments where
                it matters most — not controlled test tracks, but real-world operations.
              </p>
            </div>
            <div className="reveal delay-200" style={{ borderLeft: '1px solid rgba(169,169,168,0.1)', paddingLeft: '4rem' }}>
              <div className="label-tag" style={{ marginBottom: '1.5rem' }}>Mission</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '1.5rem' }}>
                PRODUCTION-GRADE<br /><span style={{ color: '#047098' }}>AUTONOMY STACKS.</span>
              </h2>
              <p style={{ color: '#696968', lineHeight: 1.9 }}>
                To provide OEMs and robotics manufacturers with production-grade autonomy stacks
                and embedded intelligence frameworks engineered for real-world performance.
                Not prototypes. Not demos. Deployable systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING PHILOSOPHY ── */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Engineering Philosophy</div>
          <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem' }}>
            HOW WE<br /><span style={{ color: '#047098' }}>THINK AND BUILD.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {philosophy.map((v, i) => (
              <div key={i} className={`card-hover reveal delay-${(i + 1) * 100}`} style={{ border: '1px solid rgba(169,169,168,0.1)', padding: '2.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '14px', height: '14px', borderTop: '2px solid rgba(4,112,152,0.5)', borderLeft: '2px solid rgba(4,112,152,0.5)' }} />
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem', color: '#047098', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>{v.symbol}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#e8e8e7', marginBottom: '1rem' }}>{v.title}</h3>
                <p style={{ color: '#696968', fontSize: '0.9rem', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: '8rem 2rem', background: 'rgba(26,26,25,0.4)', borderTop: '1px solid rgba(169,169,168,0.08)', borderBottom: '1px solid rgba(169,169,168,0.08)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <div>
              <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>The Engineering Team</div>
              <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                BUILDERS<br /><span style={{ color: '#047098' }}>OF THE STACK.</span>
              </h2>
            </div>
            <div className="reveal delay-200" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', paddingBottom: '0.25rem' }}>
              {[{ val: 'ROS 2', label: 'Core Platform' }, { val: '6+', label: 'Active Modules' }, { val: 'Field', label: 'Deployment Focus' }, { val: 'OEM', label: 'Integration Ready' }].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: '#e8e8e7', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#494948', marginTop: '0.4rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1px', background: 'rgba(169,169,168,0.08)' }}>
            {team.map((person, i) => (
              <div key={i} className={`card-hover reveal delay-${(i % 4 + 1) * 100}`} style={{ background: '#0a0a09', padding: '2rem', position: 'relative', cursor: 'default' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.1em', color: '#2a2a29', textTransform: 'uppercase' }}>{person.dept}</div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ border: '1px solid rgba(4,112,152,0.2)', padding: '2px', flexShrink: 0 }}>
                    <Avatar seed={i} size={54} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#e8e8e7' }}>{person.name}</div>
                    <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#047098', textTransform: 'uppercase', marginTop: '3px' }}>{person.role}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.83rem', lineHeight: 1.75, color: '#696968', marginBottom: '1.25rem' }}>{person.bio}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {person.skills.map((skill, j) => (
                    <span key={j} style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.08em', color: '#494948', border: '1px solid rgba(169,169,168,0.1)', padding: '3px 8px', textTransform: 'uppercase' }}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREERS TEASER ── */}
      <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(169,169,168,0.08)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-2rem', right: '-1rem', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(5rem, 15vw, 12rem)', color: 'transparent', WebkitTextStroke: '1px rgba(169,169,168,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.04em' }}>CAREERS</div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="label-tag reveal" style={{ marginBottom: '2rem' }}>Join the Team</div>
          <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            BUILD THE FUTURE<br /><span style={{ color: '#047098' }}>OF MOBILITY.</span>
          </h2>
          <p className="reveal delay-200" style={{ color: '#696968', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            We are looking for engineers who think in architecture, systems, and deployment.
            Internship programs and full-time roles available.
          </p>
          <div className="reveal delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/career" className="btn-primary">View Opportunities</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
