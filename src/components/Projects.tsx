import { useFadeIn } from '../hooks/useFadeIn'
import { SectionLabel } from './SectionLabel'
import { projects } from '../data/projects'

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572a5',
  Go: '#00add8',
  Rust: '#dea584',
  Shell: '#89e051',
  Zig: '#e35a2a',
  Swift: '#f05138',
}

export function Projects() {
  const headingRef = useFadeIn<HTMLDivElement>()

  return (
    <section
      id="projects"
      style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}
    >
      <div ref={headingRef} className="fade-in" style={{ marginBottom: 48 }}>
        <SectionLabel text="Selected Work" />
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
          Things I've built
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[number]
  delay: number
}) {
  const ref = useFadeIn<HTMLDivElement>(delay)
  const langColor = LANGUAGE_COLORS[project.language] ?? 'var(--muted)'

  return (
    <div
      ref={ref}
      className="fade-in"
      style={{
        background: 'var(--bg2)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
    >
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 16, color: 'var(--accent)' }}>
          {'</>'}
        </span>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: 'var(--muted)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        >
          ↗ github
        </a>
      </div>

      {/* Project name */}
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 17,
          color: 'var(--text)',
          margin: 0,
        }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: 'var(--muted)',
          margin: 0,
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Footer row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 12,
          borderTop: '1px solid var(--border)',
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: 'var(--muted)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: langColor,
              display: 'inline-block',
            }}
          />
          {project.language}
        </span>
        <span>★ {project.stars}</span>
      </div>
    </div>
  )
}
