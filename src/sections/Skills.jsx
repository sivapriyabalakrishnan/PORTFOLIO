import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" index="02" label="Skills" title="The tools I work with." />
        <div className="skills">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i % 3} className="skill-card">
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
