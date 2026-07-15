import { useFadeIn } from '../hooks/useFadeIn'
import { SectionLabel } from './SectionLabel'
import { skills } from '../data/skills'

export function Skills() {
  const headingRef = useFadeIn<HTMLDivElement>()

  return (
    <section
      id="skills"
      style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}
    >
      <div ref={headingRef} className="fade-in" style={{ marginBottom: 48 }}>
        <SectionLabel text="Skills & Stack" />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 1,
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}
      >
        {skills.map((category, i) => (
          <SkillCard key={category.label} category={category} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({
  category,
  delay,
}: {
  category: (typeof skills)[number]
  delay: number
}) {
  const ref = useFadeIn<HTMLDivElement>(delay)

  return (
    <div
      ref={ref}
      className="fade-in"
      style={{
        background: 'var(--bg2)',
        padding: '28px 24px',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
    >
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: 'var(--accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: 16,
        }}
      >
        {category.label}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {category.items.map((item) => (
          <li
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: 'var(--muted)',
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: 'var(--accent)',
                flexShrink: 0,
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
