/**
 * Every photo on the site lives in `src/assets/photos/`.
 *
 * Drop a new image into that folder and it is picked up automatically — it
 * appears in the home page gallery with no code change. Vite fingerprints and
 * copies the file at build time, so a typo'd or deleted file is a build error
 * rather than a broken image in production.
 *
 * The fixed slots (hero, about, closing CTA, bento tiles, package cards) look
 * their photo up by FILENAME, not by position, so adding or removing images
 * never reshuffles them. Renaming one of those files moves that slot back to
 * the fallback photo — see `photoByName`.
 */
const files = import.meta.glob<string>(
  '../assets/photos/*.{jpg,jpeg,png,webp,avif}',
  { eager: true, query: '?url', import: 'default' }
);

export type Photo = {
  /** filename without its extension, e.g. "QuestBooth_6" */
  name: string;
  src: string;
  alt: string;
};

/** Alt text for the photos we've actually looked at. Anything without an entry
 *  falls back to a generic description — add to this as new photos land so the
 *  gallery stays readable to screen readers and to Google. */
const alts: Record<string, string> = {
  QuestBooth_6: 'A gold sequin backdrop lit for a QuestBooth photo booth',
  QuestBooth_7: 'A QuestBooth prop table laid out with hats, masks and glasses',
  QuestBooth_8:
    'A QuestBooth prop table piled with pirate hats, masks and novelty props beside the backdrop',
  QuestBooth_9: 'The QuestBooth photo booth set up and ready at a venue',
  QuestBooth_10: 'A QuestBooth setup beside a backdrop and red carpet at a venue',
  QuestBooth_13: 'A rustic wood and festoon light backdrop for a QuestBooth photo booth',
  QuestBooth_14:
    'The QuestBooth booth, prop table and red carpet in front of a gold sequin wall',
  QuestBooth_15:
    'Three guests posing with hats, masks and props in front of the gold sequin backdrop',
  QuestBooth_16: 'A silver sequin backdrop for a QuestBooth photo booth',
  QuestBooth_17: 'A blush draped fabric backdrop for a QuestBooth photo booth',
  QuestBooth_18: 'A gold sequin backdrop for a QuestBooth photo booth',
};

// numeric-aware sort, so QuestBooth_2 comes before QuestBooth_10
const byName = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

export const photos: Photo[] = Object.entries(files)
  .map(([path, src]) => {
    const name = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    return {
      name,
      src,
      alt: alts[name] ?? 'QuestBooth photo booth setup at a UK event',
    };
  })
  .sort((a, b) => byName.compare(a.name, b.name));

const index = new Map(photos.map((p) => [p.name, p]));

/**
 * Look one photo up by filename (without extension).
 *
 * A miss falls back to the first photo rather than rendering nothing — a page
 * with the wrong hero image still works, one with a blank hero does not. It
 * warns in dev so a rename doesn't go unnoticed.
 */
export const photoByName = (name: string): Photo => {
  const found = index.get(name);
  if (!found) {
    if (import.meta.env.DEV) {
      console.warn(
        `[photos] no photo named "${name}" in src/assets/photos — falling back to ${photos[0]?.name}`
      );
    }
    return photos[0];
  }
  return found;
};
