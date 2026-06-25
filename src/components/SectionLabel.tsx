interface Props {
  text: string
}

export function SectionLabel({ text }: Props) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span
        style={{ fontFamily: "'DM Mono', monospace", color: 'var(--muted)', fontSize: 11 }}
        className="uppercase tracking-widest"
      >
        {text}
      </span>
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}
