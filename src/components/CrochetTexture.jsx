import { imageUrl } from '../utils/imageUrl'

/**
 * Very light crochet doily pattern behind the whole page.
 * Place it as the first child of a `relative` wrapper: everything after it is drawn on top.
 */
export function CrochetTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-size-[190px] bg-repeat opacity-[0.07]"
      style={{ backgroundImage: `url(${imageUrl('ornaments/crochet-doily.webp')})` }}
    />
  )
}
