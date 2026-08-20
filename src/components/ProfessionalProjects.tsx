import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { SectionLabel } from './SectionLabel'
import { Modal } from './Modal'
import { professionalProjects } from '../data/professionalProjects'
import { useVersion } from '../context/VersionContext'

export function ProfessionalProjects() {
  const headingRef = useFadeIn<HTMLDivElement>()
  const version = useVersion()
  const [openId, setOpenId] = useState<string | null>(null)

  const items = professionalProjects
    .map((p) => ({ ...p, description: p.variants[version] }))
    .filter((p): p is typeof p & { description: string } => Boolean(p.description))

  if (!items.length) return null

  const active = items.find((p) => p.id === openId)

  return (
    <section id="professional-projects" style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
      <div ref={headingRef} className="fade-in" style={{ marginBottom: 16 }}>
        <SectionLabel text="Professional Work" />
      </div>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: 'var(--muted)',
          margin: '0 0 32px',
        }}
      >
        Built at Centene, internal so no public repo. Click a card for the full writeup.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2,
        }}
      >
        {items.map((project, i) => (
          <ProfessionalProjectCard key={project.id} project={project} delay={i * 80} onOpen={() => setOpenId(project.id)} />
        ))}
      </div>

      {active && (
        <Modal title={active.name} tags={active.tags} onClose={() => setOpenId(null)}>
          <p style={{ margin: 0 }}>{active.description}</p>
        </Modal>
      )}
    </section>
  )
}

function ProfessionalProjectCard({
  project,
  delay,
  onOpen,
}: {
  project: { id: string; name: string; tags: string[]; description: string }
  delay: number
  onOpen: () => void
}) {
  const ref = useFadeIn<HTMLButtonElement>(delay)

  return (
    <button
      ref={ref}
      className="fade-in"
      onClick={onOpen}
      style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transition: 'background 0.2s',
        textAlign: 'left',
        cursor: 'pointer',
        font: 'inherit',
        color: 'inherit',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg3)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg2)')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 16, color: 'var(--accent)' }}>{'{ }'}</span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: 'var(--muted)',
            letterSpacing: '0.05em',
          }}
        >
          ⊕ details
        </span>
      </div>

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

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
          color: 'var(--muted)',
          margin: 0,
          lineHeight: 1.6,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          paddingTop: 12,
          borderTop: '1px solid var(--border)',
        }}
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: 'var(--muted)',
              letterSpacing: '0.04em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}
