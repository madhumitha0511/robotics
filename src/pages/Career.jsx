import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const internshipAreas = [
  {
    id: 'ros2',
    title: 'ROS 2 Development',
    icon: '◈',
    desc: 'Work directly on the ROS 2 node architecture, DDS configuration, and inter-module communication layer of the Quantrelis Autonomy Stack.',
    tasks: ['Implement and test ROS 2 nodes for new stack modules', 'Optimize DDS QoS configurations for real-time performance', 'Write integration tests and validate system behavior', 'Contribute to internal documentation and architecture specs'],
  },
  {
    id: 'nav',
    title: 'Autonomous Navigation',
    icon: '◉',
    desc: 'Develop and tune path planning and localization algorithms. Work on SLAM pipelines and motion planning for real-world deployment scenarios.',
    tasks: ['Implement and benchmark planning algorithms (MPC, DWA, TEB)', 'Tune SLAM pipelines for specific sensor configurations', 'Run simulation experiments and analyze performance metrics', 'Contribute to obstacle avoidance behavior trees'],
  },
  {
    id: 'embedded',
    title: 'Embedded Mobility Systems',
    icon: '◫',
    desc: 'Work on embedded firmware and hardware abstraction layers that interface the autonomy stack with physical vehicle actuators and sensors.',
    tasks: ['Develop HAL code for sensor and actuator interfaces', 'Optimize real-time control loops on embedded targets', 'Profile and reduce latency in the sensing pipeline', 'Support hardware bring-up and BSP configuration'],
  },
  {
    id: 'sensor',
    title: 'Sensor Integration',
    icon: '◐',
    desc: 'Integrate new sensor modalities into the perception layer. Calibration, driver development, and fusion algorithm design.',
    tasks: ['Write ROS 2 drivers for LiDAR, camera, and IMU devices', 'Develop extrinsic and intrinsic calibration routines', 'Implement sensor fusion algorithms for state estimation', 'Validate sensor data quality and pipeline reliability'],
  },
]

const perks = [
  { icon: '◈', title: 'Real System Contributions', desc: 'Interns contribute to live system modules — not observational tasks. Your code goes into the stack.' },
  { icon: '◉', title: 'Mentorship from Engineers', desc: 'Each intern is paired with a senior engineer who codes alongside you and reviews your work daily.' },
  { icon: '◫', title: 'Hardware Access', desc: 'Hands-on access to our sensor lab, embedded compute platforms, and test vehicle systems.' },
  { icon: '◐', title: 'Flexible Duration', desc: 'Internship durations range from 3–6 months. Remote and on-site options available depending on role.' },
  { icon: '◑', title: 'Portfolio-Grade Work', desc: 'Produce documented, code-reviewed contributions you can reference publicly — with our written permission.' },
  { icon: '◒', title: 'Pathway to Full-Time', desc: 'Strong interns are considered for full-time engineering roles as the team grows.' },
]

