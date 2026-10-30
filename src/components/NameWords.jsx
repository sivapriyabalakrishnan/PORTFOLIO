import { Fragment } from 'react'
import { profile } from '../data/content'

/** Renders the full name as one span per word; the travelling name measures these. */
export default function NameWords() {
  return profile.name.split(' ').map((w, i) => (
    <Fragment key={w}>
      {i > 0 && ' '}
      <span data-w>{w}</span>
    </Fragment>
  ))
}
