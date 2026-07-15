interface Props {
  text: string
}

export function SectionLabel({ text }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      <span
        style={{ fontFamily: "'DM Mono', monospace", color: 'var(--muted)', fontSize: 13 }}
        className="uppercase tracking-widest"
      >
        {text}
      </span>
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}
