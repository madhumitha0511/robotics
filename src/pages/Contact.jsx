import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const inputStyle = {
  width: '100%', background: 'transparent', border: 'none',
  borderBottom: '1px solid rgba(169,169,168,0.2)', padding: '1rem 0',
  color: '#e8e8e7', fontFamily: "'Barlow', sans-serif", fontWeight: 300,
  fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s',
}
const labelStyle = {
  display: 'block', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem',
  letterSpacing: '0.15em', textTransform: 'uppercase', color: '#494948', marginBottom: '0.25rem',
}

export default function Contact() {
  useReveal()
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  const contactTypes = [
    'OEM Integration Inquiry',
    'Autonomy Stack Licensing',
    'Custom Development Project',
    'Technical Partnership',
    'Research Collaboration',
    'General Inquiry',
  ]

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ minHeight: '52vh', display: 'flex', alignItems: 'flex-end', padding: '120px 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '35%', right: 0, width: '55%', height: '1px', background: 'linear-gradient(90deg, rgba(4,112,152,0.2), transparent)' }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="label-tag" style={{ marginBottom: '1.5rem' }}>◈ Contact</div>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 1, color: '#e8e8e7' }}>
            LET'S BUILD<br /><span style={{ color: '#047098' }}>INTELLIGENT</span><br />
            <span style={{ color: '#047098' }}>MOBILITY.</span>
          </h1>
          <p style={{ maxWidth: '520px', marginTop: '1.5rem', color: '#696968', lineHeight: 1.85 }}>
            Whether you're an OEM, robotics manufacturer, or mobility startup, we're ready to collaborate.
            We start every engagement with a direct technical conversation — no sales cycle.
          </p>
        </div>
        <div className="h-rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

            {/* Form */}
            <div className="reveal">
              {!submitted ? (
                <>
                  <div className="label-tag" style={{ marginBottom: '2rem' }}>Send a Message</div>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input name="name" required value={formData.name} onChange={handleChange}
                        style={inputStyle} placeholder="Your name"
                        onFocus={e => e.target.style.borderBottomColor = '#047098'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(169,169,168,0.2)'} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange}
                          style={inputStyle} placeholder="you@company.com"
                          onFocus={e => e.target.style.borderBottomColor = '#047098'}
                          onBlur={e => e.target.style.borderBottomColor = 'rgba(169,169,168,0.2)'} />
                      </div>
                      <div>
                        <label style={labelStyle}>Organisation</label>
                        <input name="company" value={formData.company} onChange={handleChange}
                          style={inputStyle} placeholder="Company / University"
                          onFocus={e => e.target.style.borderBottomColor = '#047098'}
                          onBlur={e => e.target.style.borderBottomColor = 'rgba(169,169,168,0.2)'} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Enquiry Type</label>
                      <select name="type" value={formData.type} onChange={handleChange}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23047098' strokeWidth='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center', paddingRight: '1.5rem' }}
                        onFocus={e => e.target.style.borderBottomColor = '#047098'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(169,169,168,0.2)'}>
                        <option value="" style={{ background: '#0a0a09' }}>Select enquiry type...</option>
                        {contactTypes.map(t => <option key={t} value={t} style={{ background: '#0a0a09' }}>{t}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Message *</label>
                      <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                        style={{ ...inputStyle, resize: 'vertical', border: '1px solid rgba(169,169,168,0.2)', borderBottom: undefined, padding: '1rem' }}
                        placeholder="Describe your project, platform, and what you're looking to build..."
                        onFocus={e => e.target.style.borderColor = '#047098'}
                        onBlur={e => e.target.style.borderColor = 'rgba(169,169,168,0.2)'} />
                    </div>

                    <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ border: '1px solid rgba(4,112,152,0.3)', padding: '3rem', position: 'relative', textAlign: 'center' }}>
                  <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '20px', height: '20px', borderTop: '2px solid #047098', borderLeft: '2px solid #047098' }} />
                  <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '20px', height: '20px', borderBottom: '2px solid #047098', borderRight: '2px solid #047098' }} />
                  <div style={{ width: '48px', height: '48px', border: '1px solid #047098', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#047098', fontSize: '1.2rem' }}>✓</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.15em', color: '#047098', textTransform: 'uppercase', marginBottom: '1rem' }}>Message Received</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#e8e8e7', marginBottom: '1rem' }}>Transmission Complete.</h3>
                  <p style={{ color: '#696968', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    We will review your message and respond within 1 business day.
                    If your enquiry is technical, it will be routed directly to an engineer.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Direct contact */}
              <div className="reveal delay-200" style={{ marginBottom: '3rem' }}>
                <div className="label-tag" style={{ marginBottom: '1.5rem' }}>Direct Contact</div>
                {[
                  { role: 'General Inquiries', email: 'hello@quantrelisdynamics.com', note: 'OEM, partnerships, startups' },
                  { role: 'Careers & Internships', email: 'careers@quantrelisdynamics.com', note: 'Internship applications' },
                ].map((c, i) => (
                  <div key={i} style={{ padding: '1.5rem 0', borderBottom: '1px solid rgba(169,169,168,0.08)' }}>
                    <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.12em', color: '#047098', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{c.role}</div>
                    <div style={{ color: '#a9a9a8', fontSize: '0.92rem', fontFamily: "'Share Tech Mono', monospace", marginBottom: '0.25rem' }}>{c.email}</div>
                    <div style={{ color: '#494948', fontSize: '0.8rem' }}>{c.note}</div>
                  </div>
                ))}
              </div>

              {/* Who we work with */}
              <div className="reveal delay-300" style={{ marginBottom: '3rem', border: '1px solid rgba(169,169,168,0.1)', padding: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '14px', height: '14px', borderTop: '2px solid rgba(4,112,152,0.5)', borderLeft: '2px solid rgba(4,112,152,0.5)' }} />
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: '#047098', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Who We Work With</div>
                {[
                  'OEMs integrating autonomy into vehicles',
                  'Robotics manufacturers seeking navigation stacks',
                  'Mobility startups building field-deployable systems',
                  'Research & innovation labs needing production-grade code',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.6rem 0', borderBottom: i < 3 ? '1px solid rgba(169,169,168,0.06)' : 'none', fontSize: '0.87rem', color: '#696968' }}>
                    <span style={{ color: '#047098', fontFamily: 'monospace', flexShrink: 0, marginTop: '2px' }}>›</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Response time */}
              <div className="reveal delay-400" style={{ background: 'rgba(4,112,152,0.04)', border: '1px solid rgba(4,112,152,0.15)', padding: '1.5rem' }}>
                <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: '#047098', textTransform: 'uppercase', marginBottom: '1rem' }}>Response Times</div>
                {[
                  { label: 'General Inquiry', time: '< 1 business day' },
                  { label: 'Technical Partnership', time: '< 2 business days' },
                  { label: 'OEM Integration', time: '< 24 hours' },
                ].map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: i < 2 ? '1px solid rgba(169,169,168,0.06)' : 'none', fontSize: '0.83rem' }}>
                    <span style={{ color: '#696968' }}>{r.label}</span>
                    <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.7rem', color: '#a9a9a8' }}>{r.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION CTA ── */}
      <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(169,169,168,0.08)', background: 'rgba(26,26,25,0.4)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="label-tag reveal" style={{ marginBottom: '1.5rem' }}>Ready to Start?</div>
              <h2 className="reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                ENGINEERING<br /><span style={{ color: '#047098' }}>AWAITS.</span>
              </h2>
            </div>
            <p className="reveal delay-200" style={{ color: '#696968', lineHeight: 1.9 }}>
              The fastest path to a working autonomy system starts with a direct conversation
              between your engineers and ours. No RFPs, no sales demos — just a technical
              discussion about your platform and what it needs to operate in the field.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
