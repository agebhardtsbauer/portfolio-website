import { useFadeIn } from '../hooks/useFadeIn'
import { SectionLabel } from './SectionLabel'
import { Tag } from './Tag'
import { experience } from '../data/experience'

export function Experience() {
  const headingRef = useFadeIn<HTMLDivElement>()

  return (
    <section
      id="experience"
      style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}
    >
      <div ref={headingRef} className="fade-in" style={{ marginBottom: 48 }}>
        <SectionLabel text="Work Experience" />
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 36,
            color: 'var(--text)',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Where I've worked
        </h2>
      </div>

      {/* Timeline */}
      <div
        style={{
          position: 'relative',
          paddingLeft: 28,
          borderLeft: '2px solid',
          borderImage: 'linear-gradient(to bottom, var(--accent), transparent) 1',
        }}
      >
        {experience.map((entry, i) => (
          <TimelineEntry key={i} entry={entry} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}

function TimelineEntry({
  entry,
  delay,
}: {
  entry: (typeof experience)[number]
  delay: number
}) {
  const ref = useFadeIn<HTMLDivElement>(delay)

  return (
    <div
      ref={ref}
      className="fade-in"
      style={{ position: 'relative', marginBottom: 48 }}
    >
      {/* Dot */}
      <span
        style={{
          position: 'absolute',
          left: -35,
          top: 6,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: 'var(--accent)',
          border: '2px solid var(--bg)',
        }}
      />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 18,
            color: 'var(--text)',
            margin: 0,
          }}
        >
          {entry.role}
        </h3>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
          }}
        >
          {entry.dateRange}
        </span>
      </div>

      {/* Company */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          color: 'var(--accent2)',
          marginBottom: 16,
        }}
      >
        {entry.company}
      </div>

      {/* Bullets */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {entry.bullets.map((bullet, j) => (
          <li
            key={j}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: 'var(--muted)',
              lineHeight: 1.6,
              paddingLeft: 20,
              position: 'relative',
            }}
          >
            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>→</span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {entry.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  )
}
