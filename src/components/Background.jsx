/** Fixed, decorative atmosphere: soft vertical light bands + film grain. Pure CSS, no network. */
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__bands bg__bands--a" />
      <div className="bg__bands bg__bands--b" />
      <div className="bg__scrim" />
      <div className="bg__grain" />
    </div>
  )
}