export default function Career() {
  useReveal()
  const [expanded, setExpanded] = useState(null)

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'flex-end', padding: '120px 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />

        {/* animated circuit trace */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05, pointerEvents: 'none' }} viewBox="0 0 1400 560" fill="none">
          <path d="M 0 280 H 180 V 140 H 460 V 280 H 680 V 420 H 900 V 280 H 1120 V 180 H 1400" stroke="#047098" strokeWidth="1.2"
            strokeDasharray="3000" strokeDashoffset="3000"
            style={{ animation: 'draw-line 6s ease forwards 0.5s' }} />
          {[180, 460, 680, 900, 1120].map((x, i) => (
            <circle key={i} cx={x} cy={i % 2 === 0 ? (i === 0 ? 140 : 420) : 280} r="5" fill="#047098"
              style={{ animation: `blink ${1 + i * 0.2}s ease-in-out infinite` }} />
          ))}
        </svg>

        <div style={{ position: 'absolute', bottom: '20%', right: 0, width: '45%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(4,112,152,0.2))' }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="label-tag" style={{ marginBottom: '1.5rem' }}>◈ Careers at Quantrelis Dynamics</div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 1, color: '#e8e8e7' }}>
            BUILD THE FUTURE<br /><span style={{ color: '#047098' }}>OF MOBILITY.</span>
          </h1>
          <p style={{ maxWidth: '540px', marginTop: '1.5rem', color: '#696968', lineHeight: 1.85 }}>
            Quantrelis Dynamics is building production-grade autonomy systems. We are looking
            for engineers who think in architecture, systems, and deployment — not just features.
          </p>
        </div>
        <div className="h-rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ── INTERNSHIP PROGRAM ── */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Internship Program</div>
              <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>
                ENGINEERING-FOCUSED.<br /><span style={{ color: '#047098' }}>NOT OBSERVATIONAL.</span>
              </h2>
              <p className="reveal delay-200" style={{ color: '#696968', lineHeight: 1.9 }}>
                Our internship program is built around direct, substantive engineering contribution.
                Every intern is embedded in a live project team and writes production-grade code
                from day one. We do not do research reports or presentation-only projects.
              </p>
            </div>

            {/* Quick stats */}
            <div className="reveal delay-200" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(169,169,168,0.08)' }}>
              {[
                { val: '4', sub: 'Technical tracks', note: 'ROS 2, Nav, Embedded, Sensors' },
                { val: '3–6mo', sub: 'Duration', note: 'Flexible per role' },
                { val: '100%', sub: 'Code contribution', note: 'Production modules' },
                { val: 'Remote', sub: 'Options available', note: 'Depending on track' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#0a0a09', padding: '2rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '10px', height: '10px', borderTop: '1px solid rgba(4,112,152,0.4)', borderLeft: '1px solid rgba(4,112,152,0.4)' }} />
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2rem', color: '#e8e8e7', lineHeight: 1, marginBottom: '0.5rem' }}>{s.val}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#047098', marginBottom: '0.25rem' }}>{s.sub}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: '#494948', letterSpacing: '0.06em' }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship tracks */}
          <div className="label-tag reveal" style={{ marginBottom: '2rem' }}>Internship Tracks</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(169,169,168,0.08)' }}>
            {internshipAreas.map((area, i) => (
              <div key={i} style={{ background: '#0a0a09' }}>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  style={{ width: '100%', background: 'none', border: 'none', cursor: 'none', padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ fontSize: '1.3rem', color: '#047098', fontFamily: 'monospace', flexShrink: 0 }}>{area.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#e8e8e7', marginBottom: '3px' }}>{area.title}</div>
                      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: '#494948', letterSpacing: '0.08em' }}>Engineering Internship</div>
                    </div>
                  </div>
                  <div style={{ width: '24px', height: '24px', border: '1px solid rgba(169,169,168,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#047098', fontSize: '1rem', transition: 'transform 0.3s', transform: expanded === i ? 'rotate(45deg)' : 'rotate(0)', flexShrink: 0 }}>+</div>
                </button>

                {expanded === i && (
                  <div style={{ padding: '0 2rem 2rem', borderTop: '1px solid rgba(169,169,168,0.08)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    <div style={{ paddingTop: '1.5rem' }}>
                      <p style={{ color: '#696968', fontSize: '0.9rem', lineHeight: 1.8 }}>{area.desc}</p>
                    </div>
                    <div style={{ paddingTop: '1.5rem' }}>
                      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', color: '#047098', textTransform: 'uppercase', marginBottom: '1rem' }}>What You'll Work On</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {area.tasks.map((task, j) => (
                          <li key={j} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: '#a9a9a8', lineHeight: 1.6 }}>
                            <span style={{ color: '#047098', flexShrink: 0, fontFamily: 'monospace', marginTop: '2px' }}>›</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: '7rem 2rem', background: 'rgba(26,26,25,0.4)', borderTop: '1px solid rgba(169,169,168,0.08)', borderBottom: '1px solid rgba(169,169,168,0.08)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>What You Get</div>
          <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem' }}>
            BUILT FOR<br /><span style={{ color: '#047098' }}>ENGINEERS.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(169,169,168,0.08)' }}>
            {perks.map((p, i) => (
              <div key={i} className={`card-hover reveal delay-${(i % 3 + 1) * 100}`} style={{ background: '#0a0a09', padding: '2.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '16px', height: '16px', borderTop: '2px solid rgba(4,112,152,0.45)', borderLeft: '2px solid rgba(4,112,152,0.45)' }} />
                <div style={{ fontSize: '1.3rem', color: '#047098', marginBottom: '1.5rem', fontFamily: 'monospace' }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#e8e8e7', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: '#696968', fontSize: '0.88rem', lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO APPLY ── */}
      <section style={{ padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>How to Apply</div>
              <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>
                THREE THINGS.<br /><span style={{ color: '#047098' }}>NO FLUFF.</span>
              </h2>
              <p className="reveal delay-200" style={{ color: '#696968', lineHeight: 1.9, marginBottom: '2.5rem' }}>
                We review applications in order of receipt. We do not use automated screening.
                Every application is read by an engineer. We respond within 5 business days.
              </p>

              {/* What to submit */}
              <div className="reveal delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                  { n: '01', title: 'Resume or CV', desc: 'Your experience, education, and relevant technical background. One page preferred — two pages maximum.' },
                  { n: '02', title: 'GitHub or LinkedIn Portfolio', desc: 'Show us your code. Public repositories, project writeups, or documented technical work. We want to see how you build things.' },
                  { n: '03', title: 'Short Technical Statement', desc: 'Two to four sentences on which track interests you and one technical problem in autonomy you find compelling. No boilerplate.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.25rem', border: '1px solid rgba(169,169,168,0.08)' }}>
                    <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#047098', letterSpacing: '0.1em', flexShrink: 0, paddingTop: '2px' }}>{item.n}</div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#e8e8e7', marginBottom: '0.4rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.85rem', color: '#696968', lineHeight: 1.7 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application panel */}
            <div className="reveal delay-200">
              <div style={{ border: '1px solid rgba(4,112,152,0.25)', padding: '2.5rem', position: 'relative', background: 'rgba(4,112,152,0.03)' }}>
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '20px', height: '20px', borderTop: '2px solid #047098', borderLeft: '2px solid #047098' }} />
                <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '20px', height: '20px', borderBottom: '2px solid #047098', borderRight: '2px solid #047098' }} />

                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: '#047098', textTransform: 'uppercase', marginBottom: '2rem' }}>Application Channel</div>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '2rem', color: '#e8e8e7', letterSpacing: '0.02em', marginBottom: '0.5rem' }}>
                    careers@
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '2rem', color: '#047098', letterSpacing: '0.02em' }}>
                    quantrelisdynamics.com
                  </div>
                </div>

                <div className="h-rule" style={{ marginBottom: '2rem', opacity: 0.3 }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.1em', color: '#494948', textTransform: 'uppercase' }}>Email Subject Format</div>
                  <div style={{ background: '#111110', border: '1px solid rgba(169,169,168,0.1)', padding: '0.75rem 1rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.72rem', color: '#a9a9a8', letterSpacing: '0.05em' }}>
                    INTERN — [TRACK] — [YOUR NAME]
                  </div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', color: '#494948', letterSpacing: '0.06em' }}>
                    Example: INTERN — ROS 2 — Jane Smith
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1.25rem', background: 'rgba(4,112,152,0.04)', border: '1px solid rgba(4,112,152,0.12)' }}>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.12em', color: '#047098', textTransform: 'uppercase' }}>Response Commitment</div>
                  {[
                    { label: 'Acknowledgement', time: '< 24 hours' },
                    { label: 'Full Review', time: '< 5 business days' },
                    { label: 'Technical Interview', time: 'Week 2 if advancing' },
                  ].map((r, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                      <span style={{ color: '#696968' }}>{r.label}</span>
                      <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#a9a9a8' }}>{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Or use contact form */}
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: '#494948', letterSpacing: '0.08em' }}>OR USE THE </span>
                <Link to="/contact" style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', color: '#047098', letterSpacing: '0.08em', textDecoration: 'none', borderBottom: '1px solid rgba(4,112,152,0.3)', paddingBottom: '1px' }}>CONTACT FORM</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(169,169,168,0.08)', background: 'linear-gradient(135deg, rgba(4,112,152,0.05) 0%, transparent 60%)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="label-tag reveal" style={{ marginBottom: '2rem' }}>Questions?</div>
          <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
            REACH OUT<br /><span style={{ color: '#047098' }}>DIRECTLY.</span>
          </h2>
          <p className="reveal delay-200" style={{ color: '#696968', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            If you have questions about the program, specific tracks, or whether your background
            is a fit — just send us a note. We respond to all engineering inquiries.
          </p>
          <Link to="/contact" className="btn-primary reveal delay-300">Send a Message</Link>
        </div>
      </section>
    </main>
  )
}
