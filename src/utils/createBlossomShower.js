const PIECE_COUNT = 26

/**
 * Builds a new shower of orange blossoms (and a few ivy leaves) with random sizes and timing.
 * Call it from an event handler and pass the result to <FallingBlossoms pieces={...} /> (src/components/FallingBlossoms.jsx).
 */
export function createBlossomShower() {
  return Array.from({ length: PIECE_COUNT }, (_, index) => {
    const isLeaf = index % 5 === 0
    const spin = (Math.random() > 0.5 ? 1 : -1) * Math.round(300 + Math.random() * 400)
    return {
      id: `${Date.now()}-${index}`,
      image: isLeaf ? 'ivy-story' : 'orange-blossom',
      left: Math.random() * 100,
      width: isLeaf ? 50 + Math.random() * 30 : 22 + Math.random() * 26,
      duration: 2.8 + Math.random() * 2.4,
      delay: Math.random() * 0.9,
      spin,
    }
  })
}
