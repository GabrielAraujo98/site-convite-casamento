import { wedding } from '../data/wedding'

export function Footer() {
  const { partnerOne, partnerTwo } = wedding.couple
  return (
    <footer className="footer">
      <p>
        {partnerOne} &amp; {partnerTwo} · {wedding.dateLabel}
      </p>
      <p className="footer__hashtag">{wedding.hashtag}</p>
    </footer>
  )
}
