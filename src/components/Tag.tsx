interface Props {
  label: string
}

export function Tag({ label }: Props) {
  return (
    <span
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
      {label}
    </span>
  )
}
