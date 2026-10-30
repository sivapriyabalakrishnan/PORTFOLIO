import { useReveal } from '../hooks/useReveal'

/** Fades/slides children in when scrolled into view. `delay` is a step index (0, 1, 2…). */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--d${Math.min(delay, 6)} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
