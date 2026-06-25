import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { contact } from '../data/contact'

export function Contact() {
  const ref = useFadeIn<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  const links = [
    { label: 'Email', href: null },
    { label: 'GitHub', href: contact.github },
    { label: 'LinkedIn', href: contact.linkedin },
  ]

  function handleEmail(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const address = `${contact.emailUser}@${contact.emailDomain}`
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section
      id="contact"
      style={{
        padding: '120px 48px',
        maxWidth: 900,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <div ref={ref} className="fade-in">
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 56px)',
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
          }}
        >
          Let's build something.
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            color: 'var(--muted)',
            margin: '0 0 40px',
          }}
        >
          Open to new opportunities — reach out and let's talk.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href ?? '#'}
              onClick={label === 'Email' ? handleEmail : undefined}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="btn-chamfer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '14px 28px',
                background: 'transparent',
                color: label === 'Email' && copied ? 'var(--accent)' : 'var(--text)',
                border: `1px solid ${label === 'Email' && copied ? 'var(--accent)' : 'var(--border-hover)'}`,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = label === 'Email' && copied ? 'var(--accent)' : 'var(--border-hover)'
                e.currentTarget.style.color = label === 'Email' && copied ? 'var(--accent)' : 'var(--text)'
              }}
            >
              {label === 'Email' && copied ? 'Copied!' : label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
