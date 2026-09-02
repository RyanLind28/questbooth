import { photoByName } from './photos';

export type Package = {
  /** used for the /pricing anchor and the ?package= booking param */
  id: string;
  name: string;
  tagline: string;
  description: string;
  photo: string;
  photoAlt: string;
  /** the one carrying the "Most Popular" badge and the primary button */
  featured?: boolean;
  features: string[];
};

/**
 * The two packages, in one place. Rendered by <PackageCard /> on both the
 * home page and the pricing page, so a change here lands on both.
 */
export const packages: Package[] = [
  {
    id: 'manned-digital',
    name: 'Manned Digital',
    tagline: 'Full Service',
    description:
      'Our team runs the booth from start to finish while your guests share their photos straight to their phones.',
    photo: photoByName('QuestBooth_15').src,
    photoAlt: photoByName('QuestBooth_15').alt,
    features: [
      'Digital booth: photos sent straight to guests by text, WhatsApp, QR code or email',
      'Customised photo templates to match your event and colour scheme',
      'Props: a vast array of hats, masks, glasses and more',
      'Professional overhead LED lighting for a better look with no glare',
      'A member of staff on hand to help with props and anything else',
      'A link after the event to download every picture from the night',
    ],
  },
  {
    id: 'manned-prints',
    name: 'Manned Digital + Instant Prints',
    tagline: 'Complete Experience',
    description:
      'Everything in our manned digital package, plus instant prints your guests take home as keepsakes.',
    photo: photoByName('QuestBooth_8').src,
    photoAlt: photoByName('QuestBooth_8').alt,
    featured: true,
    features: [
      'Instant prints: the latest technology gets pictures in guests’ hands in as little as 8 seconds',
      'Digital booth: photos sent straight to guests by text, WhatsApp, QR code or email',
      'Customised photo templates to match your event and colour scheme',
      'Props: a vast array of hats, masks, glasses and more',
      'Professional overhead LED lighting for a better look with no glare',
      'A member of staff on hand to help with props and anything else',
      'A link after the event to download every picture from the night',
    ],
  },
];
