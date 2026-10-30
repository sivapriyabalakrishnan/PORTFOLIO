import { memo } from 'react'

/**
 * One expandable project panel.
 * Desktop: horizontal accordion (open panel grows, siblings collapse to a slim vertical strip).
 * Mobile:  stacked accordion (body slides open beneath the header).
 */
function ProjectPanel({ project, index, isOpen, anyOpen, onToggle }) {
  const num = String(index + 1).padStart(2, '0')
  const bodyId = `${project.id}-body`
  const titleId = `${project.id}-title`
  const state = isOpen ? 'is-open' : anyOpen ? 'is-dim' : ''

  return (
    <article className={`panel panel--${index % 2} ${state}`}>
      <div className="panel__glow" aria-hidden="true" />

      <h3 className="panel__head">
        <button
          type="button"
          className="panel__toggle"
          aria-expanded={isOpen}
          aria-controls={bodyId}
          onClick={() => onToggle(project.id)}
        >
          <span className="panel__num">{num}</span>
          <span id={titleId} className="panel__title">
            {project.title}
          </span>
          <span className="panel__icon" aria-hidden="true" />
        </button>
      </h3>

      {/* Slim vertical title shown only while another panel is open (desktop) */}
      <span className="panel__vtitle" aria-hidden="true">
        {project.title}
      </span>

      <div id={bodyId} role="region" aria-labelledby={titleId} className="panel__body" inert={!isOpen}>
        <div className="panel__clip">
          <div className="panel__content">
            <div className="panel__col">
              <h4>Overview</h4>
              <p>{project.overview}</p>
              <h4>Technologies</h4>
              <ul className="chips chips--light">
                {project.technologies.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="panel__col">
              <h4>Key features</h4>
              <ul className="features">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default memo(ProjectPanel)
