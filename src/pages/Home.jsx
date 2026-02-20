import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

// Animated autonomy schematic SVG
function LineArt() {
  return (
    <svg
      viewBox="0 0 640 480"
      style={{
        position: 'absolute',
        right: '-2%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '52%',
        opacity: 0.15,
        pointerEvents: 'none',
      }}
      fill="none"
    >
      {/* Vehicle outline */}
      <rect x="180" y="180" width="280" height="120" rx="2" stroke="#047098" strokeWidth="0.8"
        strokeDasharray="1200" strokeDashoffset="1200"
        style={{ animation: 'draw-line 3s ease forwards 0.3s' }} />
      {/* Wheels */}
      <circle cx="230" cy="300" r="28" stroke="#a9a9a8" strokeWidth="0.6"
        strokeDasharray="300" strokeDashoffset="300"
        style={{ animation: 'draw-line 2s ease forwards 1s' }} />
      <circle cx="410" cy="300" r="28" stroke="#a9a9a8" strokeWidth="0.6"
        strokeDasharray="300" strokeDashoffset="300"
        style={{ animation: 'draw-line 2s ease forwards 1.1s' }} />
      {/* Sensor dome */}
      <ellipse cx="320" cy="178" rx="40" ry="20" stroke="#047098" strokeWidth="0.6"
        strokeDasharray="400" strokeDashoffset="400"
        style={{ animation: 'draw-line 2s ease forwards 1.4s' }} />
      {/* LiDAR sweep lines */}
      {[-50, -30, -10, 10, 30, 50].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const len = 100 + Math.abs(angle) * 0.8
        return (
          <line key={i}
            x1={320} y1={160}
            x2={320 + len * Math.sin(rad)} y2={160 - len * Math.cos(rad)}
            stroke="#047098" strokeWidth="0.4" opacity="0.6"
            strokeDasharray="200" strokeDashoffset="200"
            style={{ animation: `draw-line 1.5s ease forwards ${1.8 + i * 0.1}s` }}
          />
        )
      })}
      {/* Sensor scan arc */}
      <path d="M 220 160 Q 320 60 420 160" stroke="#047098" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.5"
        strokeDashoffset="0" />
      {/* Communication lines */}
      <line x1="0" y1="240" x2="170" y2="240" stroke="#047098" strokeWidth="0.4" opacity="0.4"
        strokeDasharray="180" strokeDashoffset="180"
        style={{ animation: 'draw-line 2s ease forwards 2.2s' }} />
      <line x1="470" y1="240" x2="640" y2="240" stroke="#047098" strokeWidth="0.4" opacity="0.4"
        strokeDasharray="180" strokeDashoffset="180"
        style={{ animation: 'draw-line 2s ease forwards 2.2s' }} />
      {/* V2X nodes */}
      {[[40, 200], [40, 280], [600, 200], [600, 280]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="6" stroke="#047098" strokeWidth="0.6" fill="rgba(4,112,152,0.1)"
            style={{ animation: `blink ${1.2 + i * 0.3}s ease-in-out infinite` }} />
          <circle cx={cx} cy={cy} r="14" stroke="#047098" strokeWidth="0.3" fill="none" opacity="0.3"
            style={{ animation: `pulse-ring 2s ease-out infinite ${i * 0.5}s`, transformOrigin: `${cx}px ${cy}px` }} />
        </g>
      ))}
      {/* Path planning dots */}
      {[
        [100, 380], [160, 370], [230, 360], [310, 355], [390, 358], [470, 365], [540, 375],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#047098" opacity={0.3 + i * 0.1}
          style={{ animation: `blink ${0.8 + i * 0.15}s ease-in-out infinite ${i * 0.1}s` }} />
      ))}
      {/* Grid */}
      {[80, 160, 240, 320, 400, 480, 560].map((x, i) => (
        <line key={`vg-${i}`} x1={x} y1="0" x2={x} y2="480" stroke="#a9a9a8" strokeWidth="0.15" opacity="0.2" />
      ))}
      {[80, 160, 240, 320, 400].map((y, i) => (
        <line key={`hg-${i}`} x1="0" y1={y} x2="640" y2={y} stroke="#a9a9a8" strokeWidth="0.15" opacity="0.2" />
      ))}
      {/* Data labels */}
      <text x="290" y="148" fontFamily="monospace" fontSize="7" fill="#047098" opacity="0.7">LIDAR_SCAN</text>
      <text x="50" y="196" fontFamily="monospace" fontSize="6" fill="#a9a9a8" opacity="0.5">V2X_NODE</text>
      <text x="130" y="392" fontFamily="monospace" fontSize="6" fill="#047098" opacity="0.5">PATH_PLAN</text>
    </svg>
  )
}

// Animated counter
function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const target = parseInt(value)
        const step = target / (2000 / 16)
        let current = 0
        const timer = setInterval(() => {
          current = Math.min(current + step, target)
          setCount(Math.floor(current))
          if (current >= target) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])
  return <span ref={ref} className="stat-number">{count}{suffix}</span>
}

