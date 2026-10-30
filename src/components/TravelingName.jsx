import { useEffect, useRef } from 'react'
import { profile } from '../data/content'

const words = profile.name.split(' ')
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const lerp = (a, b, t) => a + (b - a) * t
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const STAGGER = 0.05

const em = (cs) => {
  const ls = parseFloat(cs.letterSpacing)
  return Number.isFinite(ls) ? ls / parseFloat(cs.fontSize) : 0
}

function measure() {
  const hero = document.querySelectorAll('[data-name-slot="hero"] [data-w]')
  const nav = document.querySelectorAll('[data-name-slot="nav"] [data-w]')
  if (hero.length !== words.length || nav.length !== words.length) return null
  const sy = window.scrollY
  const list = [...hero].map((h, i) => {
    const hr = h.getBoundingClientRect()
    const nr = nav[i].getBoundingClientRect()
    const hs = getComputedStyle(h)
    const ns = getComputedStyle(nav[i])
    return {
      x0: hr.left, y0: hr.top + hr.height / 2 + sy, // hero position in document space
      x1: nr.left, y1: nr.top + nr.height / 2, // navbar is fixed: viewport space
      f0: parseFloat(hs.fontSize), f1: parseFloat(ns.fontSize),
      l0: em(hs), l1: em(ns),
    }
  })
  const last = list[list.length - 1]
  return { list, dist: clamp(last.y0 * 0.72, 260, 700) }
}

/**
 * One fixed layer holding the name. It is positioned from scroll progress, interpolating
 * between the hero slot and the navbar slot, so it is a single element travelling between them.
 */
export default function TravelingName() {
  const root = useRef(null)
  const wordRefs = useRef([])

  useEffect(() => {
    const layer = root.current
    const hero = document.querySelector('.hero')
    let m = null
    let raf = 0
    let cur = window.scrollY
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const render = (sy) => {
      if (!m) return
      const p = clamp(sy / m.dist, 0, 1)
      m.list.forEach((w, i) => {
        const el = wordRefs.current[i]
        if (!el) return
        const t = clamp((p - i * STAGGER) / (1 - (words.length - 1) * STAGGER), 0, 1)
        const e = ease(t)
        const x = lerp(w.x0, w.x1, e)
        const y = lerp(w.y0 - sy, w.y1, e)
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translateY(-50%)`
        el.style.fontSize = `${lerp(w.f0, w.f1, e)}px`
        el.style.letterSpacing = `${lerp(w.l0, w.l1, e)}em`
      })
      hero?.style.setProperty('--p', p.toFixed(4))
    }

    const tick = () => {
      const target = window.scrollY
      cur = reduce ? target : cur + (target - cur) * 0.2
      if (Math.abs(target - cur) < 0.15) cur = target
      render(cur)
      raf = cur === target ? 0 : requestAnimationFrame(tick)
    }
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const remeasure = () => {
      m = measure()
      cur = window.scrollY
      render(cur)
      if (m) layer.classList.add('is-ready')
    }

    remeasure()
    document.fonts?.ready.then(remeasure)
    let rz = 0
    const onResize = () => {
      cancelAnimationFrame(rz)
      rz = requestAnimationFrame(remeasure)
    }
    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(rz)
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="fname" ref={root} aria-hidden="true">
      {words.map((w, i) => (
        <span key={w} className="fname__w" ref={(el) => (wordRefs.current[i] = el)}>
          {w}
        </span>
      ))}
    </div>
  )
}
