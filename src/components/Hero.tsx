import { useFadeIn } from '../hooks/useFadeIn'

export function Hero() {
  const ref = useFadeIn<HTMLDivElement>()

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 48px 80px',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <div ref={ref} className="fade-in" style={{ maxWidth: 720 }}>
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 24,
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          <span
            className="pulse-dot"
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
            }}
          />
          Available for work
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(52px, 8vw, 88px)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: 'var(--text)',
            margin: '0 0 20px',
          }}
        >
          Alan Gebhardtsbauer
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: 20,
            color: 'var(--muted)',
            margin: '0 0 24px',
          }}
        >
          Software Engineer &amp;{' '}
          <span style={{ color: 'var(--accent2)' }}>Test Automation Specialist</span>
        </p>

        {/* Bio */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            color: 'var(--muted)',
            lineHeight: 1.7,
            margin: '0 0 40px',
            maxWidth: 560,
          }}
         >
         I architect and build scaleable and robust test automation frameworks. In service of this primary goal I have built technical proficiencies across the stack; SQL data transformation pipelines, AWS services, front-end frameworks, web apis, bash scripting and CICD to name a few. I'm Currently pioneering agentic QA workflows with Playwright MCP: agents that organize test repositories, evaluate Jira tickets for readiness, and self-heal when things go wrong. I approach every problem from the developer, tester, and end-user perspective, and I care deeply about the products that I build and the people I work with.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a
            href="#projects"
            className="btn-chamfer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 28px',
              background: 'var(--accent)',
              color: '#0d0f12',
              fontWeight: 500,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-chamfer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 28px',
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border-hover)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-hover)'
              e.currentTarget.style.color = 'var(--text)'
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