// Typewriter
function Typewriter({ lines }) {
  const [displayText, setDisplayText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = lines[lineIndex]
    const speed = deleting ? 40 : 80
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) { setDisplayText(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1) }
        else setTimeout(() => setDeleting(true), 2000)
      } else {
        if (charIndex > 0) { setDisplayText(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1) }
        else { setDeleting(false); setLineIndex(l => (l + 1) % lines.length) }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [charIndex, deleting, lineIndex, lines])
  return (
    <span style={{ color: '#047098' }}>
      {displayText}
      <span style={{ animation: 'blink 1s ease-in-out infinite', borderLeft: '2px solid #047098', marginLeft: '2px' }}>&nbsp;</span>
    </span>
  )
}

export default function Home() {
  useReveal()

  const stats = [
    { value: '5', suffix: '+', label: 'Core Autonomy Modules' },
    { value: '12', suffix: 'ms', label: 'Control Loop Latency' },
    { value: '99', suffix: '%', label: 'System Uptime Target' },
    { value: '4', suffix: '+', label: 'Industries Served' },
  ]

  const capabilities = [
    { icon: '◈', title: 'Perception Systems', desc: 'Multi-sensor integration across LiDAR, Camera, IMU, and GNSS. Real-time object detection and environment understanding for complex field conditions.' },
    { icon: '◉', title: 'Localization & Mapping', desc: 'SLAM integration with sensor fusion-based state estimation. Reliable positioning in GPS-degraded and feature-sparse environments.' },
    { icon: '◫', title: 'Path Planning & Navigation', desc: 'Global path planning with real-time local obstacle avoidance. Motion planning algorithms tuned for each deployment platform.' },
    { icon: '◐', title: 'Control Architecture', desc: 'Real-time control loops with vehicle actuation integration. Safety management frameworks built into the core, not bolted on.' },
    { icon: '◑', title: 'Vehicle Communication', desc: 'V2X-ready architecture with fleet-level communication support. Distributed ROS 2 messaging across heterogeneous node networks.' },
    { icon: '◒', title: 'Embedded Intelligence', desc: 'Edge AI processing and real-time decision systems on embedded targets. Sensor data fusion optimized for compute-constrained hardware.' },
  ]

  const typeLines = [
    'AUTONOMOUS MOBILITY',
    'ROS 2 ARCHITECTURE',
    'EMBEDDED INTELLIGENCE',
    'PERCEPTION SYSTEMS',
    'EDGE AI DEPLOYMENT',
  ]

  const industries = [
    'Autonomous Ground Vehicles',
    'Smart Mobility Platforms',
    'Industrial Robotics',
    'Autonomous Logistics Systems',
    'Research & Innovation Labs',
  ]

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '64px' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '25%', left: '15%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(4,112,152,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <LineArt />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="label-tag reveal" style={{ marginBottom: '2rem' }}>◈ QUANTRELIS DYNAMICS — AUTONOMY SYSTEMS</div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 7.5vw, 6.5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.02em', maxWidth: '820px', color: '#e8e8e7', animation: 'slide-in-up 1s ease forwards' }}>
            ENGINEERING<br />
            AUTONOMOUS<br />
            <span style={{ color: '#047098' }}>MOBILITY SYSTEMS.</span>
          </h1>

          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.12em', marginTop: '2rem', color: '#494948', animation: 'slide-in-up 1s ease forwards 0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            {'> '}<Typewriter lines={typeLines} />
          </div>

          <p style={{ maxWidth: '500px', marginTop: '2rem', fontSize: '1rem', lineHeight: 1.85, color: '#696968', animation: 'slide-in-up 1s ease forwards 0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            Modular autonomy software stacks and embedded intelligence systems
            for next-generation mobility platforms. Production-grade ROS 2
            architectures designed for OEM integration and real-world deployment.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap', animation: 'slide-in-up 1s ease forwards 0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            <Link to="/products" className="btn-primary">Explore the Stack</Link>
            <Link to="/contact" className="btn-outline">Talk to an Engineer</Link>
          </div>

          <div style={{ marginTop: '4rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.08em', color: '#494948', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <span>PLATFORM: ROS 2 / DDS</span>
            <span>STACK: MODULAR</span>
            <span style={{ color: '#047098' }}>STATUS: ACTIVE</span>
            <span>TARGET: FIELD DEPLOYMENT</span>
          </div>
        </div>
        <div className="h-rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(26,26,25,0.5)', borderTop: '1px solid rgba(169,169,168,0.08)', borderBottom: '1px solid rgba(169,169,168,0.08)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {stats.map((s, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100}`} style={{ textAlign: 'center' }}>
                <Counter value={s.value} suffix={s.suffix} />
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#494948', marginTop: '0.5rem' }}>{s.label}</div>
                <div className="h-rule" style={{ marginTop: '1rem', opacity: 0.2 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>What We Do</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-end' }}>
              <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                SCALABLE MOBILITY<br /><span style={{ color: '#047098' }}>INTELLIGENCE.</span>
              </h2>
              <p className="reveal delay-200" style={{ color: '#696968', lineHeight: 1.9 }}>
                We develop scalable mobility intelligence frameworks integrating perception,
                localization, planning, control, and communication — designed for OEM integration,
                robotics manufacturers, and mobility innovators seeking reliable autonomy deployment.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(169,169,168,0.1)' }}>
            {capabilities.map((f, i) => (
              <div key={i} className={`card-hover reveal delay-${(i % 3 + 1) * 100}`} style={{ background: '#0a0a09', padding: '2.5rem', position: 'relative', cursor: 'default' }}>
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '20px', height: '20px', borderTop: '2px solid #047098', borderLeft: '2px solid #047098', opacity: 0.6 }} />
                <div style={{ fontSize: '1.4rem', color: '#047098', marginBottom: '1.5rem', fontFamily: 'monospace' }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#e8e8e7', marginBottom: '1rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: '#696968' }}>{f.desc}</p>
                <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: '#1e1e1d', letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY QD ── */}
      <section style={{ padding: '7rem 2rem', background: 'linear-gradient(135deg, rgba(4,112,152,0.07) 0%, transparent 55%)', borderTop: '1px solid rgba(4,112,152,0.12)', borderBottom: '1px solid rgba(4,112,152,0.12)', position: 'relative', overflow: 'hidden' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none' }} viewBox="0 0 1400 400">
          {Array.from({ length: 25 }).map((_, i) => <line key={i} x1={0} y1={i * 16} x2={1400} y2={i * 16} stroke="#047098" strokeWidth="0.5" />)}
        </svg>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Why Quantrelis Dynamics</div>
              <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '2.5rem' }}>
                PRODUCTION-READY.<br /><span style={{ color: '#047098' }}>FIELD-PROVEN.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Production-ready architecture',
                  'Modular and scalable system design',
                  'ROS 2 distributed framework expertise',
                  'Embedded systems engineering capability',
                  'Deployment-focused engineering philosophy',
                ].map((point, i) => (
                  <div key={i} className={`reveal delay-${(i + 1) * 100}`} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#047098', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', marginTop: '3px', flexShrink: 0 }}>›</span>
                    <span style={{ color: '#a9a9a8', fontSize: '0.95rem', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schematic block */}
            <div className="reveal delay-300" style={{ position: 'relative', height: '340px' }}>
              <svg viewBox="0 0 360 340" style={{ width: '100%', height: '100%', opacity: 0.55 }} fill="none">
                {/* Stack layers */}
                {[
                  { y: 20, label: 'PERCEPTION', w: 300 },
                  { y: 90, label: 'LOCALIZATION', w: 260 },
                  { y: 160, label: 'PLANNING', w: 220 },
                  { y: 230, label: 'CONTROL', w: 180 },
                  { y: 300, label: 'HARDWARE I/F', w: 300 },
                ].map((layer, i) => (
                  <g key={i}>
                    <rect x={(300 - layer.w) / 2} y={layer.y} width={layer.w} height="44"
                      stroke="#047098" strokeWidth="0.7" fill="rgba(4,112,152,0.05)"
                      strokeDasharray="1000" strokeDashoffset="1000"
                      style={{ animation: `draw-line 2.5s ease forwards ${0.3 + i * 0.3}s` }}
                    />
                    <text x="150" y={layer.y + 27} fontFamily="monospace" fontSize="8" fill="#047098" opacity="0.7" textAnchor="middle">{layer.label}</text>
                    {i < 4 && <line x1="150" y1={layer.y + 44} x2="150" y2={layer.y + 90} stroke="#047098" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.5" />}
                  </g>
                ))}
                <path d="M 10 20 H 50 M 10 20 V 60" stroke="#047098" strokeWidth="0.8" opacity="0.4" />
                <path d="M 290 20 H 250 M 290 20 V 60" stroke="#047098" strokeWidth="0.8" opacity="0.4" />
                <path d="M 10 340 H 50 M 10 340 V 300" stroke="#047098" strokeWidth="0.8" opacity="0.4" />
                <path d="M 290 340 H 250 M 290 340 V 300" stroke="#047098" strokeWidth="0.8" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Industries We Serve</div>
          <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3.5rem' }}>
            WHERE OUR SYSTEMS<br /><span style={{ color: '#047098' }}>OPERATE.</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {industries.map((ind, i) => (
              <div key={i} className={`reveal delay-${(i % 4 + 1) * 100}`}
                style={{ border: '1px solid rgba(169,169,168,0.12)', padding: '1rem 2rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#494948', transition: 'border-color 0.3s, color 0.3s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(4,112,152,0.5)'; e.currentTarget.style.color = '#a9a9a8' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(169,169,168,0.12)'; e.currentTarget.style.color = '#494948' }}>
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(169,169,168,0.08)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="label-tag reveal" style={{ marginBottom: '2rem' }}>Ready to Deploy</div>
          <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            LET'S BUILD<br /><span style={{ color: '#047098' }}>TOGETHER.</span>
          </h2>
          <p className="reveal delay-200" style={{ color: '#696968', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Whether you're an OEM, robotics manufacturer, or mobility startup,
            we're ready to collaborate on your autonomy stack.
          </p>
          <div className="reveal delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Start a Project</Link>
            <Link to="/products" className="btn-outline">View the Stack</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
