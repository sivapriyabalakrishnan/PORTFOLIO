import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { about, profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about">
        <SectionHeading id="about-title" index="01" label="About" title={about.title} />
        <div className="about__body">
          {about.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i + 1} className={i === 0 ? 'about__lead' : ''}>
              {p}
            </Reveal>
          ))}
          <Reveal as="p" delay={4} className="about__langs">
            <span className="about__langs-label">Languages</span>
            {profile.languages.join(' · ')}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
