import type { SpanProps } from '../../types/SpanProps';

function Span({ className, style, children }: SpanProps) {
  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}

export default Span;
