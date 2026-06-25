export function Nav() {
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
        }}
      >
        ./alan
      </a>

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
    </nav>
  )
}
