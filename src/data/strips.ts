/**
 * The print strips guests take home: three frames plus a footer designed for
 * the event. They live in `src/assets/booth-strips/` and work exactly like
 * `photos.ts`, so dropping a new strip into that folder is all it takes.
 *
 * Kept separate from `photos` because they are 1:3 and the photo grids are
 * built for 4:3 and square images. Mixing them would crop every strip to a
 * sliver.
 */
const files = import.meta.glob<string>(
  '../assets/booth-strips/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
);

export type Strip = {
  name: string;
  src: string;
  alt: string;
};

const byName = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

/**
 * Alt text stays generic on purpose. The strips carry couples' surnames and
 * wedding dates in their footers, and repeating those in alt text would hand
 * that to search engines.
 */
const sorted: Strip[] = Object.entries(files)
  .map(([path, src]) => ({
    name: path.split('/').pop()!.replace(/\.[^.]+$/, ''),
    src,
    alt: 'A QuestBooth print strip: three photos of guests with props, above a footer designed for their event',
  }))
  .sort((a, b) => byName.compare(a.name, b.name));

/**
 * Strips arrive grouped by event, so filename order puts five identical
 * templates next to each other and the row reads as blocks of one design.
 * Walking the sorted list in strides of 5 interleaves the events instead.
 *
 * It is deterministic rather than random: a fresh shuffle on every render
 * would reshuffle under anyone using the lightbox.
 */
const interleave = (items: Strip[], stride = 5): Strip[] => {
  const n = items.length;
  if (n < 3) return items;
  // a stride sharing a factor with the length would revisit the same slots
  const step = gcd(stride, n) === 1 ? stride : stride + 1;
  const out: Strip[] = [];
  const seen = new Set<number>();
  let i = 0;
  while (out.length < n) {
    if (!seen.has(i)) {
      seen.add(i);
      out.push(items[i]);
    }
    i = (i + step) % n;
    // step landed on a visited slot, so nudge forward to the next free one
    while (seen.has(i) && out.length < n) i = (i + 1) % n;
  }
  return out;
};

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export const strips: Strip[] = interleave(sorted);

/** Look one strip up by filename, for the fixed slots that name a specific strip. */
export const stripByName = (name: string): Strip =>
  sorted.find((s) => s.name === name) ?? sorted[0];
