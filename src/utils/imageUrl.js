/**
 * Full URL of an image in /public/images.
 * Works locally ("/images/...") and on GitHub Pages ("/site-convite-casamento/images/...").
 * Example: imageUrl('photos/couple-beach.webp')
 */
export function imageUrl(path) {
  return `${import.meta.env.BASE_URL}images/${path}`
}
