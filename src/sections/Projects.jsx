import { useCallback, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectPanel from '../components/ProjectPanel'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  // Clicking the open project again collapses it.
  const toggle = useCallback((id) => setOpenId((cur) => (cur === id ? null : id)), [])

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" index="03" label="Projects" title="Selected work." />
        <Reveal delay={2} className="panels" data-has-open={openId !== null}>
          {projects.map((p, i) => (
            <ProjectPanel
              key={p.id}
              project={p}
              index={i}
              isOpen={openId === p.id}
              anyOpen={openId !== null}
              onToggle={toggle}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
