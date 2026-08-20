import { Link } from 'react-router-dom'
import { NAV_VERSIONS } from '../types'
import { useVersion } from '../context/VersionContext'
import { resumeContent } from '../data/resumeContent'

export function Nav() {
  const version = useVersion()

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: 56,
        background: 'rgba(13,15,18,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        gap: 24,
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 14,
          color: 'var(--accent)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
          flexShrink: 0,
        }}
      >
        ./alan
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginLeft: 'auto' }}>
        <div
          className="nav-links"
          style={{ display: 'flex', gap: 32 }}
        >
          {['skills', 'experience', 'projects', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: 'var(--muted)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {id}
            </a>
          ))}
        </div>

        <div
          className="version-switcher"
          style={{
            display: 'flex',
            gap: 4,
            border: '1px solid var(--border)',
            padding: 3,
          }}
        >
          {NAV_VERSIONS.map((v) => {
            const isActive = v === version
            return (
              <Link
                key={v}
                to={`/${v}`}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '5px 10px',
                  color: isActive ? '#0d0f12' : 'var(--muted)',
                  background: isActive ? 'var(--accent)' : 'transparent',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--muted)'
                }}
              >
                {resumeContent[v].navLabel}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
