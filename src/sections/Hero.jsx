import { profile } from '../data/content'
import NameWords from '../components/NameWords'
import portrait from '../assets/portrait-cutout.webp'

export default function Hero() {
  const [roleA, roleB] = profile.roles
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__lead">
          {/* Invisible slot: it reserves the name's place; the travelling name is drawn over it. */}
          <h1 id="hero-title" className="hero__name" data-name-slot="hero">
            <NameWords />
          </h1>

          <p className="hero__roles">
            <span>{roleA}</span>
            <span className="hero__roles-sep" aria-hidden="true">/</span>
            <span className="hero__roles-b">{roleB}</span>
          </p>

          <p className="hero__label">
            <span>{profile.role}</span>
          </p>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__cta">
            <a className="btn btn--solid" href="#projects">
              View projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <figure className="hero__portrait">
          <img src={portrait} alt={`Portrait of ${profile.name}`} width="825" height="880" decoding="async" fetchPriority="high" />
        </figure>
      </div>
    </section>
  )
}
