import Reveal from '../components/Reveal'
import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal as="p" className="eyebrow eyebrow--center">
          <span className="eyebrow__num">07</span>
          <span className="eyebrow__line" aria-hidden="true" />
          <span>Contact</span>
        </Reveal>
        <Reveal as="h2" id="contact-title" delay={1} className="contact__title">
          {contact.heading}
        </Reveal>
        <Reveal as="p" delay={2} className="contact__lead">
          {contact.lead}
        </Reveal>
        <Reveal as="ul" delay={3} className="contact__list">
          <li>
            <a href={`mailto:${contact.email}`}>
              <small>Email</small>
              <span>{contact.email}</span>
            </a>
          </li>
          <li>
            <a href={contact.linkedin.href} target="_blank" rel="noopener noreferrer">
              <small>LinkedIn</small>
              <span>{contact.linkedin.label}</span>
              <em className="sr-only"> (opens in a new tab)</em>
            </a>
          </li>
          <li>
            <div>
              <small>Location</small>
              <span>{contact.location}</span>
            </div>
          </li>
        </Reveal>
      </div>
    </section>
  )
}
