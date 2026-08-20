import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  title: string
  tags: string[]
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ title, tags, onClose, children }: Props) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(13,15,18,0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border-hover)',
          maxWidth: 640,
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: 32,
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'transparent',
            border: '1px solid var(--border-hover)',
            color: 'var(--muted)',
            width: 28,
            height: 28,
            cursor: 'pointer',
            fontFamily: "'DM Mono', monospace",
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 22,
            color: 'var(--text)',
            margin: '0 24px 16px 0',
          }}
        >
          {title}
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                background: 'var(--tag-bg)',
                border: '1px solid var(--tag-border)',
                color: 'var(--accent)',
                padding: '2px 8px',
                borderRadius: 2,
                letterSpacing: '0.04em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: 'var(--muted)',
            lineHeight: 1.7,
          }}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}
