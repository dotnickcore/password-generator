import type { SpanProps } from '../../types/SpanProps'

function Span({ className, children }: SpanProps) {
  return (
    <span className={className}>{children}</span>
  )
}

export default Span