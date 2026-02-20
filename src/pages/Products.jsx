import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

function PageHeader() {
  return (
    <section style={{ minHeight: '52vh', display: 'flex', alignItems: 'flex-end', padding: '120px 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="label-tag" style={{ marginBottom: '1.5rem' }}>◈ Products</div>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 1, color: '#e8e8e7' }}>
          QUANTRELIS<br /><span style={{ color: '#047098' }}>AUTONOMY STACK.</span>
        </h1>
        <p style={{ maxWidth: '560px', marginTop: '1.5rem', color: '#696968', lineHeight: 1.85 }}>
          A modular ROS 2–based autonomy framework designed for deployment across mobility platforms.
          Every module is production-grade, independently scalable, and integration-ready.
        </p>
      </div>
      <div className="h-rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  )
}

const modules = [
  {
    id: 'perception',
    tag: 'Module 01',
    title: 'PERCEPTION LAYER',
    icon: '◈',
    desc: 'Multi-sensor integration for comprehensive environment understanding. The perception layer fuses data from heterogeneous sensor arrays into a unified world model.',
    specs: [
      { label: 'LiDAR Integration', value: 'Multi-beam 3D' },
      { label: 'Camera Support', value: 'Mono / Stereo / RGB-D' },
      { label: 'IMU Fusion', value: 'MEMS + Tactical grade' },
      { label: 'GNSS', value: 'RTK / SBAS capable' },
      { label: 'Object Detection', value: 'Real-time ML inference' },
      { label: 'Latency', value: '<20ms pipeline' },
    ],
    features: ['Multi-sensor integration (LiDAR, Camera, IMU, GNSS)', 'Object detection and environment understanding', 'Point cloud processing and segmentation', 'Dynamic object tracking'],
  },
  {
    id: 'localization',
    tag: 'Module 02',
    title: 'LOCALIZATION & MAPPING',
    icon: '◉',
    desc: 'SLAM-based positioning with sensor fusion state estimation. Delivers reliable localization in GPS-degraded environments, unstructured terrains, and feature-sparse conditions.',
    specs: [
      { label: 'SLAM Algorithm', value: 'Multi-modal fusion' },
      { label: 'Map Format', value: 'Point cloud / Grid / Topo' },
      { label: 'Positioning', value: 'RTK + dead reckoning' },
      { label: 'Update Rate', value: '100Hz state estimation' },
      { label: 'GPS Denied', value: 'Full SLAM fallback' },
      { label: 'Map Scale', value: 'Km-scale consistency' },
    ],
    features: ['SLAM integration with loop closure', 'Sensor fusion-based state estimation', 'Multi-session mapping support', 'GPS-denied operation capability'],
  },
  {
    id: 'planning',
    tag: 'Module 03',
    title: 'PLANNING SYSTEM',
    icon: '◫',
    desc: 'Hierarchical planning from global routing to local reactive avoidance. Algorithms optimized per platform type — from last-mile logistics vehicles to industrial AGVs.',
    specs: [
      { label: 'Global Planner', value: 'Graph-based + ML hybrid' },
      { label: 'Local Planner', value: 'MPC / DWA / TEB' },
      { label: 'Obstacle Avoidance', value: 'Dynamic + static' },
      { label: 'Replanning', value: '<50ms trigger' },
      { label: 'Footprint', value: 'Custom per platform' },
      { label: 'Cost Function', value: 'Configurable weights' },
    ],
    features: ['Global path planning via optimized graph search', 'Local obstacle avoidance in dynamic environments', 'Motion planning algorithms tuned per vehicle class', 'Behavior trees for complex mission execution'],
  },
  {
    id: 'control',
    tag: 'Module 04',
    title: 'CONTROL ARCHITECTURE',
    icon: '◐',
    desc: 'Real-time deterministic control with integrated safety management. The control layer closes the loop from planner output to physical actuation with full safety supervision.',
    specs: [
      { label: 'Loop Rate', value: '1kHz deterministic' },
      { label: 'Latency', value: '<1ms control response' },
      { label: 'Safety Layer', value: 'IEC 61508 compliant' },
      { label: 'Actuation I/F', value: 'CAN / EtherCAT / PWM' },
      { label: 'Fail-safe', value: 'Hardware + software' },
      { label: 'E-stop', value: '<5ms response' },
    ],
    features: ['Real-time control loops with deterministic scheduling', 'Vehicle actuation integration via standard fieldbus', 'Safety management framework with redundancy', 'Fault detection and graceful degradation'],
  },
  {
    id: 'communication',
    tag: 'Module 05',
    title: 'COMMUNICATION INTERFACE',
    icon: '◑',
    desc: 'V2X-ready distributed communication architecture built on ROS 2 DDS. Enables fleet coordination, remote monitoring, and OTA software delivery.',
    specs: [
      { label: 'Middleware', value: 'ROS 2 / DDS' },
      { label: 'V2X Protocol', value: 'DSRC / C-V2X ready' },
      { label: 'Fleet Support', value: '100+ concurrent units' },
      { label: 'Telemetry', value: '10k signals/sec' },
      { label: 'OTA Updates', value: 'Zero-downtime rollout' },
      { label: 'Latency', value: '<10ms DDS round-trip' },
    ],
    features: ['V2X-ready architecture for vehicle-to-infrastructure', 'Fleet-level communication and coordination', 'Remote monitoring and telemetry dashboard', 'Secure OTA software update delivery'],
  },
  {
    id: 'embedded',
    tag: 'Platform',
    title: 'EMBEDDED INTELLIGENCE PLATFORM',
    icon: '◒',
    desc: 'Computing architectures optimized for edge inference and real-time decision systems. Deployed on constrained hardware without sacrificing autonomy performance.',
    specs: [
      { label: 'Inference', value: 'Onboard edge AI' },
      { label: 'Targets', value: 'Jetson / x86 / ARM' },
      { label: 'RTOS', value: 'Linux RT / Zephyr' },
      { label: 'Power Envelope', value: 'Platform-matched' },
      { label: 'Reliability', value: 'Field-hardened design' },
      { label: 'Integration', value: 'HAL abstraction layer' },
    ],
    features: ['Edge AI processing without cloud dependency', 'Real-time decision systems on embedded hardware', 'Sensor data fusion at the compute level', 'Mobility control integration layer'],
  },
]

const services = [
  { title: 'Autonomy Stack Integration', desc: 'Integrate the Quantrelis autonomy stack into your existing platform. We handle the software architecture, hardware abstraction, and system commissioning.' },
  { title: 'Navigation Pipeline Customization', desc: 'Customize the planning and localization modules to your specific operational environment — from structured warehouses to unstructured outdoor terrain.' },
  { title: 'Performance Optimization', desc: 'Systematic profiling and tuning of the full perception-to-control pipeline. Latency reduction, throughput optimization, and hardware utilization improvements.' },
  { title: 'Embedded Architecture Design', desc: 'Architecture consulting and implementation for mobility-specific compute systems. From silicon selection to BSP and RTOS configuration.' },
]

export default function Products() {
  useReveal()
  const [active, setActive] = useState('perception')
  const mod = modules.find(m => m.id === active)

  return (
    <main>
      <PageHeader />

      {/* ── MODULE EXPLORER ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Core Modules</div>
          <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem' }}>
            SELECT A MODULE<br /><span style={{ color: '#047098' }}>TO EXPLORE.</span>
          </h2>

          {/* Tab bar */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(169,169,168,0.15)', marginBottom: '4rem', overflowX: 'auto' }}>
            {modules.map(m => (
              <button key={m.id} onClick={() => setActive(m.id)} style={{
                background: 'none', border: 'none',
                borderBottom: active === m.id ? '2px solid #047098' : '2px solid transparent',
                color: active === m.id ? '#e8e8e7' : '#494948',
                fontFamily: "'Share Tech Mono', monospace", fontSize: '0.65rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '0.9rem 1.2rem', cursor: 'none',
                transition: 'color 0.2s, border-color 0.2s',
                whiteSpace: 'nowrap', marginBottom: '-1px',
              }}>
                <span style={{ color: active === m.id ? '#047098' : '#2a2a29', marginRight: '0.5rem' }}>{m.tag}</span>
                {m.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Module detail */}
          {mod && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '2rem', color: '#047098', marginBottom: '1rem', fontFamily: 'monospace' }}>{mod.icon}</div>
                <div className="label-tag" style={{ marginBottom: '1rem' }}>{mod.tag}</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '1.5rem', color: '#e8e8e7' }}>{mod.title}</h2>
                <p style={{ color: '#696968', lineHeight: 1.9, marginBottom: '2.5rem' }}>{mod.desc}</p>

                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: '#494948', textTransform: 'uppercase', marginBottom: '1rem' }}>Key Features</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {mod.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', fontSize: '0.9rem', color: '#a9a9a8', lineHeight: 1.6 }}>
                        <span style={{ color: '#047098', flexShrink: 0, fontFamily: 'monospace', marginTop: '2px' }}>›</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/contact" className="btn-primary">Request Technical Brief</Link>
              </div>

              <div style={{ border: '1px solid rgba(169,169,168,0.1)', padding: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '20px', height: '20px', borderTop: '2px solid #047098', borderLeft: '2px solid #047098' }} />
                <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '20px', height: '20px', borderBottom: '2px solid #047098', borderRight: '2px solid #047098' }} />
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: '#047098', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Technical Specifications</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                  {mod.specs.map((spec, i) => (
                    <div key={i} style={{ padding: '1rem', borderBottom: '1px solid rgba(169,169,168,0.07)', borderRight: i % 2 === 0 ? '1px solid rgba(169,169,168,0.07)' : 'none' }}>
                      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.1em', color: '#494948', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{spec.label}</div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#e8e8e7', letterSpacing: '0.02em' }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
                {/* Signal viz */}
                <div style={{ marginTop: '2rem', height: '80px', position: 'relative' }}>
                  <svg viewBox="0 0 400 80" style={{ width: '100%', height: '100%', opacity: 0.35 }} fill="none">
                    <line x1="0" y1="40" x2="400" y2="40" stroke="#047098" strokeWidth="0.5" />
                    {[30, 70, 110, 150, 190, 230, 270, 310, 350].map((x, i) => {
                      const h = [30, 15, 40, 10, 35, 20, 45, 12, 28][i]
                      return <rect key={i} x={x - 6} y={40 - h} width="12" height={h * 2} stroke="#047098" strokeWidth="0.5" fill="rgba(4,112,152,0.06)" />
                    })}
                    {[0, 100, 200, 300, 400].map((x, i) => <circle key={i} cx={x} cy={40} r="2.5" fill="#047098" />)}
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CUSTOM INTEGRATION ── */}
      <section style={{ padding: '8rem 2rem', background: 'rgba(26,26,25,0.4)', borderTop: '1px solid rgba(169,169,168,0.08)', borderBottom: '1px solid rgba(169,169,168,0.08)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Custom Integration Services</div>
          <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
            WE WORK WITH OEMS<br /><span style={{ color: '#047098' }}>AND ROBOTICS VENDORS.</span>
          </h2>
          <p className="reveal delay-200" style={{ maxWidth: '600px', color: '#696968', lineHeight: 1.9, marginBottom: '4rem' }}>
            The Quantrelis autonomy stack is designed for integration — not just out-of-box operation.
            We partner with OEMs and robotics vendors to embed our technology into their platforms,
            customized for their specific operational requirements.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(169,169,168,0.08)' }}>
            {services.map((s, i) => (
              <div key={i} className={`card-hover reveal delay-${(i % 3 + 1) * 100}`} style={{ background: '#0a0a09', padding: '2.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '14px', height: '14px', borderTop: '2px solid rgba(4,112,152,0.5)', borderLeft: '2px solid rgba(4,112,152,0.5)' }} />
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', color: '#047098', letterSpacing: '0.15em', marginBottom: '1.25rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#e8e8e7', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ color: '#696968', fontSize: '0.88rem', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK OVERVIEW ── */}
      <section style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Architecture Overview</div>
              <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>
                MODULAR BY<br /><span style={{ color: '#047098' }}>DESIGN.</span>
              </h2>
              <p className="reveal delay-200" style={{ color: '#696968', lineHeight: 1.9, marginBottom: '2rem' }}>
                The Quantrelis Autonomy Stack is built as a layered ROS 2 architecture where each module
                communicates via standardized DDS topics. This means any module can be swapped,
                upgraded, or customized without disrupting the rest of the stack.
              </p>
              <div className="reveal delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
                {['Designed for stability, scalability, and field reliability', 'Hardware agnostic — runs on Jetson, x86, ARM targets', 'Full ROS 2 ecosystem compatibility', 'Open integration API for third-party modules'].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#a9a9a8' }}>
                    <span style={{ color: '#047098', fontFamily: 'monospace' }}>›</span>{p}
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary reveal delay-400">Request Architecture Doc</Link>
            </div>

            {/* Stack diagram */}
            <div className="reveal delay-300" style={{ height: '380px' }}>
              <svg viewBox="0 0 320 380" style={{ width: '100%', height: '100%', opacity: 0.6 }} fill="none">
                {[
                  { y: 10, label: 'SENSORS', w: 280, sub: 'LiDAR · Camera · IMU · GNSS' },
                  { y: 80, label: 'PERCEPTION', w: 240, sub: 'Fusion · Detection · Tracking' },
                  { y: 150, label: 'LOCALIZATION', w: 200, sub: 'SLAM · State Estimation' },
                  { y: 220, label: 'PLANNING', w: 200, sub: 'Global · Local · Behavior' },
                  { y: 290, label: 'CONTROL', w: 240, sub: 'Loop · Safety · Actuation' },
                ].map((layer, i) => (
                  <g key={i}>
                    <rect x={(280 - layer.w) / 2} y={layer.y} width={layer.w} height="52"
                      stroke="#047098" strokeWidth="0.7" fill={i % 2 === 0 ? 'rgba(4,112,152,0.06)' : 'rgba(4,112,152,0.03)'}
                      strokeDasharray="1200" strokeDashoffset="1200"
                      style={{ animation: `draw-line 2.5s ease forwards ${0.2 + i * 0.25}s` }} />
                    <text x="140" y={layer.y + 22} fontFamily="monospace" fontSize="7.5" fill="#047098" opacity="0.9" textAnchor="middle" fontWeight="bold">{layer.label}</text>
                    <text x="140" y={layer.y + 38} fontFamily="monospace" fontSize="6" fill="#696968" opacity="0.7" textAnchor="middle">{layer.sub}</text>
                    {i < 4 && (
                      <line x1="140" y1={layer.y + 52} x2="140" y2={layer.y + 80} stroke="#047098" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.5" />
                    )}
                  </g>
                ))}
                {/* ROS 2 sidebar */}
                <rect x="272" y="10" width="36" height="332" stroke="rgba(4,112,152,0.25)" strokeWidth="0.5" fill="none" strokeDasharray="3 5" />
                <text x="290" y="180" fontFamily="monospace" fontSize="6" fill="#047098" opacity="0.4" textAnchor="middle" transform="rotate(90 290 180)">ROS 2 / DDS MIDDLEWARE</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(169,169,168,0.08)', background: 'linear-gradient(135deg, rgba(4,112,152,0.05) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            READY TO<br /><span style={{ color: '#047098' }}>INTEGRATE?</span>
          </h2>
          <p className="reveal delay-100" style={{ color: '#696968', marginBottom: '2.5rem' }}>
            Talk to our engineering team about integrating the Quantrelis Autonomy Stack
            into your platform. We start with a technical assessment — no commitments required.
          </p>
          <div className="reveal delay-200" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Start a Conversation</Link>
            <Link to="/career" className="btn-outline">Join the Team</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
