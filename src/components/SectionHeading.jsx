export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  number,
}) {
  return (
    <div className="section-heading reveal">
      <div className="section-heading-top">
        <span className="section-eyebrow">{eyebrow}</span>
        {number && <span className="section-number">{number}</span>}
      </div>

      <h2 className="section-title">
        {title} {highlight && <span>{highlight}</span>}
      </h2>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}