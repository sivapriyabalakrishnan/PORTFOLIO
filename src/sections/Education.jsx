import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" index="04" label="Education" title="Where I learned." />
        <ol className="timeline">
          {education.map((e, i) => (
            <Reveal as="li" key={e.institution} delay={i + 1} className="timeline__item">
              <p className="timeline__period">{e.period}</p>
              <h3>{e.institution}</h3>
              {e.details.map((d) => (
                <p key={d} className="timeline__detail">
                  {d}
                </p>
              ))}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
