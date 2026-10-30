import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading
          id="certifications-title"
          index="05"
          label="Certifications and professional training"
          title="Always learning."
        />
        <ul className="certs">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i} className="cert">
              <div>
                <h3>{c.title}</h3>
                {c.status && <span className="cert__status">{c.status}</span>}
              </div>
              <p className="cert__issuer">{c.issuer}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
