export function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
