import Reveal from './Reveal'

export default function SectionHeading({ id, index, label, title }) {
  return (
    <header className="section-heading">
      <Reveal as="p" className="eyebrow">
        <span className="eyebrow__num">{index}</span>
        <span className="eyebrow__line" aria-hidden="true" />
        <span>{label}</span>
      </Reveal>
      <Reveal as="h2" id={id} delay={1} className="section-title">
        {title}
      </Reveal>
    </header>
  )
}
